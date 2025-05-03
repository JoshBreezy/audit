import { useDB } from '../Contexts/dbContext';
import { Container, Table } from 'reactstrap';
import cloneDeep from 'lodash/cloneDeep';

export default function RenderFocused(props) {

    const { setAudit, updateAudit, audit, section, part, subdivision } = useDB();
    
    function score(list){
        let count = 0;
        list.map((item) => {
            if(item.check) {
                count += 1;
            }
        })
        return (count);
    }

    function checked() {
        let count = 0;
        props.props.map((item) => {
            if(item.check) {
                count += 1;
            }
        })
        return count;
    }


    function handleCheck(position) {
        const updatedCheck = props.props.map((item, index) =>
            position === index ? { ...item, check: !item.check } : item
        );
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).score = score(updatedCheck)
        setAudit(updatedAudit);
        updateAudit(updatedAudit);
    }

    return (
        <div className='mt-4'>
            <p className='row'>Does the Kitchen team consistently execute Finney’s standards on the following menu items throughout the two (2) day audit...</p>
            <Container className='row'>
                <Table className='col-12'>
                    <thead>
                        <tr>
                            <th>Menu Item</th>
                            <th>Finney's Standard</th>
                            <th>Y/N</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.props.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope='row'>
                                        {item.item}
                                    </th>
                                    <td>
                                        {item.standard}
                                    </td>
                                    <td>
                                        <input 
                                            type='checkbox'
                                            name={item.item}
                                            checked={item.check}
                                            onChange={() => handleCheck(index)} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
            <Container className='d-flex justify-content-between mt-4 align-items-center'>
                <h4>Quality Control Part II: Focused Menu Items (10 points)</h4>
                <h4>{checked()} / 10</h4><h4> {checked() / 10 * 100}%</h4>
            </Container>
        </div>
    )


}