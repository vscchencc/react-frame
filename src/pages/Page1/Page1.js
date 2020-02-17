import React, {Component} from 'react'
import './Page1.scss'

import DatePicker from 'components/DatePicker/index';

export default class Page1 extends Component {
    render() {
        return (
            <div className="page-box">
                <p>this is Page1~</p>
                <DatePicker />
            </div>
        )
    }
}