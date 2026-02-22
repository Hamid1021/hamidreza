'use client'

import Image from "next/image"
import { submitContact } from "./actions"
import { useActionState } from "react"

const Contact = () => {
  const initialState = {
    status: false,
    message: '',
  }

  const [state, formAction, pending] = useActionState(submitContact, initialState)

  return (
    <section className="relative overflow-hidden py-20">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 bg-purple-500/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 bg-blue-500/20 blur-3xl rounded-full" />

      <div className="container relative z-10">
        <div className="flex flex-wrap items-center">

          {/* Form */}
          <div className="w-full lg:w-7/12 px-4">
            <div className="rounded-2xl border border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl p-8 md:p-12">

              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                بیاید صحبت کنیم
              </h2>

              <p className="mb-10 text-body-color  dark:text-blue-100 dark:text-white/70">
                سوال یا ایده‌ای داری؟ پیام بده، جوابش مستقیم به ایمیلت میاد ✉️
              </p>

              <form action={formAction} className="space-y-8">

                {/* Name */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    نام و نام خانوادگی
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="مثلاً حمیدرضا رضایی"
                    className="w-full rounded-xl border border-gray-300/50 dark:border-white/10 bg-white/80 dark:bg-white/5 px-5 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    آدرس ایمیل
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    className="w-full rounded-xl border border-gray-300/50 dark:border-white/10 bg-white/80 dark:bg-white/5 px-5 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    پیام شما
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="هر چی تو ذهنته بنویس..."
                    className="w-full resize-none rounded-xl border border-gray-300/50 dark:border-white/10 bg-white/80 dark:bg-white/5 px-5 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 py-4 text-white font-medium shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 disabled:opacity-70"
                >
                  {pending ? "در حال ارسال..." : "ارسال پیام 🚀"}
                </button>

              </form>

              {/* Message */}
              {state.message && (
                <div className={`mt-6 text-center text-sm font-medium ${state.status ? "text-green-600" : "text-red-500"
                  }`}>
                  {state.message}
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:flex w-5/12 px-4 justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-2xl rounded-full" />
              <Image
                src="/images/me.png"
                alt="حمیدرضا رضایی"
                width={450}
                height={450}
                className="relative z-10 rounded-2xl shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact