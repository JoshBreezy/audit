import { Table, Input, Button } from 'reactstrap';
import { useState } from 'react';
import { useDB } from '../Contexts/dbContext';
import cloneDeep from 'lodash/cloneDeep';

export default function RenderDiningGet(props) {

    const { audit, setAudit, section, subdivision, part, updateAudit } = useDB();

    const [getValues, setGetValues] = useState(props.props)

    const handleValueChange = (e, category, field) => {
        const { value } = e.target;
        setGetValues(prevValues => ({
            ...prevValues,
            diningRoom: {
                ...prevValues.diningRoom,
                [category]: {
                    ...prevValues.diningRoom[category],
                    [field]: parseInt(value)
                }
            }
        }));
    };

    const handleSubmit = () => {
        console.log(getValues);
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = getValues;
        setAudit(updatedAudit);
        updateAudit(updatedAudit);
    }


    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Dining Room</th>
                        <th>GET</th>
                        <th>Ambience</th>
                        <th>Team Service</th>
                        <th>Appearance</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>Day One - Lunch</th>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'get', 'dayOneLunch')} defaultValue={getValues.diningRoom.get.dayOneLunch} />
                        </td>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'ambience', 'dayOneLunch')} defaultValue={getValues.diningRoom.ambience.dayOneLunch} />
                        </td>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'teamService', 'dayOneLunch')} defaultValue={getValues.diningRoom.teamService.dayOneLunch} />
                        </td>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'appearance', 'dayOneLunch')} defaultValue={getValues.diningRoom.appearance.dayOneLunch} />
                        </td>
                    </tr>
                    <tr>
                        <th scope='row'>Day One - Dinner</th>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'get', 'dayOneDinner')} defaultValue={getValues.diningRoom.get.dayOneDinner} />
                        </td>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'ambience', 'dayOneDinner')} defaultValue={getValues.diningRoom.ambience.dayOneDinner} />
                        </td>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'teamService', 'dayOneDinner')} defaultValue={getValues.diningRoom.teamService.dayOneDinner} />
                        </td>
                        <td>
                            <Input type='number' onChange={(e) => handleValueChange(e, 'appearance', 'dayOneDinner')} defaultValue={getValues.diningRoom.appearance.dayOneDinner} />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button className='mt-3' size='lg' onClick={handleSubmit} color='primary'>Submit</Button>
        </>
    )
}