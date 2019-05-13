import React, { Component } from 'react';

export default class Son2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueOfSon2: "I am son2",
      messageFromFather: props.messageFromFather
    }
  }

  changeMyAge(event) {
    this.setState({
      messageFromFather: {name: this.state.messageFromFather.name, age: event.target.value}
    })
    this.props.son2ChangeHisMessage({name: this.state.messageFromFather.name, age: event.target.value});
  }

  render() {
    return(
      <div class="card" style={{width:"100%"}}>
        <div class="card-body">
          <h5 class="card-title">Son1</h5>
          <p>{ this.state.valueOfSon1 }</p>
          <p>来自父亲的信息：</p>
          <ul>
            <li>name: { this.props.messageFromFather.name }</li>
            <li>age: { this.state.messageFromFather.age }</li>
          </ul>
          <input onChange={(event) => {this.changeMyAge(event)}} value={ this.props.messageFromFather.age} placeholder="输入真实的年龄" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
          <input placeholder="输入真实的年龄" type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm"></input>
        </div>
      </div>
    )
  }
}