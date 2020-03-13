import React from 'react';

function DatePanel(props) {
  const data = props.data.data ? groupArray(props.data.data.month.table, 7) : [];
  const weeks_list = props.data.weeks_list
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
          data.map((item, index) => {
            {   
              return (
                <tr key={index}>
                  {
                    item.map((val, i) => {
                      return (
                        <td key={i}>{val.date}</td>
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

// 分割数组
function groupArray (arr, subGroupLength) {
  let index = 0
  let newArray = []
  while(index < arr.length) {
      newArray.push(arr.slice(index, index += subGroupLength))
  }
  return newArray
}

export default DatePanel