import { useDB } from '../Contexts/dbContext';
import { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';

export default function TableOfContents(props) {

    const { setSection, setPart, setSubdivision } = useDB();
    const [partIOpen, setPartIOpen] = useState(false);

    const togglePartI = () => setPartIOpen(!partIOpen);

    const handleEnvP1 = (e) => {
        setPart('Part I: Front of House');
        setSection('Environment');
        setSubdivision(e.target.textContent)
    }

    const handleQual = (e) => {
        setPart(e.target.textContent);
        setSection('Quality Control');
    }

    return(
        <div className='contents col-3 card'>
            <ul>
                <li>Environment</li>
                <ul className='p-0'>
                    <Dropdown isOpen={partIOpen} toggle={togglePartI}>
                        <DropdownToggle caret>Part I: Front of House</DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={handleEnvP1}>Front Entry Area</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <li>Part II: Environment Walk-Through</li>
                    <li>Part III: Bar</li>
                    <li>Part IV: Kitchen</li>
                </ul>
                <li>Quality Control</li>
                <ul>
                    <li onClick={handleQual}>Part I: Food Audit</li>
                    <li onClick={handleQual}>Part II: Focused Menu Items</li>
                    <li onClick={handleQual}>Part III: Attention to Detail</li>
                </ul>
                <li>Guest Experience</li>
                <ul>
                    <li>Dining Room GET</li>
                    <li>Ambience, Team Service & Appearance</li>
                    <li>Bar GET</li>
                    <li>Ambience, Team Service & Appearance</li>
                </ul>
                <li>Team Training & Development</li>
                <ul>
                    <li>Part I: Front of House</li>
                    <li>Part II: Bar</li>
                    <li>Part III: Kitchen</li>
                </ul>
                <li>Operations</li>
                <ul>
                    <li>Part I: Bar</li>
                    <li>Part II: Kitchen</li>
                </ul>
            </ul>
        </div>
    )
}