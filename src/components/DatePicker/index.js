import React, {Component} from 'react';
import './style.scss'
import DatePickerCore from "./core";
import DateHeader from './dateHeader'
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
          <DateHeader />
        </div>
        <div className="datepicker-body">
          <DatePanel data={this.state}/>
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