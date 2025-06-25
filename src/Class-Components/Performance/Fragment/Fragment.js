import React from 'react'
import TableData from './TableData'

function Fragment() {
  return (
    <>
      <table>
        <thead>
        <tr>
          <th>name</th>
          <th>age</th>
          <th>address</th>
          <th>ph</th>
        </tr>
        </thead>
        <tbody>
          <tr>
          <TableData/>
         </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>This is table footer</td>
        </tr>
        </tfoot>
      
      </table>
    </>
  )
}

export default Fragment