import React, { useState } from 'react'
import B from './B'
import C from './C'
import axios from 'axios'
import { Provider } from 'react-redux'
import {store} from '../Redux/store'


function A() {
 
  return (
    <div>
      <Provider store = {store}>
      <B />
      <C />
      </Provider>
    </div>
  )
}

export default A