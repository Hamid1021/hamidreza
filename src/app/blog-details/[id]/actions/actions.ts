"use server";

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export async function getBlogById(id: number) {
    try {
        const blog = await prisma.blog.findUnique({
            where: { id },
            include: {
                author: true,
                tags: true,
            },
        });

        return blog;
    } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}