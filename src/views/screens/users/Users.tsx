import React from "react";

interface IUsers {

}

const Users: React.FC<IUsers> = ({}): JSX.Element => {
    return (
        <React.Fragment>
            <span>Home</span>
            <table>
                <thead>
                <th>id</th>
                <th>shortcode</th>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>header_header</td>
                </tr>
                </tbody>
            </table>
            <span>trabaja con nostros</span>
            <table>
                <thead>
                <th>id</th>
                <th>shortcode</th>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>header_header</td>
                </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default Users;