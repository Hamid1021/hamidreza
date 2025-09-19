import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getAllProjects(count: number = 0) {
    try {
        const projects = await prisma.project.findMany({
            orderBy:[ {priority_show:"asc"}, {createdAt: 'desc'} ],
            ...(count > 0 ? { take: count } : {}),
        });

        return projects;
    } catch (error) {
        console.error("خطا در دریافت پروژه‌ها:", error);
        return [];
    }
}
