

const ContactForm = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-cardBg rounded-3xl border border-border shadow-default overflow-hidden p-10 xxxs:flex-col xxxs:py-2 xxxs:px-0 xxxs:bg-transparent xxxs:border-none xxxs:gap-6 xxxs:shadow-none sm:p-5 xl:p-10 xl:gap-none">
      <div className="w-[50%] h-full flex flex-col justify-center items-center text-[160px] pr-16 xxxs:text-6xl xxxs:flex-row xxxs:w-full xxxs:pr-0 sm:text-7xl sm:w-[30%] sm:pr-0 lg:text-[120px] xl:text-[160px] xl:pr-16 xl:w-[50%]">
        <p className="text-center leading-none font-medium">{"Let's"}</p>
        <p className="text-center font-semibold leading-none text-badgeText">Talk!</p>
      </div>
      <form className="w-[50%] h-full flex flex-col gap-5 bg-card p-6 rounded-2xl border border-border xxxs:w-full xxxs:bg-none xxxs:p-4 xxs:p-5 sm:w-[60%] sm:p-5 xl:gap-5 xl:p-6 xl:w-[50%]">
        <div className="flex flex-col gap-2 xxxs:gap-1 sm:gap-1 xl:gap-2">
          <label htmlFor="name" className="text-lg xxxs:text-[16px] sm:text-base xl:text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Full Name"
            required
            className="w-full py-3 px-4 border border-border rounded-lg bg-cardBg text-white placeholder-textDescription focus:outline-none focus:ring-2 focus:ring-workIconBg focus:border-transparent xxs:text-[16px] xxs:py-2 sm:text-[16px] sm:py-2"
          />
        </div>
        <div className="flex flex-col gap-2 xxs:gap-1 sm:gap-1 xl:gap-2">
          <label
            htmlFor="email"
            className="text-lg xxs:text-[16px] sm:text-base xl:text-lg"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full py-3 px-4 border border-border rounded-lg bg-cardBg text-white placeholder-textDescription focus:outline-none focus:ring-2 focus:ring-workIconBg focus:border-transparent xxs:text-[16px] xxs:py-2 sm:text-[16px] sm:py-2"
          />
        </div>
        <div className="flex flex-col gap-2 xxs:gap-1 sm:gap-1 xl:gap-2">
          <label
            htmlFor="message"
            className="text-lg xxs:text-[16px] sm:text-base xl:text-lg"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            required
            className="w-full py-3 px-4 border border-border rounded-lg bg-cardBg text-white placeholder-textDescription focus:outline-none focus:ring-2 focus:ring-workIconBg focus:border-transparent h-24 resize-none xxs:text-[16px] xxs:py-2 sm:text-[16px] sm:py-2"
          ></textarea>
        </div>
        <div className="text-center">
            <button
            type="submit"
            className="w-full mt-4 py-2 px-9 bg-workIconBg text-white font-semibold rounded-lg hover:bg-workIconBg focus:outline-none focus:ring-2 focus:ring-workIconBg focus:ring-offset-2"
            >
            Send Your Message
            </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
