import { useState, useRef } from 'react';
import { useDB } from '../Contexts/dbContext';
import { Container, Button, Card, CardBody, CardHeader, Form, FormGroup } from 'reactstrap';
import Webcam from "react-webcam";
import cloneDeep from 'lodash/cloneDeep';

const videoConstraints = {
    width: 540,
    facingMode: "environment"
};




export default function RenderFoodAudit(props) {
    const { section, part, subdivision, audit, setAudit, updateAudit, updatePic } = useDB();
    const webcamRef = useRef(null);
    const [input, setInput] = useState();
    const [checklist, setChecklist] = useState(props.props.checklist);
    const [picList, setPicList] = useState(props.props.picList);

    async function capture() {
        const imageSrc = webcamRef.current.getScreenshot()
        const picID = await updatePic(imageSrc)
        const newPicList = picList;
        newPicList.push(picID);
        setPicList(newPicList);
        const updatedAudit = cloneDeep(audit);
        const score = 100 - Math.round((checklist.length / picList.length) * 100);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).picList = newPicList;
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).score = score;
        setAudit(updatedAudit);
        updateAudit(updatedAudit);
    }

    const handleText = (event) => {
         setInput(event.target.value);
    }


    const handleDed = () => {
        const updatedCheck = checklist;
        updatedCheck.push(input);
        setChecklist(updatedCheck);
        const updatedAudit = cloneDeep(audit);
        const score = 100 - Math.round((checklist.length / picList.length) * 100);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).score = score;
        setAudit(updatedAudit);
        updateAudit(updatedAudit);
        setInput(null);
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
                    <Form onSubmit={(event) => event.preventDefault()}>
                        <FormGroup className='d-flex justify-content-between'>
                            <input className='col-9' type='text' id='deduction' placeholder='example: sloppy plating' onChange={handleText} />
                            <Button className='col-2' color='danger' onClick={handleDed} >Submit</Button>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
            <Container className='d-flex justify-content-between mt-4 align-items-center'>
                <h4>{checklist.length + ' Unforced Error(s) / ' + picList.length + ' Total Food Item(s)'}</h4><h4>{100 - Math.round((checklist.length / picList.length) * 100)}%</h4>
            </Container>
        </div>
    )
}