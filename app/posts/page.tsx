import Link from "next/link";
// import { prisma } from "./lib/prisma";

type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};



export default async function PostPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if(!response.ok) {
        throw new Error("failed to fetch Posts")
    }
    const posts: Post [] = await response.json();

    // const posts = await prisma.post.findMany();

  return (
    <div className="space-y-8">
        <section className="space-y-4">
            <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                Posts
            </h1>

            <ul className="space-y-3">
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={`/posts/${post.id}`}
                                className="text-lg font-semibold text-zinc-950 hover:text-zinc-200"
                            >
                                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    </div>
  )
}


// import Link from "next/link";
// import { Suspense } from "react";
// import { connection } from "next/server";
// import { prisma } from "@/app/posts/lib/prisma";
// import RecentlyViewedPosts from "../../components/recently-viewed-posts";
// import RecentlyViewedPosts from "@/components/recently-viewed-posts";


// async function PostsList() {
//     await connection();
//     const posts = await prisma.post.findMany();

//     return (
//         <ul>
//             {posts.map((post) => (
//                 <li key={post.id}>
//                     <Link href={`/posts/${post.id}`}>{post.title}</Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default function PostsPage() {
//     return (
//         <div className="space-y-8">
//             <section className="space-y-4">
//                 <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
//                     Posts
//                 </h1>

//                 <Suspense fallback={<div>Loading posts...</div>}>
//                     <PostsList />
//                 </Suspense>

//                 <Suspense fallback={<div>Loading recently viewed posts...</div>}>
//                     <RecentlyViewedPosts />
//                 </Suspense>
//             </section>
//         </div>
//     );
// }