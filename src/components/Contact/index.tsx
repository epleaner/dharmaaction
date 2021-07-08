import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = formRef.current;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => console.log("There was an error", error));
  };

  return (
    <div className="prose">
      <h1>Contact</h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
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
          <button type="submit" className="mt-6 button">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
