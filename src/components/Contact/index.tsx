export default function ContactForm() {
  return (
    <form name="contact" method="POST" data-netlify="true" action="/contact">
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
  );
}
