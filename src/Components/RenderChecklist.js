import Checklist from '../Lists/Checklist';
import { FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import Cam from './Cam';
import { useState, useRef, useCallback } from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 540,
  facingMode: "user"
};



export default function RenderChecklist () {

    const webcamRef = useRef(null);

    const [url, setUrl] = useState(null);

    const [modal, setModal] = useState(false);
    
    const [checkedState, setCheckedState] = useState(
        new Array(Checklist.length).fill(false)
    );

    const [score, setScore] = useState (Checklist.length);

    const [camera, setCamera] = useState (false);


    const handleCheck = (position) => {
        const updatedCheckState = checkedState.map((item, index) => 
            index === position ? !item : item
        );
        setCheckedState(updatedCheckState);
        setScore(Checklist.length - updatedCheckState.filter(value => value).length);
        toggleReq();
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
        {Checklist.map((item, index) => {
            return (
                <FormGroup check key={index} >
                    <Input type='checkbox' 
                        id={index} 
                        name={index}
                        checked={checkedState[index]}
                        onChange={() => handleCheck(index)} />
                        <Label check>
                            {item}
                        </Label>
                </FormGroup>
            )
        })}
        <h1>{score}</h1>
        </>
    )
}