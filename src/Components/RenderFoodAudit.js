import { useState, useRef } from 'react';
import { useDB } from '../Contexts/dbContext';
import { Container, Button, Card, CardBody, CardHeader, Form, FormGroup } from 'reactstrap';
import Webcam from "react-webcam";

const videoConstraints = {
    width: 540,
    facingMode: "environment"
};




export default function RenderFoodAudit() {
    const { section, part, subdivision, audit, setAudit, updateAudit, updatePic } = useDB();
    const webcamRef = useRef(null);
    const [input, setInput] = useState();
    const [checklist, setChecklist] = useState([]);
    const [picList, setPicList] = useState([]);

    async function capture() {
        const imageSrc = webcamRef.current.getScreenshot()
        const picID = await updatePic(imageSrc)
        const newPicList = picList;
        newPicList.push(picID);
        setPicList(newPicList);
    }

    const handleText = (event) => {
         setInput(event.target.value);
    }

    const handleDed = () => {
        const newChecklist = checklist;
        newChecklist.push(input);
        setChecklist(newChecklist);
    }
        
        
    return (
        <div>
            <p className='col-12 mt-4'>
                Review ticket times, plating and food presentation for all menu items prepared by the Kitchen team and make
                note of any menu item that does not meet Finney’s high-quality standards and/or exceeds Finney’s ticket time
                requirement. Track the total number of menu items reviewed and calculate the percentage of prepared menu
                items that meets Finney’s standard requirements.
            </p>
            <div className='container d-flex mt-4'>
                <Card className='col-6'>
                    <Webcam
                        ref={webcamRef}
                        audio={false}
                        screenshotFormat="image/jpeg"
                        videoConstraints={videoConstraints}
                    />
                    <Button color='primary' onClick={capture} >Capture</Button>
                </Card>
            </div>
            <Card className='mt-3'>
                <CardHeader>Add a comment here for an unforced error</CardHeader>
                <CardBody>
                    <Form>
                        <FormGroup className='d-flex justify-content-between'>
                            <input className='col-9' type='text' id='deduction' onChange={handleText} />
                            <Button className='col-2' color='danger' onClick={handleDed} >Submit</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            <Container className='d-flex justify-content-start mt-4'>
                <h4>{checklist.length}/</h4>
            </Container>
        </div>
    )
}