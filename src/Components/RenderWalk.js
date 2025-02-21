import { useDB } from '../Contexts/dbContext';
import { FormGroup, Input, Label } from 'reactstrap';
import { cloneDeep } from 'lodash';

export default function RenderWalk(props) {

    const { audit, setAudit, section, subdivision, part } = useDB();

    function handleCheck(position) {
        const updatedCheck = props.props.map((item, index) =>
            position === index ? { ...item, check: !item.check } : item
        );
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        setAudit(updatedAudit);
    }

    return (
        <div className='mt-3'>
            {props.props.map((item, index) => {
                if (item.subtext) {
                    return (
                        <>
                            <p>Managers</p>
                            <ul>
                                <li>{item.subtext.Managers.bullet}</li>
                            </ul>
                            <p>Team</p>
                            <ul>
                                {item.subtext.Team.map((item) => {
                                    return (
                                        <>
                                            <li>{item.bullet}</li>
                                            <ul>
                                                {item.subBullet.map((bull) => {
                                                    return (
                                                        <li>{bull}</li>
                                                    )
                                                })}
                                            </ul>
                                        </>
                                    )
                                })}
                            </ul>
                        </>
                    )
                }
                if (item.text) {
                    return (
                        <>
                            <FormGroup check key={item.text} >
                                <Input type='checkbox'
                                    id={item.text}
                                    name={item.text}
                                    checked={item.check}
                                    onChange={() => handleCheck(index)} />
                                <Label check for={item.text} className='col-8'>
                                    {item.text}
                                </Label>
                            </FormGroup>
                        </>
                    )
                }
            })}
        </div>
    )

}