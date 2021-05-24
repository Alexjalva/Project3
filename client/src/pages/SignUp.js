import React, { useRef, useState } from 'react';
import AUTH from "../utils/AUTH";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUpForm() {

    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();

    const [error, setError] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();

        if (!firstnameRef.current.value || !lastnameRef.current.value || !emailRef.current.value || !usernameRef.current.value || !passwordRef.current.value) {
            setError("Missing a required field.");
            passwordRef.current.value = "";
            return;
        }

        AUTH.signup(firstnameRef.current.value, lastnameRef.current.value, emailRef.current.value, usernameRef.current.value, passwordRef.current.value)
            .then(response => {
                setError(null);
                console.log(response);
            })
            .catch(err => {
                if (!err.response) {
                    setError("Unable to connect to the server.");
                } else if (err.response.data === "SequelizeValidationError") {
                    setError("Please enter a valid email address.");
                } else if (err.response.data === "SequelizeUniqueConstraintError") {
                    setError("This email address is already associated with an account.");
                } else {
                    setError("An unknown error occurred.");
                }
                passwordRef.current.value = "";
                console.log(err);
            })
    }

    return (
       

        <Form className="text-white rounded-0" style={{ margin: '0px' }}>
                <Form body style={{ opacity: 0.9, marginTop: '60px', marginLeft: '90px', marginRight: '90px' }}>
                    <form className="mt-3 rounded">
                        <err message={error} />
                        <div className="form-group">
                            <label htmlFor="inputEmail">Email Address</label>
                            <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" ref={emailRef} />
                            <small id="emailHelp" className="form-text text-muted">This will be used to login to Lets Bet!.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputPassword">Create Password</label>
                            <input type="password" className="form-control" id="inputPassword" ref={passwordRef} />
                        </div>
                        <Button type="button ml-2" className="btn btn-success" onClick={event => handleSubmit(event)}>Submit</Button>
                    </form>
                </Form >
        </Form>

    );
}

export default SignUpForm;
