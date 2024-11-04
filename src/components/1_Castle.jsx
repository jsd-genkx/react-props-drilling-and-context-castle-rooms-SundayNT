import Tower from "./2_Tower"

export default function Castle({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Castle</h2>
      <Tower message1={message1} handleReply={handleReply} />
    </div>
  )
}
