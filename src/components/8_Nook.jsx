import SecretRoom from "./9_SecretRoom"

export default function Nook({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Nook</h2>
      <SecretRoom message1={message1} handleReply={handleReply} />
    </div>
  )
}
