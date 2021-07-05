import React from "react";

const Contact = () => {
  return (
    <div className="prose">
      <h1>Contact</h1>
      <form name="contact" method="POST" data-netlify="true">
        <div className="grid grid-cols-2 gap-4">
          <label>Name:</label>
          <input type="text" name="name" />
          <label>Email:</label>
          <input type="email" name="email" />
          <label>Message:</label>
          <textarea name="message" />
          <button type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
