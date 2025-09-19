import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


export const load_first_blogs = async (limit: number, offset: number, is_static: boolean = false) => {
    const limitParam = limit || 6
    const offsetParam = offset || 0

    try {
        const total = await prisma.blog.count()
        const data = await prisma.blog.findMany({
            skip: offsetParam,
            take: limitParam,
            orderBy: [
                is_static ? { priority_show: 'asc' } : {},
                { publishDate: 'desc' }
            ],
            select: {
                id: true,
                title: true,
                image: true,
                paragraph: true,
                tags: {
                    select: {
                        id: true,
                        name: true,
                    }
                },
                publishDate: true,
                author: {
                    select: {
                        image: true,
                        name: true,
                        designation: true,
                    },
                },
            },
        });

        return {
            status: true,
            message: 'عملیات با موفقیت انجام شد',
            data: data,
            pagination: {
                total,
                limit,
                offset,
                hasMore: offset + limit < total,
            },
        }
    } catch (error) {
        console.error('خطا در دریافت پست‌ها:', error)
        return {
            status: false,
            message: 'دریافت داده‌ها با خطا مواجه شد',
            data: [],
        }
    } finally {
        await prisma.$disconnect()
    }
}