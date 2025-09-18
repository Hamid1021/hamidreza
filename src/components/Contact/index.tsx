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
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                اگر سوالی دارید از فرم زیر استفاده نمایید
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                پاسخ شما به ایمیل شما ارسال خواهد شد
              </p>

              <form action={formAction}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="full_name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        placeholder="نام و نام خانوادگی خود را وارد کنید ..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        آدرس ایمیل
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="آدرس ایمیل خود را وارد کنید ..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        متن پیام
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={5}
                        placeholder="متن پیام خود را وارد کنید ..."
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      disabled={pending}
                      className="shadow-submit dark:shadow-submit-dark rounded-lg drop-shadow-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90"
                    >
                      {pending ? 'در حال ارسال...' : 'ارسال پیام'}
                    </button>
                  </div>
                </div>
              </form>

              {state.message && (
                <p
                  className={`mt-6 text-center text-sm font-medium ${state.status ? 'text-green-600' : 'text-red-500'
                    }`}
                >
                  {state.message}
                </p>
              )}

            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div>
              <Image alt="حمیدرضا رضایی" src={"/images/me.png"} width={1000} height={1000} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
