import React, {Component} from 'react';
import './style.scss'
import DatePickerCore from "./core";
import DatePanel from './datePanel.js'

const datepicker = new DatePickerCore()

class DatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      min: this.props.min || '1900/01/01',
      max: this.props.max,
      start: this.props.start,
      isTime: this.props.isTime
    }
    this.init = this.init.bind(this)
  }
  componentDidMount () {
    this.init()
  }
  render () {
    return (
      <div className="datepicker-wrapper">
        <div className="datepicker-header">
          <span className="header-icon">&lt;</span>
          <span className="header-icon">&lt;&lt;</span>
          <span>2019年3月</span>
          <span className="header-icon">&gt;</span>
          <span className="header-icon">&gt;&gt;</span>
        </div>
        <div className="datepicker-body">
          <table>
            <thead>
              <tr>
                {
                  this.state.weeks_list && (
                    this.state.weeks_list.map((item, index) => (
                      <th key={index}>{item}</th>
                    ))
                  )
                }
              </tr>
            </thead>
            <tbody>
              <DatePanel data={this.state.data}/>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  init () {
    let data = {}
    datepicker.init({
      min: this.state.min,
      max:  this.state.max,
      start: this.state.start,
      isTime: this.state.isTime
    }).createMonthDate((info) => {
      data = Object.assign({}, data, {
          month: info
      })
    }).createHours((info) => {
      data = Object.assign({}, data, {
          hours: info
      });
    }).createMinutes((info) => {
      data = Object.assign({}, data, {
          minutes: info
      });
    })
    this.setState({
      data: data,
      year: datepicker.data.year,
      month: datepicker.data.month,
      date: datepicker.data.date,
      hours: datepicker.data.hours,
      minutes: datepicker.data.minutes,
      datetime: datepicker.data.year+''+datepicker.data.month+''+datepicker.data.date,
      weeks_list: datepicker.lang[datepicker.data.lang].weeks
    })
  }
}

export default DatePicker