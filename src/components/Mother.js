import React, { Component } from 'react';

export default class Mother extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOfSon1: props.messageFromHusband
    }
  }
  reSetMessage(event) {
    this.props.reSetMessageOfSon1({name: this.state.messageOfSon1.name, age: event.target.value})
  }
  render() {
    return(
      <div class="card" style={{width:"100%"}}>
        <div class="card-body">
          <h5 class="card-title">Mother</h5>
          <div>
            <p>the message of son1</p>
            <p>age: {this.props.messageFromHusband.age}</p>
            <div class="form-group">
              <label class="bmd-label-floating">Age</label>
              <input onChange={(event) => {this.reSetMessage(event)}} value={this.props.messageFromHusband.age} type="text" class="form-control"></input>
            </div>
            <div class="form-group">
              <label class="bmd-label-floating">name</label>
              <input type="text" class="form-control"></input>
            </div>
          </div>
          <hr/>
          <div>
            <p>the message of son2</p>
            <div class="form-group">
              <label class="bmd-label-floating">Age</label>
              <input type="text" class="form-control"></input>
            </div>
            <div class="form-group">
              <label class="bmd-label-floating">name</label>
              <input type="text" class="form-control"></input>
            </div>
          </div>
        </div>
      </div>
    )
  }
}