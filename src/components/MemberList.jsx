export default function MemberList({ members }) {
  return (
    <>
      <h2 className="flex justify-center bg-neutral-800 text-slate-300">
        Band members
      </h2>
      <section className="mx-auto flex justify-center h-50 bg-taupe-300 text-stone-400">
        {members.length === 0 ? (
          <p>No members yet</p>
        ) : (
          members.map((member, i) => (
            <p key={i}>
              {member.name} - {member.instrument}
            </p>
          ))
        )}
      </section>
    </>
  )
}
