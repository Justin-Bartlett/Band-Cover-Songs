export default function SongList({ songs }) {
  return (
    <>
      <h2 className="flex justify-center bg-neutral-800 text-slate-300">
        Songs
      </h2>
      <section className="mx-auto flex justify-center h-40 bg-taupe-300 text-stone-400">
        {songs.length === 0 ? (
          <p>No songs yet</p>
        ) : (
          songs.map((song, i) => (
            <p key={i}>
              {song.title} - {song.artist}
            </p>
          ))
        )}
      </section>
    </>
  )
}
