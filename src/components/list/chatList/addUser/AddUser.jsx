import React, { useState } from 'react'
import './addUser.css'
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../../../lib/firebase'
import { useUserStore } from '../../../../lib/userStore'

function AddUser() {


  const [user, setUser] = useState(null)

  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const username = formData.get("username")

    try {
      const userRef = collection(db, "users")
      const q = query(userRef, where('username', '==', username))
      const querySnapShot = await getDocs(q)

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data())
      }
    } catch (error) {

    }
  }

  const handleAdd = async () => {
    const chatRef = collection(db, 'chats'); // creating chats collection
    const userChatsRef = collection(db, 'userChats');

    try {
      // Create a new chat document in the 'chats' collection
      const newChatRef = doc(chatRef);
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      // References to the userChats documents for both users
      const userChatDocRef = doc(userChatsRef, user.id);    //7vu user1
      const currentUserChatDocRef = doc(userChatsRef, currentUser.id);    //5q ghost

      // Fetching both users data
      const userChatDocSnap = await getDoc(userChatDocRef);   //7vu user1
      const currentUserChatDocSnap = await getDoc(currentUserChatDocRef);   //5q ghost

      // If the userChats document exists for the other user, update it; otherwise, create it
      if (userChatDocSnap.exists()) {
        await updateDoc(userChatDocRef, {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: '',
            receiverId: currentUser.id,
            updatedAt: Date.now(),
          })
        });
      } else {
        await setDoc(userChatDocRef, {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: '',
            receiverId: currentUser.id,
            updatedAt: Date.now(),
          })
        });
      }

      // If the userChats document exists for the current user, update it; otherwise, create it
      if (currentUserChatDocSnap.exists()) {
        await updateDoc(currentUserChatDocRef, {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: '',
            receiverId: user.id,
            updatedAt: Date.now(),
          })
        });
      } else {
        await setDoc(currentUserChatDocRef, {
          chats: arrayUnion({
            chatId: newChatRef.id,
            lastMessage: '',
            receiverId: user.id,
            updatedAt: Date.now(),
          })
        });
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='addUser'>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder='Username' name='username' />
        <button>Search</button>
      </form>
      {user &&
        <div className="user">
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="" />
            <span>{user.username}</span>
          </div>
          <button onClick={handleAdd}>Add User</button>
        </div>
      }
    </div>
  )
}

export default AddUser
