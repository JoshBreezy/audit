import { Form, FormGroup, ModalHeader, Input, Label, Modal, ModalBody, ModalFooter, Button, Container, Table } from 'reactstrap';
import { useState, useRef } from 'react';
import Webcam from "react-webcam";
import { useDB } from '../Contexts/dbContext';
import cloneDeep from 'lodash/cloneDeep';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const videoConstraints = {
    width: 540,
    facingMode: "environment"
};





export default function RenderChecklist() {

    const { section, part, subdivision, audit, setAudit } = useDB();

    const webcamRef = useRef(null);

    const [url, setUrl] = useState(null);

    const [modal, setModal] = useState(false);

    const [checkedState, setCheckedState] = useState(audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist);

    const [camera, setCamera] = useState(false);

    const [position, setPosition] = useState();


    function capture() {
        const imageSrc = webcamRef.current.getScreenshot();
        setUrl(imageSrc);
        const updatedCheck = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, index) =>
            position === index ? { ...item, photo: imageSrc } : item
        );
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        setAudit(updatedAudit);
        setCamera(false);
        console.log(url);
    }


    function handleCheck(position) {
        const updatedCheck = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, index) =>
            position === index ? { ...item, check: !item.check } : item
        );
        setPosition(position);
        updatedCheck[position].check && toggleReq();
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        setAudit(updatedAudit);
    }


    const handleDropVal = (selectedValue, index) => {
        const updatedCheck = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, idx) =>
            idx === index ? { ...item, value: parseInt(selectedValue, 10) } : item
        );
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        setAudit(updatedAudit);
    }

    const handleTextInput = (selectedValue, index) => {
        const updatedCheck = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, idx) =>
            idx === index ? { ...item, value: parseInt(selectedValue, 10) } : item
        );
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        setAudit(updatedAudit);
    }


    const removePrevDed = () => {
        const len = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.length;
        const last = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist[len - 1];
        if (last.deduction) {
            const updatedAudit = cloneDeep(audit);
            updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.pop();
            setAudit(updatedAudit);
        }
    }

    function handleCam() {
        toggleReq();
        setCamera(true);
    }

    const toggleReq = () => setModal(!modal);

    const [dedOpen, setDedOpen] = useState(false);

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
                        <FormGroup text key={checkedState.length + 1}>
                            <ModalHeader>Deduction Description</ModalHeader>
                            <Input type='text' id={checkedState.length + 1} onChange={handleDedChange} className='mt-3' placeholder='ex: area needs better organization' />
                            <Container className='d-flex '>
                                <Button color='primary' className='btn mt-3' onClick={submitDed}>Submit</Button>
                                <Button color='danger' className='btn mt-3 ms-3' onClick={handleAddDed}>Cancel</Button>
                            </Container>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            {audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, index) => {
                if (item.subtext) {
                    return (
                        <>
                            <p>Management</p>
                            <ul>
                                <li>{item.subtext.Managers.bullet}</li>
                            </ul>
                            <p>Team Members</p>
                            <ul>
                                <li>{item.subtext.Team[0].bullet}</li>
                                <ul>
                                    {item.subtext.Team[0].subBullet.map((item) => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })}
                                </ul>
                                <li>{item.subtext.Team[1].bullet}</li>
                                <ul>
                                    {item.subtext.Team[1].subBullet.map((item) => {
                                        return (
                                            <li>{item}</li>
                                        )
                                    })}
                                </ul>
                            </ul>
                        </>
                    )
                }
                if (item.text) {
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
                            {item.photo && <FontAwesomeIcon icon="fa-regular fa-camera-retro" />}
                        </FormGroup>
                    )
                }
                if (item.dropText) {
                    return (
                        <FormGroup key={item.dropText}>
                            <Label for={item.dropText}>
                                {item.dropText}
                            </Label>
                            <Input type='select'
                                id={item.droptext}
                                name={item.dropText}
                                defaultValue={item.value}
                                onChange={(e) => handleDropVal(e.target.value, index)}
                            >
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </Input>
                        </FormGroup>
                    )
                }
                if (item.tdText) {
                    return (
                        <>
                            <ul>
                                {item.tdText.map((item) => {
                                    return (
                                        <li>{item}</li>
                                    )
                                })}
                            </ul>
                        </>
                    )
                }
                if (item.scaleText) {
                    return (
                        <FormGroup key={item.scaleText}>
                            <Label for={item.scaleText}>
                                {item.scaleText}
                            </Label>
                            <Input
                                type='text'
                                id={item.scaleText}
                                name={item.scaleText}
                                defaultValue={item.value}
                                onChange={(e) => handleTextInput(e.target.value, index)}
                            />
                            <p className='mt-2'>10 points per Team Member - training must be fully complete, reviewed, and acceptably graded for a pass to achieve full points – no partial scoring</p>
                        </FormGroup>
                    )
                }
            })}
            <Button color='danger' className='btn mt-2' onClick={handleAddDed} >Additional Deduction</Button>
            <Button color='danger' className='btn mt-2 ms-4' onClick={removePrevDed}>Undo Previous Additional Deduction</Button>
        </>
    )
}