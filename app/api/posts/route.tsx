import { prisma } from "@/app/posts/lib/prisma";

export async function GET() {

    const posts = await prisma.post.findMany();

    return Response.json({ posts });
}

export async function POST(request: Request) {
    //grab data(title, content) from the request(post being created) body
    const { title, content } = await request.json();

    //prisma ORM method to create a new post in the database
    const post = await prisma.post.create({
        data: {
            title,
            content,
        },
    })

    //return the newly created post as a JSON response
    return Response.json({ post });
}