import React from "react";
import { Nav } from 'react-bootstrap';

type RegistrationCompleteProps = {}

function RegistrationComplete() {
    return (
            <div className="align-self-center">
                <h3>User, your profile is seccesfuly created, welcome!</h3>
                <Nav.Link href={"/Profile"}>Click on the link to go to the profile page</Nav.Link>
            </div>
    );
};


export default RegistrationComplete;