import { useRef, forwardRef, useImperativeHandle } from "react"
import { createPortal } from "react-dom"

const AddMemberModal = forwardRef(function AddMemberModal(
  { addSong, addMember, songs, members },
  ref,
) {
  const dialogRef = useRef()
  const memberRef = useRef()
  const instrumentRef = useRef()

  function saveMemberHandler() {
    const member = {
      name: memberRef.current.value,
      instrument: instrumentRef.current.value,
    }

    addMember(member)
    memberRef.current.value = ""
    instrumentRef.current.value = ""
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
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
      ref={dialogRef}
    >
      <h2>Add New Member</h2>
      <form method="dialog">
        <input ref={memberRef} type="text" />
        <input ref={instrumentRef} type="text" />
        <button onClick={saveMemberHandler}>Save</button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  )
})

export default AddMemberModal
