import Gallery from "./7_Gallery"

export default function Corridor({ message1, handleReply}) {
  return (
    <div>
      <h2 className="font-semibold my-4">Corridor</h2>
      <Gallery message1={message1} handleReply={handleReply} />
    </div>
  )
}

