import React from "react";

type ConfirmRegistrationProps = {}

const ConfirmRegistration: React.FC<ConfirmRegistrationProps> = () => {
    return (
        <div className="d-flex justify-content-center">
            <form >
                <h3>Registration code was send on your email!</h3>
                <div className="form-group row">
                    <label className="col-sm-3 col-form-label">Your email</label>
                    <div className="col-sm-7">
                        <input type="email" className="form-control-plaintext" value="email@example.com" />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Code</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" className="p-1 btn btn-success btn-block">Confirm</button>
            </form>
        </div>

    );
};


export default ConfirmRegistration;