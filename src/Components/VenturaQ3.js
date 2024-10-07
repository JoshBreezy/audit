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

    const [numPages, setNumPages] = useState(null);
    const [loading, setLoading] = useState(true);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
      };


    return (
        <>
            <Container clssName='col-12'>
                {loading && <h3>Document Loading</h3>}
            </Container>
            <Container className='pt-3' >
                <Document file={oldAudit} onLoadSuccess={onDocumentLoadSuccess} >
                    {Array.from(
                        new Array(numPages),
                            (el, index) => (
                                <Page
                                    key={`page_${index + 1}`}
                                    pageNumber={index + 1}
                                />
                            ),
                    )}
                </Document>
            </Container>
        </>
    )
};