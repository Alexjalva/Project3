import React, { useRef, useState } from 'react';
import auth from "../utils/AUTH";
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

// import React, { useRef, useState } from 'react';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

// function SignUpForm() {

//   const nameRef = useRef();
//   const emailRef = useRef();
//   const passwordRef = useRef();

//   const [error, setError] = useState(null);

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (!nameRef.current.value || !emailRef.current.value || !passwordRef.current.value) {
//       setError("Missing a required field.");
//       passwordRef.current.value = "";
//       return;
//     }

//     API.signup(nameRef.current.value, emailRef.current.value, passwordRef.current.value)
//       .then(response => {
//         setError(null);
//         console.log(response);
//         refreshUserData(dispatch);
//       })
//       .catch(err => {
//         if (!err.response) {
//           setError("Unable to connect to the server.");
//         } else if (err.response.data === "SequelizeValidationError") {
//           setError("Please enter a valid email address.");
//         } else if (err.response.data === "SequelizeUniqueConstraintError") {
//           setError("This email address is already associated with an account.");
//         } else {
//           setError("An unknown error occurred.");
//         }
//         passwordRef.current.value = "";
//         console.log(err);
//       })
//   }

//   return (
//     <div className="Login">
//       <Form onSubmit={handleSubmit}>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             autoFocus
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Login
//         </Button>
//       </Form>
//     </div>
//     // <Card className="text-white rounded-0" style={{ margin: '0px' }}>
//     //     <Card.Img src={process.env.PUBLIC_URL + "/img/hero-img.jpg"} alt="Card image" />
//     //     <Card.ImgOverlay className="rounded-0">
//     //         {/* <Card.Text> */}
//     //         <Card body style={{ opacity: 0.9, marginTop: '60px', marginLeft: '90px', marginRight: '90px' }}>
//     //             <form className="mt-3 rounded">
//     //                 <ErrorMessage message={error} />
//     //                 <div className="form-group">
//     //                     <label htmlFor="inputEmail">Email Address</label>
//     //                     <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" ref={emailRef} />
//     //                     <small id="emailHelp" className="form-text text-muted">This will be used to login to Lets Bet!.</small>
//     //                 </div>
//     //                 <div className="form-group">
//     //                     <label htmlFor="inputPassword">Create Password</label>
//     //                     <input type="password" className="form-control" id="inputPassword" ref={passwordRef} />
//     //                 </div>
//     //                 <button type="button ml-2" className="btn btn-success" onClick={event => handleSubmit(event)}>Submit</button>
//     //             </form>
//     //         </Card >
//     //         {/* </Card.Text> */}
//     //     </Card.ImgOverlay>
//     // </Card>

//   );
// }

// export default SignUpForm;

// // import React, { Component } from 'react';
// // import { Redirect, Link } from 'react-router-dom';
// // import { Container, Row, Col } from '../components/Grid';
// // import { Card } from '../components/Card';
// // import { Input, FormBtn } from '../components/Form';
// // import AUTH from '../utils/AUTH';

// // class SignupForm extends Component {

// // 	constructor() {
// //     super();

// // 		this.state = {
// //       firstName: '',
// //       lastName: '',
// // 			username: '',
// // 			password: '',
// // 			confirmPassword: '',
// // 			redirectTo: null
// // 		};
// //   }

// // 	handleChange = (event) => {
// // 		this.setState({
// // 			[event.target.name]: event.target.value
// // 		});
// //   }

// // 	handleSubmit = (event) => {
// // 		event.preventDefault();
// // 		// TODO - validate!
// // 		AUTH.signup({
// //       firstName: this.state.firstName,
// //       lastName: this.state.lastName,
// //       username: this.state.username,
// //       password: this.state.password
// //     }).then(response => {
// //       console.log(response);
// //       if (!response.data.errmsg) {
// //         console.log('youre good');
// //         this.setState({
// //           redirectTo: '/'
// //         });
// //       } else {
// //         console.log('duplicate');
// //       }
// //     });
// //   }

// // 	render() {
// // 		if (this.state.redirectTo) {
// // 			return <Redirect to={{ pathname: this.state.redirectTo }} />
// //     }

// // 		return (
// //       <div className="login">
// //       <Container className="zindex1">
// //         <Row className="zindex1">
// //           <Col className="zindex1" size="md-3"></Col>
// //           <Col className="zindex1" size="md-6">
// //             <Card className="zindex1" title="Now registered at LETS BET!">
// //               <form className="zindex1" style={{marginTop: 10}}>
// //                 <h1>Now registered at LETS BET!</h1>
// //                 <label htmlFor="username">First name: </label>
// //                 <Input
// //                   type="text"
// //                   name="firstName"
// //                   value={this.state.firstName}
// //                   onChange={this.handleChange}
// //                 />
// //                 <label htmlFor="username">Last name: </label>
// //                 <Input
// //                   type="text"
// //                   name="lastName"
// //                   value={this.state.lastName}
// //                   onChange={this.handleChange}
// //                 />
// //                 <label htmlFor="username">Username: </label>
// //                 <Input
// //                   type="text"
// //                   name="username"
// //                   value={this.state.username}
// //                   onChange={this.handleChange}
// //                 />
// //                 <label htmlFor="password">Password: </label>
// //                 <Input
// //                   type="password"
// //                   name="password"
// //                   value={this.state.password}
// //                   onChange={this.handleChange}
// //                 />
// //                 <label htmlFor="confirmPassword">Confirm Password: </label>
// //                 <Input
// //                   type="password"
// //                   name="confirmPassword"
// //                   value={this.state.confirmPassword}
// //                   onChange={this.handleChange}
// //                 />
// //                 <Link to="/">Login</Link>
// //                 <FormBtn onClick={this.handleSubmit}>Register</FormBtn>
// //               </form>
// //             </Card>
// //           </Col>
// //           <Col size="md-3"></Col>
// //         </Row>
// //       </Container>
// //       </div>
// // 		)
// // 	}
// // }

// // export default SignupForm;