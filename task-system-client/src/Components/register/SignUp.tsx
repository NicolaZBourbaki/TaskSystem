import React from "react";

type SignUpProps = {}

const SignUp: React.FC<SignUpProps> = () => {
    return (
        <div className="d-flex justify-content-center">
            <form>
                <h3>Sign up</h3>

                <div className="form-group">
                    <label className="d-flex justify-content-start">First name</label>
                    <input type="text" className="form-control " placeholder="First name" />
                </div>

                <div className="form-group">
                    <label className="d-flex justify-content-start">Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label className="d-flex justify-content-start">Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="d-flex justify-content-start">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-success btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="!#">sign in?</a>
                </p>
            </form>
        </div>
    );
};


export default SignUp;