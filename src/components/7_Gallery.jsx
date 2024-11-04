import Nook from "./8_Nook"

export default function Gallery({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Gallery</h2>
      <Nook message1={message1} handleReply={handleReply} />
    </div>
  )
}
