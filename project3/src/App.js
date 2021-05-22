import logo from './logo.svg';
import './App.css';
import React from 'react';
import './stores/UserStore';
import LoginForm from './LoginForm';
import InputField from './InputField';
import SubmitButton from './Submit';
import UserStore from './stores/UserStore';

class App extends React.Component {
  async componentDidMount() {

    try{

      let res = await fetch('/isLoggedIn', {
        method: 'post',
        headers: {
          'Accept' : 'application/json',
          'Content-type': 'application/json'
        }
      });
      let result = await res.json();
      if (result && result.success) {
        UserStore.loading = false;
        UserStore.isLoggedIn = true;
        UserStore.username = result.username
        
      }
      else {
        UserStore.isLoggedIn = false;
        UserStore.username = false;
      }
    }
    catch(e) {
      UserStore.isLoggedIn = false;
      UserStore.username = false;
    }
  }
  render() {
    return (
      <div className="app">
        home
      </div>
    
    )
  }
}

async doLogout(); {

  try{

    let res = await fetch('/logout', {
      method: 'post',
      headers: {
        'Accept' : 'application/json',
        'Content-type': 'application/json'
      }
    });
    let result = await res.json();
    if (result && result.success) {
      UserStore.isLoggedIn = false;
      UserStore.username = ''
      
    }
  }
  catch(e) {
    UserStore.isLoggedIn = false;
    UserStore.username = false;
  }
}
render(); {
  return (
    <div className="app">
      home
    </div>
  
  )
}

  
  

export default App;
