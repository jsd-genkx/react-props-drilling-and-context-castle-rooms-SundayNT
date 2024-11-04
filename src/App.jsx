import { useState } from 'react'
import './App.css'
import Castle from './components/1_Castle';

export default function App() {
  const [replyMessage, setReplyMessage] = useState("")

  const handleReply = (message) => {
    setReplyMessage(message)
  };

  const message1 = "Do you love React?"

  return (
    <div>
      <h1 className='my-4 font-bold'>Message for JSD: {message1}</h1>
      <p className='my-4 font-semibold'>Reply from the secret room: {""}
        <span>
          {replyMessage ? replyMessage : "Waiting foy a reply...."}
        </span>
      </p>
      <Castle message1={message1} handleReply={handleReply} />
    </div>
  )
}
