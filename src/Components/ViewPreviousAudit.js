import { Table, Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function ViewPreviousAudit() {
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>
                            Location
                        </th>
                        <th>
                            Date
                        </th>
                        <th>
                            Overall Score
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope ='row'>
                            <Link to='./VenturaQ3'>Ventura</Link>
                        </th>
                        <td>
                            Q3 2024
                        </td>
                        <td>
                            61%
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}