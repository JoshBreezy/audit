import { Table, Container } from 'reactstrap';
import { useDB } from '../Contexts/dbContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UnfinishedList () {

    const { audit, URL, token, setAudit } = useDB();
    const [auditList, setAuditList] = useState();

    const navigate = useNavigate();

    useEffect(() => {
        const list = async() => {
            try {
                const response = await fetch(`${URL}/audits`,
                    {headers: {'Authorization': `Bearer ${token}`}}
                );
                const json = await response.json();
                setAuditList(json);
            } catch (error) {
                console.log(error)
            }
        }
        list();
    },[])

    async function handleSelect(id){
        const response = await fetch(`${URL}/audits/${id}`,
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
            }
        );
        const json = await response.json();
        console.log(json);
        setAudit(json);
        navigate('/auditstart');
    }


    return(
        <>
            <Container className='pt-5'>
                <Table>
                    <thead>
                        <tr>
                            <th>Audit ID #</th>
                            <th>Location</th>
                            <th>Date Started</th>
                            <th>Created By</th>
                        </tr>
                    </thead>
                    <tbody>
                        {auditList && 
                            auditList.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <th scope='row' onClick={() => handleSelect(item._id)}>{item._id.substring(17)}</th>
                                        <td>{item.location}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.author}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    )

}