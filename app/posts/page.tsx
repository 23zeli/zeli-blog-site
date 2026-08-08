import RecentlyViewedPosts from "@/components/recently-viewed-posts";
import Link from "next/link";
import { Suspense } from "react";
import { getPosts } from "./lib/utils";
// import { prisma } from "./lib/prisma";


async function PostsList() {

    const posts =  await getPosts();
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    // if (!response.ok) {
    //     throw new Error("failed to fetch Posts");
    // }
    // const posts: Post[] = await response.json();

    // const posts = await prisma.post.findMany();

    return (
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
    );
}

export default function PostPage() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                    Posts
                </h1>

                <Suspense fallback={<p>Loading posts...</p>}>
                    <PostsList />
                </Suspense>

                <Suspense fallback={<p>Loading recently viewed posts...</p>}>
                    <RecentlyViewedPosts />
                </Suspense>
            </section>

            <section className="space-y-4 border-t border-zinc-200 pt-6.">
                <h2 className="text-xl font-semibold text-zinc-950">New Post</h2>
                <form className="space-y-4">
                    <label className="block space-y-2">
                        <span className="text-sm font-medium text-zinc-700">Title</span>
                        <input
                            name="title"
                            type="text"
                            required
                            className="h-10 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 text-sm transition-colors focus:border-zinc-500"
                        />
                    </label>

                    <label className="block space-y-2">
                        <span className="text-sm font-medium text-zinc-700">Content</span>
                        <textarea
                            name="content"
                            required
                            className="h-50 w-full rounded-md border border-zinc-300 bg-zinc-50 px-3 text-sm transition-colors focus:border-zinc-500"
                        />
                    </label>

                    <button className="bg-zinc-950 text-zinc-200 p-2 rounded-md">Create</button>
                </form>
            </section>
        </div>
    );
}