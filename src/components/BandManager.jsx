import { useState, useRef } from "react"

import AddSongModal from "./AddSongModal"
import AddMemberModal from "./AddMemberModal"
import SongList from "./SongList"
import MemberList from "./MemberList"

export default function BandManager() {
  // Tailwind styles
  const buttonStyles = "text-gray-300 px-12 py-2 mx-2 bg-slate-800 rounded-md"
  const cardStyles =
    "text-center mx-4 text-gray-500 md:text-sm bg-white rounded-md outline outline-blue-300 h-40"
  const paragraphStyles = "text-xs mb-4"
  const h2Styles = "text-xl"
  // Tailwind styles

  const songDialogRef = useRef()
  const memberDialogRef = useRef()

  const [songs, setSongs] = useState([])
  const [members, setMembers] = useState([])
  const addingSong = useRef(false)
  const addingMember = useRef(false)

  function addSongHandler() {
    addingSong.current = true
    songDialogRef.current.open()
  }

  function addMemberHandler() {
    addingMember.current = true
    memberDialogRef.current.open()
  }

  function addMember(newMember) {
    setMembers((prev) => [...prev, newMember])
    console.log("got to addMember in BandManager")
  }

  function addSong(newSong) {
    setSongs((prev) => [...prev, newSong])
  }

  return (
    <>
      {addingSong && (
        <AddSongModal
          addSong={addSong}
          addMember={addMember}
          songs={songs}
          members={members}
          ref={songDialogRef}
        />
      )}
      {addingMember && (
        <AddMemberModal
          addSong={addSong}
          addMember={addMember}
          songs={songs}
          members={members}
          ref={memberDialogRef}
        />
      )}
      <header className="justify-center bg-blue-950 flex px-4 py-2 md:text-base text-stone-200">
        <h1 className="text-xl">Band Manager</h1>
      </header>
      <section className="mx-auto flex justify-center pt-8 h-50 bg-blue-100 text-stone-400">
        <article className={cardStyles}>
          <h2 className={h2Styles}>No Songs Yet</h2>
          <p className={paragraphStyles}>Add your first song</p>
          <button onClick={addSongHandler} className={buttonStyles}>
            Add Song
          </button>
        </article>
        <article className={cardStyles}>
          <h2 className={h2Styles}>No Members Yet</h2>
          <p className={paragraphStyles}>Add your first band member</p>
          <button onClick={addMemberHandler} className={buttonStyles}>
            Add Member
          </button>
        </article>
      </section>
      <SongList songs={songs} />
      <MemberList members={members} />
    </>
  )
}
