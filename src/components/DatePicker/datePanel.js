import React from 'react';

function DatePanel(props) {
  const data = props.data ? groupArray(props.data.month.table, 7) : [];
  return (
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