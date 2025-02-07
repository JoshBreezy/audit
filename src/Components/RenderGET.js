import { Table, Input } from 'reactstrap';

export default function RenderGet(props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th>Dining Room</th>
                    <th>GET</th>
                    <th>Ambience</th>
                    <th>Team Service</th>
                    <th>Appearance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>Day One - Lunch</th>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.get.dayOneLunch} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.ambience.dayOneLunch} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.teamService.dayOneLunch} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.appearance.dayOneLunch} />
                    </td>
                </tr>
                <tr>
                    <th scope='row'>Day One - Dinner</th>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.get.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.ambience.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.teamService.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.diningRoom.appearance.dayOneDinner} />
                    </td>
                </tr>
            </tbody>
            <br />
            <br />
            <thead>
                <tr>
                    <th>Bar</th>
                    <th>GET</th>
                    <th>Ambience</th>
                    <th>Team Service</th>
                    <th>Appearance</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope='row'>Day One - Dinner</th>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.get.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.ambience.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.teamService.dayOneDinner} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.appearance.dayOneDinner} />
                    </td>
                </tr>
                <tr>
                    <th scope='row'>Day Two - Lunch</th>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.get.dayTwoLunch} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.ambience.dayTwoLunch} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.teamService.dayTwoLunch} />
                    </td>
                    <td>
                        <Input type='number' defaultValue={props.props.bar.appearance.dayTwoLunch} />
                    </td>
                </tr>
            </tbody>
        </Table>
    )
}