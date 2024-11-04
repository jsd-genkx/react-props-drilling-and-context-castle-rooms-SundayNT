import Hall from "./5_Hall"

export default function Room({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Room</h2>
      <Hall message1={message1} handleReply={handleReply} />
    </div>
  )
}
