"use server";

import { Blog } from '@/types/blog';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getBlogByIdAndSlug(id: number, slug?: string): Promise<Blog | null> {
    try {
        const blog = await prisma.blog.findFirst({
            where: {
                id,
                ...(slug ? { slug } : {}),
            },
            include: {
                author: true,
                tags: true,
            },
        });

        if (!blog) return null;

        // تبدیل null به undefined برای فیلدهای optional
        return {
            ...blog,
            meta_description: blog.meta_description ?? null,
            meta_keyword: blog.meta_keyword ?? null,
            slug: blog.slug ?? null,
            priority_show: blog.priority_show ?? null,
        };
    } catch (error) {
        console.error("Error fetching blog:", error);
        return null;
    }
}