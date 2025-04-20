import { useState } from 'react';
import { useDB } from '../Contexts/dbContext';
import { Container, Table } from 'reactstrap';

export default function RenderFocused (props) {

    const { setAudit, updateAudit } = useDB();

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
                        
                    </tbody>
                </Table>
            </Container>
        </div>
    )


}