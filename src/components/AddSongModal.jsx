import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"

const AddSongModal = forwardRef(function AddSongModal(
  { addSong, addMember, songs, members },
  ref,
) {
  const dialogRef = useRef()
  const songNameRef = useRef()
  const artistRef = useRef()

  function saveSongHandler() {
    const song = {
      title: songNameRef.current.value,
      artist: artistRef.current.value,
    }

    addSong(song)
    songNameRef.current.value = ""
    artistRef.current.value = ""
  }

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal()
      },
    }
  })
  return createPortal(
    <dialog
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-70 w-90 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialogRef}
    >
      <div className="flex justify-center">
        <h2 className="block">Add New Song</h2>
        <form method="dialog">
          <label htmlFor="songName">Song name</label>
          <input
            className="bg-amber-100 outline-amber-600 block"
            id="songName"
            ref={songNameRef}
            type="text"
          />
          <label htmlFor="artist">Artist</label>
          <input
            className="bg-amber-100 outline-amber-600 block"
            id="artist"
            ref={artistRef}
            type="text"
          />
          <button onClick={saveSongHandler}>Save</button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  )
})

export default AddSongModal
