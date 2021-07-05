import { useCallback, useRef, useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const formRef = useRef();
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(formRef.current);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      console.log("Form successfully submitted");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  return (
    <div className="prose">
      <h1>Contact</h1>
      <form
        ref={formRef}
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="honey-field"
        data-netlify-recaptcha="true"
        onSubmit={handleSubmit}
      >
        <div className="">
          <label className="dark:text-gray-200">Name</label>
          <input
            type="text"
            name="name"
            className="relative w-full px-3 py-3 mt-1 mb-4 text-sm bg-white border-0 rounded shadow-sm outline-none dark:bg-gray-400 focus:outline-none focus:ring-2"
          />
          <label className="dark:text-gray-200">Email</label>
          <input
            type="text"
            name="email"
            className="relative w-full px-3 py-3 mt-1 mb-4 text-sm bg-white border-0 rounded shadow-sm outline-none dark:bg-gray-400 focus:outline-none focus:ring-2"
          />
          <label className="dark:text-gray-200">Message</label>
          <textarea
            name="message"
            className="relative w-full px-3 py-3 mt-1 mb-6 text-sm bg-white border-0 rounded shadow-sm outline-none dark:bg-gray-400 focus:outline-none focus:ring-2"
          />
          <p className="hidden">
            <label className="dark:text-gray-200">
              Don’t fill this out if you’re human: <input name="honey-field" />
            </label>
          </p>
          <div data-netlify-recaptcha="true" />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 text-gray-100 transition-colors bg-blue-500 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
