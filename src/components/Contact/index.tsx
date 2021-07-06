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
    <div className="prose dark:prose-dark">
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
        <div>
          <label>Name</label>
          <input type="text" name="name" className="input" />
          <label>Email</label>
          <input type="text" name="email" className="input" />
          <label>Message</label>
          <textarea name="message" className="input" />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="honey-field" />
            </label>
          </p>
          <div data-netlify-recaptcha="true" />
          <button type="submit" disabled={loading} className="mt-6 button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
