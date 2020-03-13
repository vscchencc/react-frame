import React from 'react';

function MonthPanel (props) {
  return(
    <table className="month-wrapper">
      <tbody>
        <tr>
          <td>
            <span>1月</span>
          </td>
          <td>2月</td>
          <td>3月</td>
        </tr>
        <tr>
          <td>4月</td>
          <td>5月</td>
          <td>6月</td>
        </tr>
        <tr>
          <td>7月</td>
          <td>8月</td>
          <td>9月</td>
        </tr>
        <tr>
          <td>10月</td>
          <td>11月</td>
          <td>12月</td>
        </tr>
      </tbody>
    </table>
  )
}

export default MonthPanel