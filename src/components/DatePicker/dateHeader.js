import React from 'react';

function DateHeader(props) {
  console.log(props)
  // const data = props.data ? groupArray(props.data.month.table, 7) : [];
  return (
    <div className="date-header">
      <span className="header-icon date-picker-prev-btn date-picker-prev-btn-arrow-double"></span>
      <span className="header-icon date-picker-prev-btn date-picker-prev-btn-arrow"></span>
      <span>
        <span className="header-title" onClick={() => {props.selectYear()}}>2019 年</span>
        <span className="header-title" onClick={() => {props.selectMonth()}}>4 月</span>
      </span>
      <span className="header-icon date-picker-next-btn date-picker-prev-btn-forward-double"></span>
      <span className="header-icon date-picker-next-btn date-picker-prev-btn-forward"></span>
    </div>
  )
}

export default DateHeader