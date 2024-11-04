import Corridor from "./6_Corridor"

export default function Hall({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Hall</h2>
      <Corridor message1={message1} handleReply={handleReply} />
    </div>
  )
}
