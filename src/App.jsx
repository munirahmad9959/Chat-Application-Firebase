import React, { useEffect } from 'react'
import List from './components/list/List'
import Chat from './components/chat/Chat'
import Details from './components/details/Details'
import Login from './components/login/Login'
import Notification from './components/notification/Notification'
import { onAuthStateChanged } from 'firebase/auth'
import { collectionGroup } from 'firebase/firestore'
import { auth } from './lib/firebase'

function App() {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);
    })

    return () => {
      unSub()
    }
  }, [])

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
          : (<Login />)}
      <Notification />
    </div>
  )
}

export default App
