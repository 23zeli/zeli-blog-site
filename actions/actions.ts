"use server";

import { prisma } from "@/app/posts/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {
    // revalidatePath,
    revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {

    const { isAuthenticated } = getKindeServerSession();
    if (!(await isAuthenticated())) {
        // redirect("/api/auth/kindeAuth");
        redirect("/api/auth/login");
    }

    const title = String(formData.get("title") ?? "").trim();
    const content = String(formData.get("content") ?? "").trim();

    await prisma.post.create({
        data: {
            title,
            content,
        },
    });

    // revalidatePath("/posts");
    revalidatePath("posts");
}

//trigger sever action to update the votes count for a specific post
export async function upvotePost(id: number) {
    // Validate the post ID
    if(!Number.isInteger(id)) {
        throw new Error("Invalid post id");
    }

    // Update the votes count for the specified post
    await prisma.post.update({
        where: {
            id,
        },
        data: {
            votes: {
                increment: 1
            },
        },
    });

    revalidatePath("/posts");
    revalidatePath(`/posts/${id}`);
}