import React from "react"

const NesLetter = () => {
  return (
    <section className="py-8 px-4 bg-primary">
      <form className="mx-auto flex max-w-3xl flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 ">
        <div className="flex-1">
          <label htmlFor="" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            name="full-name"
            id=""
            placeholder="Full name"
            className="block w-full rounded-xl border border-slate-400 border-opacity-50 bg-transparent px-4 py-4 text-base font-normal text-white placeholder-white placeholder:text-white focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white dark:border-white dark:text-white placeholder:dark:text-white"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="" className="sr-only">
            Email address{" "}
          </label>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email address"
            className="block w-full rounded-xl border border-slate-400 border-opacity-50 bg-transparent px-4 py-4 text-base font-normal text-white placeholder-white placeholder:text-white focus:bg-white/10 focus:outline-none focus:ring-1 focus:ring-white dark:border-white dark:text-white placeholder:dark:text-white"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl border border-transparent bg-gray-800 px-10 py-4 text-base font-medium text-white transition-all duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 focus:ring-offset-blue-600"
        >
          Subscribe Now
        </button>
      </form>
    </section>
  )
}

export default NesLetter
