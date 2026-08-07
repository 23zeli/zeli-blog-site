import { cacheLife } from "next/cache";


type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export const getPosts = async () => {
    "use cache";
    cacheLife("days");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
        throw new Error("failed to fetch Posts");
    }
    const posts: Post[] = await response.json();
    return posts;
}