import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Son1 from './components/Son1';
import Son2 from './components/Son2';
import Mother from './components/Mother';

class  App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToSon1: {
        name: "张三",
        age: 20
      },
      messageToSon2: {
        name: "李四",
        age: 21
      }
    }
  }
  changeMessage1(message) {
    this.setState({
      messageToSon1:message
    });
    console.log("father",message)
  }
  changeMessage2(message) {
    this.setState({
      messageToSon2:message
    });
    console.log("father",message)
  }

  render() {
    return (
      <div class="container-fluid">
        
        <Header />
        <hr/>
        <div class="card" style={{width:"100%"}}>
          <div>
            <p>message of son1</p>
            <ul>
              <li>name: {this.state.messageToSon1.name}</li>
              <li>age: {this.state.messageToSon1.age}</li>
            </ul>
          </div>
          <div>
            <p>message of son2</p>
            <ul>
              <li>name: {this.state.messageToSon2.name}</li>
              <li>age: {this.state.messageToSon2.age}</li>
            </ul>
          </div>
        </div>
        <hr/>
        <Mother reSetMessageOfSon1={this.changeMessage1.bind(this)} messageFromHusband={ this.state.messageToSon1 } />
        <div class="row" style={{marginTop:"25px"}}>
          <div class="col">
            <Son1 son1ChangeHisMessage={ this.changeMessage1.bind(this) } messageFromFather={ this.state.messageToSon1 }/>
          </div>
          <div class="col">
            <Son2 son2ChangeHisMessage={ this.changeMessage2.bind(this) } messageFromFather={ this.state.messageToSon2 }/>
          </div>
        </div>
      </div>
    )
  }

}

export default App;
