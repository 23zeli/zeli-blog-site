import { notFound } from "next/navigation";
// import { prisma } from "../lib/prisma";

type PostPageProps = {
    params: Promise<{id: string}>
}


export default async function PostPage({ params }: PostPageProps) {
    const { id } = await params;

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await response.json();

    // const post = await prisma.post.findUnique({
    //     where: {
    //         id: Number(id),
    //     },
    // });


    //check if post exists
    if(!post) {
        notFound();
    }

  return (
    <div className="space-y-8">
        <article className="space-y-4">
            <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h1>

            <p className="text-lg leading text-zinc-700">{post.body}</p>
            {/* <p className="text-lg leading text-zinc-700">{post.content}</p> */}
        </article>
    </div>
  )
}
