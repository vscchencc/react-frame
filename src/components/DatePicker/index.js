import React, {Component} from 'react';
import './style.scss'
import DatePickerCore from "./core";

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
    componentWillMount () {
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
        console.log(datepicker)
    }
    componentDidMount () {
        this.init()
    }
    render () {
        return (
            <div className="datepicker-wrapper">
                <div className="datepicker-header">
                    <a href="#" className="datepicker-btn datepicker-prev-btn">&lt;</a>
                    <a href="#" className="datepicker-btn datepicker-next-btn">&gt;</a>
                    <span className="datepicker-curr-month">2019-2</span>
                </div>
                <div className="datepicker-body">
                    <table>
                    <thead>
                            <tr>
                                <th>一</th>
                                <th>二</th>
                                <th>三</th>
                                <th>四</th>
                                <th>五</th>
                                <th>六</th>
                                <th>日</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>29</td>
                                <td>30</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>6</td>
                                <td>7</td>
                                <td>8</td>
                                <td>9</td>
                                <td>10</td>
                                <td>12</td>
                            </tr>
                            <tr>
                                <td>29</td>
                                <td>30</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>29</td>
                                <td>30</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>29</td>
                                <td>30</td>
                                <td>1</td>
                                <td>2</td>
                                <td>3</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
    init () {
        console.log('-----chencc-------')
    }
}

export default DatePicker