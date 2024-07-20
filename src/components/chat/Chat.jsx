import React, { useEffect, useRef, useState } from 'react'
import './chat.css'
import EmojiPicker from 'emoji-picker-react'

function Chat() {

  const [open, setOpen] = useState(false)
  const [text, setText] = useState("")
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour: 'smooth' })
  }, [])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji)
    setOpen(false)
  }

  console.log(text)

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eius ex ullam, repudiandae doloremque ad eos expedita magni alias? Officiis pariatur dolores impedit sequi ea.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eius ex ullam, repudiandae doloremque ad eos expedita magni alias? Officiis pariatur dolores impedit sequi ea.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eius ex ullam, repudiandae doloremque ad eos expedita magni alias? Officiis pariatur dolores impedit sequi ea.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img src="https://i.pinimg.com/564x/78/55/5c/78555c18579ecc70b37a1eae4e5211ed.jpg" width={236} height={476} alt="Pinterest image" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero eius ex ullam, repudiandae doloremque ad eos expedita magni alias? Officiis pariatur dolores impedit sequi ea.
            </p>
            <span>1 minute ago</span>
          </div>
        </div>
        <div ref={endRef}></div>

      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" value={text} placeholder='Type a message...' onChange={(e) => setText(e.target.value)} />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen(prev => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className='sendButton'>Send</button>
      </div>
    </div>
  )
}

export default Chat
