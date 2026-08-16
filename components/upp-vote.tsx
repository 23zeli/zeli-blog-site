"use client"

import { useState } from "react"

export default function UpvoteBtn() {
    const [votes, setVotes] = useState(0);
  return (
    <button
        type='button'
        onClick={()=> setVotes((currentVotes)=> currentVotes + 1)}
        // className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'
        className='h-9 shrink-0 rounded-md border border-zinc-300 bg-zinc-100 px-3 text-sm font-semibold text-zinc-800 transition-colors hover:bg-zinc-200'
    >
        Upvote {votes}
    </button>
  )
}
