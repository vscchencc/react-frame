import React from 'react';
import { groupArray } from './utils'

function YearPanel (props) {
  const data = props.data.yearTable ? groupArray(props.data.yearTable, 3) : []
  const currentyear = props.data.year
  return(
    <table className="year-wrapper">
      <tbody>
        {
          data.map((item, index) => {
            {   
              return (
                <tr key={index}>
                  {
                    item.map((val, i) => {
                      return (
                        <td key={i}>
                          <a className={currentyear === val.year ? 'active' : ''} onClick={() => {props.selectYear(val)}}>{val.year}</a>
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

export default YearPanel