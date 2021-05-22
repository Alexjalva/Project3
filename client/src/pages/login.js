import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Container, Row, Col } from '../../components/Grid';
import { Card } from '../../components/Card';
import { Input, FormBtn } from '../../components/Form';

class LoginForm extends Component {
  
  constructor() {
    super();
    
		this.state = {
			username: '',
			password: '',
			redirectTo: null
		};
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('handleSubmit');
		this.props.login(this.state.username, this.state.password);
		this.setState({
			redirectTo: '/'
		});
	}


	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="login">
				<Container className="zindex1">
          <Row className="zindex1">
            <Col className="zindex1" size="md-3"></Col>
            <Col className="zindex1" size="md-6">
              <Card className="zindex1" title="Logged into LETS BET!">
                <form className="zindex1" style={{marginTop: 10}}>
									<h1>Logged into LETS BET!</h1>
                  <label htmlFor="username">Username: </label>
                  <Input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="password">Password: </label>
                  <Input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <Link to="/signup">Register</Link>
                  <FormBtn onClick={this.handleSubmit}>Login</FormBtn>
                </form>
              </Card>
            </Col>
            <Col size="md-3"></Col>
          </Row>
				</Container>
				</div>
			)
		}
	}
}

export default LoginForm;