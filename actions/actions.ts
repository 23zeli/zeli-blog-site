"use server";

import { prisma } from "@/app/posts/lib/prisma";

export async function createPost(formData: FormData) {

    const title = String(formData.get("title") ?? "").trim();
    const content = String(formData.get("content") ?? "").trim();

    await prisma.post.create({
        data: {
            title,
            content,
        },
    });
}