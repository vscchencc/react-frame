import React from 'react';

function DateHeader(props) {
  // const data = props.data ? groupArray(props.data.month.table, 7) : [];
  return (
    <div className="date-header">
      <span className="header-icon date-picker-prev-btn date-picker-prev-btn-arrow-double"></span>
      <span className="header-icon date-picker-prev-btn date-picker-prev-btn-arrow"></span>
      <span><span className="header-title">2019</span>年<span className="header-title">4</span>月</span>
      <span className="header-icon date-picker-next-btn date-picker-prev-btn-forward-double"></span>
      <span className="header-icon date-picker-next-btn date-picker-prev-btn-forward"></span>
    </div>
  )
}

export default DateHeader