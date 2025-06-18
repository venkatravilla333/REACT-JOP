import React, { useState } from 'react'
import Login from './Login'
import Profile from './Profile'

function Parent() {
  var [login, setLogin] = useState(true)


  
  // if (!login) {
  //   return  <Login setLogin={setLogin} login={login} />
  // } else {
  //   return <Profile setLogin={setLogin} login={login}/>
  // }

  // var element
  
  // if (!login) {
  //   element = <Login setLogin={setLogin} login={login} />
  // } else {
  //   element = <Profile setLogin={setLogin} login={login}/>
  // }
  // return element

  // return login ? <Profile setLogin={setLogin} login={login} />
  //   : <Login setLogin={setLogin} login={login} />

    return login && <Profile setLogin={setLogin} login={login} />
    


 
}

export default Parent
