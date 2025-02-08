import { useDB } from '../Contexts/dbContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu, Button } from 'reactstrap';

export default function TableOfContents(props) {

    const navigate = useNavigate();

    const { setSection, setPart, setSubdivision } = useDB();
    const [partIOpen, setPartIOpen] = useState(false);
    const [partIIOpen, setPartIIOpen] = useState(false);
    const [partIIIOpen, setPartIIIOpen] = useState(false);
    const [partIVOpen, setPartIVOpen] = useState(false);
    const [opOpen, setOpOpen] = useState(false);
    const [opOpenII, setOpOpenII] = useState(false);
    const [TTDOpen, setTTDOpen] = useState(false);
    const [TTD2Open, setTTD2Open] = useState(false);
    const [TTD3Open, setTTD3Open] = useState(false);
    const [getOpen, setGetOpen] = useState(false);

    const togglePartI = () => setPartIOpen(!partIOpen);
    const togglePartII = () => setPartIIOpen(!partIIOpen);
    const togglePartIII = () => setPartIIIOpen(!partIIIOpen);
    const togglePartIV = () => setPartIVOpen(!partIVOpen);
    const toggleOp = () => setOpOpen(!opOpen);
    const toggleOpII = () => setOpOpenII(!opOpenII);
    const toggleTTD = () => setTTDOpen(!TTDOpen);
    const toggleTTD2 = () => setTTD2Open(!TTD2Open);
    const toggleTTD3 = () => setTTD3Open(!TTD3Open);
    const toggleGet = () => setGetOpen(!getOpen);

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


    const handleQual = (e) => {
        setPart(e.target.textContent);
        setSection('Quality Control');
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
                        <DropdownToggle className='col-12' caret>Front of House</DropdownToggle>
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
                    <Dropdown isOpen={partIIOpen} toggle={togglePartII}>
                        <DropdownToggle className='col-12' caret>Environment Walk-Through</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleEnvP2}>Walk-Through</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={partIIIOpen} toggle={togglePartIII}>
                        <DropdownToggle className='col-12' caret>Bar</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleEnvP3}>Bar</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={partIVOpen} toggle={togglePartIV}>
                        <DropdownToggle className='col-12' caret>Kitchen</DropdownToggle>
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
                <ul>
                    <li onClick={handleQual}>Part I: Food Audit</li>
                    <li onClick={handleQual}>Part II: Focused Menu Items</li>
                    <li onClick={handleQual}>Part III: Attention to Detail</li>
                </ul>
                <li>Guest Experience</li>
                <ul className='p-0'>
                    <Dropdown isOpen={getOpen} toggle={toggleGet}>
                        <DropdownToggle className='col-12' caret>GET</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleGET}>Dining Room</DropdownItem>
                            <DropdownItem onClick={handleGET}>Bar</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ul>
                <li>Team Training & Development</li>
                <ul className='p-0'>
                    <Dropdown isOpen={TTDOpen} toggle={toggleTTD}>
                        <DropdownToggle className='col-12' caret>Front of House</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleTD}>Front of House</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={TTD2Open} toggle={toggleTTD2}>
                        <DropdownToggle className='col-12' caret>Bar</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleTD2}>Bar</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={TTD3Open} toggle={toggleTTD3}>
                        <DropdownToggle className='col-12' caret>Kitchen</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleTD3}>Kitchen</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ul>
                <li>Operations</li>
                <ul className='p-0'>
                    <Dropdown isOpen={opOpen} toggle={toggleOp}>
                        <DropdownToggle className='col-12' caret>Bar</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleOpBar}>Closing Checklist</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Opening Checklist</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Quality Control</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Inventory</DropdownItem>
                            <DropdownItem onClick={handleOpBar}>Appearance</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen={opOpenII} toggle={toggleOpII}>
                        <DropdownToggle className='col-12' caret>Kitchen</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleOpKitch}>Kitchen</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </ul>
            </ul>
        </div>
    )
}