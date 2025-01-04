import { Form, FormGroup, ModalHeader, Input, Label, Modal, ModalBody, ModalFooter, Button, Container } from 'reactstrap';
import { useState, useRef } from 'react';
import Webcam from "react-webcam";
import { useDB } from '../Contexts/dbContext';
import cloneDeep from 'lodash/cloneDeep';

const videoConstraints = {
  width: 540,
  facingMode: "environment"
};





export default function RenderChecklist () {

    const {section, part, subdivision, audit, setAudit} = useDB();

    const webcamRef = useRef(null);

    const [url, setUrl] = useState(null);

    const [modal, setModal] = useState(false);
    
    const [checkedState, setCheckedState] = useState(audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist);

    const [camera, setCamera] = useState (false);


    const handleCheck = (position) => {
        const updatedCheck = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, index) => 
            position === index ? {...item, check: !item.check} : item
        );
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        setAudit(updatedAudit);
        updatedCheck[position].check && toggleReq();

    }

    const removePrevDed = () => {
        const last = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist[checkedState.length]
        if (last.deduction) {
            const updatedAudit = cloneDeep(audit);
            updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.pop();
            setAudit(updatedAudit);
        }
    }

    function handleCam () {
        toggleReq();
        setCamera(true);
    }

    const toggleReq = () => setModal(!modal);

    function capture () {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
        setCamera(false);
    }

    const [dedOpen, setDedOpen] = useState(false);

    const handleAddDed = () => {
        setDedOpen(!dedOpen);
    }

    function submitDed () {
        const newItem = {
            text: dedText,
            value: 1,
            check: false,
            deduction: true
        }
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.push(newItem);
        setAudit(updatedAudit);
        setDedOpen(false);
    }

    const [dedText, setDedText] = useState();

    const handleDedChange = (event) => {
        setDedText(event.target.value);
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
                    <FormGroup text key={checkedState.length+1}>
                        <ModalHeader>Deduction Description</ModalHeader>
                        <Input type='text' id={checkedState.length+1} onChange={handleDedChange} className='mt-3' placeholder='ex: area needs better organization' />
                        <Container className='d-flex '>
                            <Button color='primary' className='btn mt-3' onClick={submitDed}>Submit</Button>
                            <Button color='danger' className='btn mt-3 ms-3' onClick={handleAddDed}>Cancel</Button>
                        </Container>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        {audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, index) => {
            return (
                <FormGroup check key={item.text} >
                    <Input type='checkbox' 
                        id={index.text}
                        name={item.text}
                        checked={item.check}
                        onChange={() => handleCheck(index)} />
                        <Label check for={index.toString()}>
                            {item.text}
                        </Label>
                </FormGroup>
            )
        })}
        <Button color='danger' className='btn mt-2' onClick={handleAddDed} >Additional Deduction</Button>
        <Button color='danger' className='btn mt-2 ms-4' onClick={removePrevDed}>Undo Previous Additional Deduction</Button>
        </>
    )
}