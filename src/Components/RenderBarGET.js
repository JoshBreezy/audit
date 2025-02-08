import { Table, Input, Button } from 'reactstrap';
import { useState } from 'react';
import { useDB } from '../Contexts/dbContext';
import cloneDeep from 'lodash/cloneDeep';

export default function RenderDiningGet(props) {

    const { audit, setAudit, section, subdivision, part } = useDB();

    const [getValues, setGetValues] = useState(props.props)

    const handleValueChange = (e, category, field) => {
        const { value } = e.target;
        setGetValues(prevValues => ({
            ...prevValues,
            bar: {
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
    }


    return (
        <Table>
            <thead>
                <tr>
                    <th>Bar</th>
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
                        <Input type='number' onChange={(e) => handleValueChange(e, 'get', 'dayOneDinner')} defaultValue={getValues.bar.get.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' onChange={(e) => handleValueChange(e, 'ambience', 'dayOneDinner')} defaultValue={getValues.bar.ambience.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' onChange={(e) => handleValueChange(e, 'teamService', 'dayOneDinner')} defaultValue={getValues.bar.teamService.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' onChange={(e) => handleValueChange(e, 'appearance', 'dayOneDinner')} defaultValue={getValues.bar.appearance.dayOneDinner} />
                    </td>
                </tr>
                <tr>
                    <th scope='row'>Day One - Dinner</th>
                    <td>
                        <Input type='number' onChange={(e) => handleValueChange(e, 'get', 'dayTwoLunch')} defaultValue={getValues.bar.get.dayTwoLunch} />
                    </td>
                    <td>
                        <Input type='number' onChange={(e) => handleValueChange(e, 'ambience', 'dayTwoLunch')} defaultValue={getValues.bar.ambience.dayTwoLunch} />
                    </td>
                    <td>
                        <Input type='number' onChange={(e) => handleValueChange(e, 'teamService', 'dayTwoLunch')} defaultValue={getValues.bar.teamService.dayTwoLunch} />
                    </td>
                    <td>
                        <Input type='number' onChange={(e) => handleValueChange(e, 'appearance', 'dayTwoLunch')} defaultValue={getValues.bar.appearance.dayTwoLunch} />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Button className='mt-3' size='lg' onClick={handleSubmit} color='primary'>Submit</Button>
            </tfoot>
        </Table>
    )
}