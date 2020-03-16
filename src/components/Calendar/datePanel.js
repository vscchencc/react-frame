import React from 'react';
import { groupArray } from './utils'

function DatePanel(props) {
  const data = props.data.dateTable ? groupArray(props.data.dateTable.table, 7) : [];
  const weeks_list = props.data.weeks_list
  const current = props.data.date ? props.data.date.split('/') : []

  return (
    <table className="date-wrapper">
      <thead>
        <tr>
          {
            weeks_list && (
              weeks_list.map((item, index) => (
                <th key={index}>{item}</th>
              ))
            )
          }
        </tr>
      </thead>
      <tbody>
        {
          current.length > 0 && data.map((item, index) => {
            {   
              return (
                <tr key={index}>
                  {
                    item.map((val, i) => {
                      return (
                        <td key={i}>
                          <a className={parseInt(current[0]) === val.year && parseInt(current[1]) === val.month && parseInt(current[2]) === val.date ? 'active' : ''} 
                            onClick={() => {props.selectDate(val)}}>{val.date}</a>
                        </td>
                      )
                    })
                  }
                </tr>
              )
            }
          })
        }
      </tbody>
    </table>
  )
}

export default DatePanel