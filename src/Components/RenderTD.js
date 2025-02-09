import { FormGroup, Label, Input, Button } from 'reactstrap';
import { useDB } from '../Contexts/dbContext';
import { useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';

export default function RenderTD(props) {

    const { audit, setAudit, section, part, subdivision } = useDB();
    const [values, SetValues] = useState();

    const handleTextInput = (selectedValue, index) => {
        const updatedCheck = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, idx) =>
            idx === index ? { ...item, value: parseInt(selectedValue, 10) } : item
        );
        SetValues(updatedCheck);
    }

    const handleSubmit = () => {
        const updatedAudit = cloneDeep(audit);
            updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = values;
            setAudit(updatedAudit);
    }


    return (
        <>
            {props.props.map((item, index) => {
                return (
                    <>
                        <ul>
                            {item.tdText && item.tdText.map((thing) => {
                                return (
                                    <li>{thing}</li>
                                )
                            })}
                        </ul>
                        {item.scaleText && <FormGroup key={item.scaleText}>
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
                        </FormGroup>
                        }
                    </>
                )
            })}
            <p className='mt-2'>10 points per Team Member - training must be fully complete, reviewed, and acceptably graded for a pass to achieve full points – no partial scoring</p>
            <Button size='lg' color='primary' onClick={handleSubmit} >Submit</Button>
        </>
    )
}