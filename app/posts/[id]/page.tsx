export default async function PostPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const post = await response.json();

  return (
    <div className="space-y-8">
        <article className="space-y-4">
            <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h1>

            <p className="text-lg leading text-zinc-700">{post.body}</p>

            {/* <ul className="space--y-3">
                {posts.slice(0, 5).map((post) => (
                    <li key={post.id}>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <Link
                                href={`posts/${post.id}`}
                                className="text-lg font-semibold text-zinc-950 hove:text-zinc-200"
                            >
                                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul> */}
        </article>
    </div>
  )
}
