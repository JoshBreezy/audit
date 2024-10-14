import { FormGroup, Input, Label, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { useState, useRef } from 'react';
import Webcam from "react-webcam";

const videoConstraints = {
  width: 540,
  facingMode: "environment"
};



export default function RenderChecklist ({props}) {

    const webcamRef = useRef(null);

    const [url, setUrl] = useState(null);

    const [modal, setModal] = useState(false);
    
    const [checkedState, setCheckedState] = useState(
        new Array(props.length).fill(false)
    );

    const [score, setScore] = useState (props.length);

    const [camera, setCamera] = useState (false);


    const handleCheck = (position) => {
        const updatedCheckState = checkedState.map((item, index) => 
            index === position ? !item : item
        );
        setCheckedState(updatedCheckState);
        setScore(props.length - updatedCheckState.filter(value => value).length);
        updatedCheckState[position] && toggleReq();
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
        {props.map((item, index) => {
            return (
                <FormGroup check key={index} >
                    <Input type='checkbox' 
                        id={index.toString()}
                        name={index}
                        checked={checkedState[index]}
                        onChange={() => handleCheck(index)} />
                        <Label check for={index.toString()}>
                            {item}
                        </Label>
                </FormGroup>
            )
        })}
        <h1>Score:{score}</h1>
        </>
    )
}