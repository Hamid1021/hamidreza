// src\middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import { decrypt } from './lib/session';
// import { SessionPayload } from './lib/definitions';

export async function middleware(request: NextRequest) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;

    // اگر مسیر درخواست فقط "/" بود، به "/fa" هدایت کنید.
    // if (pathname === '/') {
    //     url.pathname = '/fa';
    //     return NextResponse.redirect(url);
    // }

    // بررسی لاگین بودن کاربر
    // const sessionCookie = request.cookies.get('session')?.value;
    // const session = await decrypt(sessionCookie) as SessionPayload;

    // const isAuth = !!session?.userId;

    // اگر کاربر لاگین بود و در صفحات لاگین یا ثبت‌نام بود، به صفحه اصلی هدایت کنید.
    // if (isAuth && (
    //     pathname.startsWith('/fa/account/login') ||
    //     pathname.startsWith('/fa/account/register')
    // )) {
    //     url.pathname = '/fa';
    //     return NextResponse.redirect(url);
    // }

    // if (!isAuth && (
    //     pathname == '/fa/dashboard/user-events/by-phone'
    // )) {
    //     url.pathname = '/fa/account/login';
    //     return NextResponse.redirect(url);
    // }

    // اگر کاربر لاگین نبود و در صفحه داشبورد بود، به صفحه لاگین هدایت کنید.
    // if (!isAuth && (
    //     pathname.startsWith('/fa/dashboard') && pathname != '/fa/dashboard/user-events/by-phone'
    // )) {
    //     url.pathname = '/fa/account/login';
    //     return NextResponse.redirect(url);
    // }

    // بررسی دسترسی به APIهای عمومی
    if (pathname.startsWith('/api/public')) {
        return NextResponse.next(); // عبور از بررسی احراز هویت
    }

    // بررسی دسترسی به API
    // if (pathname.startsWith('/api')) {
    //     if (!isAuth) {
    //         return NextResponse.json({ message: 'عدم دسترسی', isSuccess: false }, { status: 401 });
    //     }
    // }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
    runtime: 'nodejs',
};