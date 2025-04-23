import { useDB } from '../Contexts/dbContext';
import { FormGroup, Input, Label} from 'reactstrap';
import cloneDeep from 'lodash/cloneDeep';

export default function KitchDrop (props) {
    const { audit, section, part, subdivision, setAudit, updateAudit } = useDB();


    const handleDropVal = (selectedValue, index) => {
            const updatedCheck = audit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist.map((item, idx) =>
                idx === index ? { ...item, value: parseInt(selectedValue, 10) } : item
            );
            const updatedAudit = cloneDeep(audit);
            updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
            setAudit(updatedAudit);
            updateAudit(updatedAudit);
        }


    return (
        <>
            {props.props.map((item, index) => {
                return(
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
            })}
        </>
    )
}