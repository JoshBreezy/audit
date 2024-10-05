import { Container, Button } from 'reactstrap';
import oldAudit from '../OldAudits/oldAudit.pdf';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { useState } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
 

export default function VenturaQ3 () {

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url,
      ).toString();

    const [page, setPage] = useState(1);

    const prevPage = () => {
        const newPage = page - 1;
        setPage(newPage);
    };

    const nextPage = () => {
        const newPage = page + 1;
        setPage(newPage);
    };


    return (
        <>
            <Container className='pt-3' >
                <Document file={oldAudit}  >
                    <Page pageNumber={page} className='pdfPage' />
                </Document>
            </Container>
            <Container className='mt-1'>
                <Button color='primary' onClick={prevPage} className='ms-3'>Prev</Button>
                <Button color='primary' onClick={nextPage} className='ms-3'>Next</Button>
            </Container>
        </>
    )
};