import React, {Component} from 'react';
import './style.scss'
import DatePickerCore from "./core";
import DateHeader from './dateHeader'
import YearPanel from './yearPanel'
import DatePanel from './datePanel.js'
import MonthPanel from './monthPanel'

const datepicker = new DatePickerCore()

class DatePicker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      min: this.props.min || '1900/01/01',
      max: this.props.max,
      start: this.props.start,
      currentPanel: 'date'
    }
    this.init = this.init.bind(this)
    this.selectYearType = this.selectYearType.bind(this)
    this.selectMonthType = this.selectMonthType.bind(this)
    this.selectYear = this.selectYear.bind(this)
    this.selectMonth = this.selectMonth.bind(this)
    this.selectDate = this.selectDate.bind(this)
    this.prevYear = this.prevYear.bind(this)
    this.prevMonth = this.prevMonth.bind(this)
    this.nextYear = this.nextYear.bind(this)
    this.nextMonth = this.nextMonth.bind(this)
  }
  componentDidMount () {
    this.init()
  }
  render () {
    const { currentPanel } = this.state
    return (
      <div className="datepicker-wrapper">
        <div className="datepicker-header">
          <DateHeader 
            data = {this.state}
            selectYearType={this.selectYearType} 
            selectMonthType={this.selectMonthType} 
            prevYear={this.prevYear}  
            nextYear={this.nextYear}
            prevMonth={this.prevMonth}
            nextMonth={this.nextMonth} />
        </div>
        <div className="datepicker-body">
          {
            currentPanel && currentPanel === 'year' &&
              <YearPanel 
                data={this.state} 
                selectYear={this.selectYear}/> ||
            currentPanel === 'month' &&
              <MonthPanel 
                selectMonth={this.selectMonth}
                data={this.state} /> || 
            currentPanel === 'date' &&
              <DatePanel
                selectDate = {this.selectDate}
                data={this.state} />
          }
        </div>
      </div>
    )
  }
  init () {
    let yearTable = [],
        monthTable = [],
        dateTable = []
    datepicker.init({
      min: this.state.min,
      max:  this.state.max,
      start: this.state.start,
      isTime: this.state.isTime
    }).createYear((info) => {
      yearTable = info
    }).createMonth((info) => {
      monthTable = info
    }).createMonthDate((info) => {
      dateTable = info
    })

    this.setState({
      headerValue: datepicker.data.year + '/' + datepicker.data.month,              // calendar title
      yearTable: yearTable,                                                         // calendar year table
      monthTable: monthTable,                                                       // calendar month table
      dateTable: dateTable,                                                         // calendar date table
      weeks_list: datepicker.lang[datepicker.data.lang].weeks,                      // calendar language week
      year: datepicker.data.year,                
      month: datepicker.data.year + '/' + datepicker.data.month,                    
      date: datepicker.data.year + '/' + datepicker.data.month + '/' + datepicker.data.date,
      datetime: datepicker.data.year + '' + datepicker.data.month + '' + datepicker.data.date
    })
  }
  // title select year
  selectYearType () {
    this.setState({
      currentPanel: 'year'
    })
  }
  // title select month
  selectMonthType () {
    this.setState({
      currentPanel: 'month'
    })
  }

  // selectYear 
  selectYear (val) {
    // 选择年份后更新月份table
    const monthTable = datepicker.updateMonth(val)

    this.setState({
      year: val,
      monthTable: monthTable,
      headerValue: val + '/' + this.state.month.split('/')[1],
      currentPanel: 'month'
    })
  }

  // selectMonth
  selectMonth (val) {
    // 选择月份后更新日期table
    const dateTable = datepicker.updateMonthDate(val)
    
    this.setState({
      month: val.year + '/' + val.month,
      headerValue: val.year + '/' + val.month,
      dateTable: dateTable,
      currentPanel: 'date'
    })
  }

  // selectDate
  selectDate (val) {
    this.setState({
      date: val.year + '/' + val.month + '/' + val.date,
    })
  }

  // prev-double
  prevYear () {
    if (this.state.currentPanel === 'year') {
      const yearTable = datepicker.updatePrevDouYear(this.state.yearTable)
      this.setState({
        yearTable: yearTable
      })
    } else {
      const yearTable = datepicker.updatePreYear(this.state.yearTable)
      const monthTable = datepicker.updateMonth(yearTable[0])
      const dateTable = datepicker.updateMonthDate({
        year: yearTable[0],
        month: this.state.month.split('/')[1]
      })
      this.setState({
        yearTable: yearTable,
        monthTable: monthTable,
        dateTable: dateTable,
        headerValue: yearTable[0] + '/' + this.state.month.split('/')[1],
      })
    }
  }

  // next-double
  nextYear () {
    if (this.state.currentPanel === 'year') {
      const yearTable = datepicker.updateNextDouYear(this.state.yearTable)
      this.setState({
        yearTable: yearTable
      })
    } else {
      const yearTable = datepicker.updateNextYear(this.state.yearTable)
      this.setState({
        yearTable: yearTable,
        headerValue: yearTable[0] + '/' + this.state.month.split('/')[1],
      })
    }
  }
  
  // prevMonth
  prevMonth () {
    console.log('------prev-----')
    // const 
  }

  // nextMonth
  nextMonth () {
    console.log('------next------')
  }
}

export default DatePicker