import { useState } from "react"


export default function SecretRoom({ message1, handleReply }) {
    const [reply, setReply] = useState("");
  return (
    <div className="flex flex-col items-center">
      <p className="my-2 font-semibold">Secret Room</p>
      <p className="my-2 font-semibold">Message for JSD8: {message1}</p>
      <textarea 
      value={reply}
      onChange={(e) => setReply(e.target.value)}
      placeholder="Type your reply here..."
      className="w-1/2 border border-black my-4"
      />
      <button
      onClick={() => handleReply(reply)}
      className="bg-blue-700 p-2 text-white font-semibold rounded-lg">Send Reply</button>
    </div>
  )
}
