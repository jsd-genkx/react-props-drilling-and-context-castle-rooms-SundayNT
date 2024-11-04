import Room from "./4_Room"

export default function Chamber({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Chamber</h2>
      <Room message1={message1} handleReply={handleReply} />
    </div>
  )
}
