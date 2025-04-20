import { useState } from 'react';
import { useDB } from '../Contexts/dbContext';
import { Container, Table, FormGroup, Input } from 'reactstrap';
import cloneDeep from 'lodash/cloneDeep';

export default function RenderFocused(props) {

    const { setAudit, updateAudit, audit, section, part, subdivision } = useDB();

    function handleCheck(position) {
        const updatedCheck = props.props.map((item, index) =>
            position === index ? { ...item, check: !item.check } : item
        );
        const updatedAudit = cloneDeep(audit);
        updatedAudit.sections.find(sec => sec.name === section).parts.find(prt => prt.name === part).subdivisions.find(sub => sub.name === subdivision).checklist = updatedCheck;
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
        </div>
    )


}