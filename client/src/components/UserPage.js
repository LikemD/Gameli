import React from 'react';
//import '../App.css';

import Header from './Header';
import Balance from './Balance';
import ProfitLoss from './ProfitLoss';
import TransactionList from './TransactionList';
import AddTransaction from './AddTransaction';

import GlobalProvider from '../context/GlobalState';

import UserAction from './UserAction';
import Login from './Login';
import Register from './Register';

class UserPage extends React.Component{
  state= {
    step: 1
  }

  actionStep= () => {
    this.setState({
      step:1
    })
  }

  loginStep= () =>{
    this.setState({
      step: 2
    })
  }

  registerStep= () =>{
    this.setState({
      step: 3
    })
  }

  hasAuthenticatedStep = () =>{
    this.setState({
      step: 4
    })
  }

  render(){
    switch (this.state.step){
      case 1:
        return (
          <UserAction 
          loginStep={this.loginStep}
          registerStep = {this.registerStep}
          />
        )
      case 2:
        return (
          <GlobalProvider>
            <Login 
            hasAuthenticatedStep={this.hasAuthenticatedStep}
            actionStep = {this.actionStep}
            />
          </GlobalProvider>
        )
      case 3:
        return (
          <GlobalProvider>
            <Register actionStep = {this.actionStep}/>
          </GlobalProvider>
        )
      case 4:
        return (
          <GlobalProvider>
            <Header />
              <div id='container'>
                <Balance />
                <ProfitLoss />
                <TransactionList />
                <AddTransaction />
              </div>
          </GlobalProvider>
        )
    }
  }
}

export default UserPage