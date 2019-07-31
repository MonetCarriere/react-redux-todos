import React, { useState } from 'react'
import 'normalize.css/normalize.css'
import '../styles/App.css'
import {BrowserRouter  as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../store'
import Todo from './Todo'

export default () => {

  return(

  
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}