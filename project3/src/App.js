import React from 'react';
import { observer } from 'mobx-react';
import User from './UserData/User';
import LoginForm from './LoginForm';
import SubmitButton from './SubmitButton';
import './App.css';

class App extends React.Component {

  async componentDidMount() {
    try {
      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        User.loading = false;
        User.isLoggedIn = true;
        User.username = result.username;
      }

      else {
        User.loading = false;
        User.isLoggedIn = false;
      }
    }

    catch (err) {
      User.loading = false;
      User.isLoggedIn = false;

    }
  }

  async doLogout() {
    try {
      let res = await fetch('/logout', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        }
      });

      let result = await res.json();

      if (result && result.success) {
        User.isLoggedIn = false;
        User.username = '';
      }

    }

    catch (err) {
      console.log(err)
    }
  }

  render() {
    if (User.loading) {
      return (
        <div className="App">
          <div class='container'>
            Loading...
          </div>
        </div>
      );
  }


    else {

  if (User.isLoggedIn) {
    return (
      <div className="app">
        <div className='container'>
          Welcome {User.username}

          <SubmitButton
            text={'Log out'}
            disabled={false}
            onClick={ () => this.doLogout()}
          />
        </div>
      </div>
    );
  }

return (
  <div className="app">
    <div className='container'>
      <LoginForm />
    </div>
  </div>
);
}
}
}
export default observer(App);
