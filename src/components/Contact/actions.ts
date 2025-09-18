'use server'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type ContactState = {
    status: boolean
    message: string
}

export async function submitContact(
    prevState: ContactState,
    formData: FormData
): Promise<ContactState> {
    const fullName = formData.get('full_name')?.toString().trim()
    const email = formData.get('email')?.toString().trim()
    const message = formData.get('message')?.toString().trim()

    if (!fullName || !email || !message) {
        return {
            status: false,
            message: 'لطفاً همه فیلدها را کامل پر کنید.',
        }
    }

    try {
        await prisma.contactMessage.create({
            data: { fullName, email, message },
        })

        return {
            status: true,
            message: 'پیام شما با موفقیت ثبت شد.',
        }
    } catch (error) {
        console.error('خطا در ثبت پیام:', error)
        return {
            status: false,
            message: 'ثبت پیام با خطا مواجه شد.',
        }
    } finally {
        await prisma.$disconnect()
    }
}
