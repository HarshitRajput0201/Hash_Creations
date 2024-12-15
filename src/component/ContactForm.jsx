

const ContactForm = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center bg-card rounded-2xl border border-border overflow-hidden p-10">
      <div className="w-[50%] h-full flex flex-col justify-center items-center text-[160px] pr-16">
      <p className="text-center leading-none font-medium">{"Let's"}</p>
        <p className="text-center font-semibold leading-none text-accentgreen">Talk!</p>
      </div>
      <form className="w-[50%] h-full flex flex-col gap-5 bg-card p-6 rounded-2xl border border-border">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-lg">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Your Full Name"
            required
            className="w-full py-3 px-4 border border-border rounded-lg bg-card text-white placeholder-description focus:outline-none focus:ring-2 focus:ring-accentpurple focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-lg"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email"
            required
            className="w-full py-3 px-4 border border-border rounded-lg bg-card text-white placeholder-description focus:outline-none focus:ring-2 focus:ring-accentpurple focus:border-transparent"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-lg"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message here"
            required
            className="w-full py-3 px-4 border border-border rounded-lg bg-card text-white placeholder-description focus:outline-none focus:ring-2 focus:ring-accentpurple focus:border-transparent h-24 resize-none"
          ></textarea>
        </div>
        <div className="text-center">
            <button
            type="submit"
            className="py-2 px-9 bg-accentpurple text-white font-semibold rounded-full hover:bg-accentpurple focus:outline-none focus:ring-2 focus:ring-accentpurple focus:ring-offset-2"
            >
            Send Your Message
            </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
