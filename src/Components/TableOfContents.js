import { useDB } from '../Contexts/dbContext';
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import cloneDeep from 'lodash/cloneDeep';
import { useNavigate } from 'react-router-dom';

export default function TableOfContents() {
    const navigate = useNavigate();

    const { setSection, setPart, setSubdivision, setFinalizeModal, finalizeModal, audit, updateAudit, user, setError } = useDB();
    const [partIOpen, setPartIOpen] = useState(false);
    const [partIVOpen, setPartIVOpen] = useState(false);
    const [opOpen, setOpOpen] = useState(false);
    const [getOpen, setGetOpen] = useState(false);

    const togglePartI = () => setPartIOpen(!partIOpen);
    const togglePartIV = () => setPartIVOpen(!partIVOpen);
    const toggleOp = () => setOpOpen(!opOpen);
    const toggleGet = () => setGetOpen(!getOpen);
    const toggleFinal = () => {
        if (user.admin) {
            setFinalizeModal(!finalizeModal);
        } else {
            setError('You are not authorized');
        }
    }

    const handleFinalize = () => {
        const finalAudit = cloneDeep(audit);
        finalAudit.finalized = true;
        updateAudit(finalAudit);
        toggleFinal();
        navigate('/landing');
    }

    const handleEnvP1 = (e) => {
        setPart('Part I: Front of House');
        setSection('Environment');
        setSubdivision(e.target.textContent);
    }

    const handleEnvP2 = (e) => {
        setPart('Part II: Environment Walk-Through');
        setSection('Environment');
        setSubdivision(e.target.textContent);
    }

    const handleEnvP3 = (e) => {
        setPart('Part III: Bar');
        setSection('Environment');
        setSubdivision(e.target.textContent);
    }

    const handleEnvP4 = (e) => {
        setPart('Part IV: Kitchen');
        setSection('Environment');
        setSubdivision(e.target.textContent);
    }


    const handleQualP1 = (e) => {
        setPart('Part I: Food Audit');
        setSection('Quality Control');
        setSubdivision(e.target.textContent);
    }

    const handleQualP2 = (e) => {
        setPart('Part II: Focused Menu Items');
        setSection('Quality Control');
        setSubdivision(e.target.textContent);
    }

    const handleQualP3 = (e) => {
        setPart('Part III: Attention To Detail');
        setSection('Quality Control');
        setSubdivision(e.target.textContent);
    }

    const handleOpBar = (e) => {
        setPart('Bar');
        setSection('Operations');
        setSubdivision(e.target.textContent);
    }

    const handleOpKitch = (e) => {
        setPart('Kitchen');
        setSection('Operations');
        setSubdivision(e.target.textContent);
    }

    const handleTD = (e) => {
        setPart('Front of House');
        setSection('Team Training & Development');
        setSubdivision(e.target.textContent);
    }

    const handleTD2 = (e) => {
        setPart('Bar');
        setSection('Team Training & Development');
        setSubdivision(e.target.textContent);
    }

    const handleTD3 = (e) => {
        setPart('Kitchen');
        setSection('Team Training & Development');
        setSubdivision(e.target.textContent);
    }

    const handleGET = (e) => {
        setPart('Guest Experience');
        setSection('Guest Experience');
        setSubdivision(e.target.textContent);
    }


    return (
        <div className='contents col-3 card'>
            <ul>
                <li>Environment</li>
                <ul className='p-0'>
                    <Dropdown isOpen={partIOpen} toggle={togglePartI}>
                        <DropdownToggle className='col-12 mb-2' caret>Front of House</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleEnvP1}>Front Entry Area</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Dining Area</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Bar (Exterior)</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Women's Restroom</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Men's Restroom</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Games Room</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Expo Line</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Patio Area</DropdownItem>
                            <DropdownItem onClick={handleEnvP1}>Exterior</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Button className='col-12 mb-2' onClick={handleEnvP2}>Walk-Through</Button>
                    <Button className='col-12 mb-2' onClick={handleEnvP3}>Bar</Button>
                    <Dropdown isOpen={partIVOpen} toggle={togglePartIV}>
                        <DropdownToggle className='col-12 mb-2' caret>Kitchen</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleEnvP4}>Exterior Back Area</DropdownItem>
                            <DropdownItem onClick={handleEnvP4}>Office</DropdownItem>
                            <DropdownItem onClick={handleEnvP4}>Prep Area</DropdownItem>
                            <DropdownItem onClick={handleEnvP4}>Dry Storage</DropdownItem>
                            <DropdownItem onClick={handleEnvP4}>Cooking Line</DropdownItem>
                            <DropdownItem onClick={handleEnvP4}>Dish Area</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ul>
                <li>Quality Control</li>
                <Button className='col-12 mb-2' onClick={handleQualP1}>Food Audit</Button>
                <Button className='col-12 mb-2' onClick={handleQualP2}>Focused Menu Items</Button>
                <Button className='col-12 mb-2' onClick={handleQualP3}>Attention To Detail</Button>
                <li>Guest Experience</li>
                <ul className='p-0'>
                    <Dropdown isOpen={getOpen} toggle={toggleGet}>
                        <DropdownToggle className='col-12 mb-2' caret>GET</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleGET}>Dining Room</DropdownItem>
                            <DropdownItem onClick={handleGET}>Bar</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ul>
                <li>Team Training & Development</li>
                <ul className='p-0'>
                    <Button className='col-12 mb-2' onClick={handleTD}>Front of House</Button>
                    <Button className='col-12 mb-2' onClick={handleTD2}>Bar</Button>
                    <Button className='col-12 mb-2' onClick={handleTD3}>Kitchen</Button>
                </ul>
                <li>Operations</li>
                <ul className='p-0'>
                    <Dropdown isOpen={opOpen} toggle={toggleOp}>
                        <DropdownToggle className='col-12 mb-2' caret>Bar</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleOpBar}>Closing Checklist</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Opening Checklist</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Quality Control</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Inventory</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Appearance</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Button className='col-12 mb-2' onClick={handleOpKitch}>Kitchen</Button>
                </ul>
            </ul>
            <Modal isOpen={finalizeModal} toggle={toggleFinal} centered>
                <ModalHeader>Are you sure you want to finalize?</ModalHeader>
                <ModalBody className='d-flex justify-content-center'>
                    <Button className='col col-5 m-3' color='danger' onClick={handleFinalize} >Finalize</Button>
                    <Button className='col col-5 m-3' color='primary' onClick={toggleFinal} >Cancel</Button>
                </ModalBody>
            </Modal>
            <Button className='col-11 align-self-end mb-2' color='danger' onClick={toggleFinal} >Finalize</Button>
        </div>
    )
}