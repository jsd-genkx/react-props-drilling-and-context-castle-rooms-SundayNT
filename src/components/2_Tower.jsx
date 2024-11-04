import Chamber from "./3_Chamber"

export default function Tower({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Tower</h2>
      <Chamber message1={message1} handleReply={handleReply} />
    </div>
  )
}
