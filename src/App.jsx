import React from 'react'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Details from './components/details/Details'
import Login from './components/login/Login'

function App() {
  return (
    <div className='container'>

      {
        user ? (
          <>
            <List />
            <Chat />
            <Details />
          </>
        )
          : <Login />
      }
    </div>
  )
}

export default App
