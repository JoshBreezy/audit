import { Form, FormGroup, ModalHeader, Input, Label, Modal, ModalBody, ModalFooter, Button, Container } from 'reactstrap';
import { useState, useRef } from 'react';
import Webcam from "react-webcam";
import { useDB } from '../Contexts/dbContext';
import cloneDeep from 'lodash/cloneDeep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

const videoConstraints = {
    width: 540,
    facingMode: "environment"
};


export default function RenderChecklist(props) {

    const { section, part, subdivision, audit, setAudit, updateAudit, updatePic } = useDB();
    const webcamRef = useRef(null);
    const [modal, setModal] = useState(false);
    const [camera, setCamera] = useState(false);
    const [position, setPosition] = useState();
    const [picModal, setPicModal] = useState(false);
    const [pic, setPic] = useState(null);
    const [dedOpen, setDedOpen] = useState(false);
    const [dedText, setDedText] = useState();

    const toggleReq = () => setModal(!modal);
    const togglePic = () => setPicModal(!picModal);


    function handleCheck(position) {
        const updatedCheck = props.props.map((item, index) =>
            position === index ? { ...item, check: !item.check } : item
        );
        setPosition(position);
        if(!updatedCheck[position].check) {
            updatedCheck[position].photo = null;
        }
        updatedCheck[position].check && toggleReq();
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        setAudit(updatedAudit);
        updateAudit(updatedAudit);
    }

    const removePrevDed = () => {
        const len = props.props.length;
        const last = props.props[len - 1];
        if (last.deduction) {
            const updatedAudit = cloneDeep(audit);
            updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.pop();
            setAudit(updatedAudit);
            updateAudit(updatedAudit);
        }
    }

    function handleCam() {
        toggleReq();
        setCamera(true);
    }

    const handleAddDed = () => {
        setDedOpen(!dedOpen);
    }

    function submitDed() {
        const newItem = {
            text: dedText,
            value: 1,
            check: false,
            deduction: true
        }
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.push(newItem);
        setAudit(updatedAudit);
        updateAudit(updatedAudit);
        setDedOpen(false);
    }

    const handleDedChange = (event) => {
        setDedText(event.target.value);
    }

    const displayPhoto = (index) => {
        setPic(audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist[index].photo);
        togglePic();
    }

    function capture() {
            const imageSrc = webcamRef.current.getScreenshot();
            const picID = updatePic(imageSrc);
            const updatedCheck = props.props.map((item, index) =>
                position === index ? { ...item, photo: picID } : item
            );
            const updatedAudit = cloneDeep(audit);
            updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
            setAudit(updatedAudit);
            updateAudit(updatedAudit);
            setCamera(false);
            setPosition(null);
        }

    return (
        <>
            <Modal isOpen={modal} toggle={toggleReq} centered>
                <ModalBody>
                    Would you like to take a photo?
                </ModalBody>
                <ModalFooter>
                    <Button color='success' onClick={handleCam} >Yes</Button>
                    <Button color='danger' onClick={toggleReq} >No</Button>
                </ModalFooter>
            </Modal>
            <Modal isOpen={camera} centered>
                <Webcam
                    ref={webcamRef}
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                />
                <Button color='primary' onClick={capture} >Capture</Button>
            </Modal>
            <Modal isOpen={dedOpen} toggle={handleAddDed} centered>
                <ModalBody>
                    <Form onSubmit={(event) => event.preventDefault()}>
                        <FormGroup text key='deduction'>
                            <ModalHeader>Deduction Description</ModalHeader>
                            <Input type='text' id='deduction' onChange={handleDedChange} className='mt-3' placeholder='ex: area needs better organization' />
                            <Container className='d-flex '>
                                <Button color='primary' className='btn mt-3' onClick={submitDed}>Submit</Button>
                                <Button color='danger' className='btn mt-3 ms-3' onClick={handleAddDed}>Cancel</Button>
                            </Container>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            <Modal isOpen={picModal} size='lg' toggle={togglePic} centered >
                    <img src={pic} alt='deduction' />
            </Modal>
            {props.props.map((item, index) => {
                return (
                    <FormGroup check key={item.text} >
                        <Input type='checkbox'
                            id={item.text}
                            name={item.text}
                            checked={item.check}
                            onChange={() => handleCheck(index)} />
                        <Label check for={item.text} className='col-8'>
                            {item.text}
                        </Label>
                        {item.photo && <FontAwesomeIcon icon={faImage} onClick={() => displayPhoto(index)} />}
                    </FormGroup>
                )
            })}
            <Button color='danger' className='btn mt-2' onClick={handleAddDed} >Additional Deduction</Button>
            <Button color='danger' className='btn mt-2 ms-4' onClick={removePrevDed}>Undo Previous Additional Deduction</Button>
        </>
    )



}