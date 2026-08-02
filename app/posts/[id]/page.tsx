import { notFound } from "next/navigation";
import { Suspense } from "react";
// import { prisma } from "../lib/prisma";

type PostPageProps = {
    params: Promise<{id: string}>
}

async function PostList ({ params }: PostPageProps) {
    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    //check if post exists
    if(!post) {
        notFound();
    }

  return (
    <article className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
            {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>

        <p className="text-lg leading text-zinc-700">{post.body}</p>
        {/* <p className="text-lg leading text-zinc-700">{post.content}</p> */}
    </article>
  )
}



export default function PostPage({ params }: PostPageProps) {

    // const post = await prisma.post.findUnique({
    //     where: {
    //         id: Number(id),
    //     },
    // });

  return (
    <div className="space-y-8">
        <Suspense fallback={<p>Loading post...</p>}>
            <PostList params={params} />
        </Suspense>
    </div>
  )
}