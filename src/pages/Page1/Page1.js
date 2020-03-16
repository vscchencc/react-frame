import React, {Component} from 'react'
import './Page1.scss'

import Calendar from 'components/Calendar/index';

export default class Page1 extends Component {
  constructor (props) {
    super(props)
    this.changeValue = this.changeValue.bind(this)
  }
  render() {
      return (
          <div className="page-box">
              <p>this is Page1~</p>
              <Calendar changeValue={(info) => {this.changeValue(info)}} />
          </div>
      )
  }
  changeValue(info) {
    console.log(info)
  }
}