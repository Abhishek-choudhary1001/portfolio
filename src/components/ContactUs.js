import React from 'react';
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h1>Contact Me</h1>
        <p>Have any questions or want to get in touch? Send me a message!</p>
      </div>

      <div className="contact-form-container">
        <form 
          className="contact-form" 
          action="https://formsubmit.co/5d8e971b25dac1d9bc7e2771080fb05a"  // <-- replace with your email address!
          method="POST"
        >
          <div className="input-group">
            <input
              type="text"
              name="name"
              className="contact-input"
              required
              placeholder=" "
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              className="contact-input"
              required
              placeholder=" "
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              className="contact-textarea"
              required
              placeholder=" "
            />
            <label>Message</label>
          </div>

          {/* Honeypot for Spam Protection (optional) */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          {/* Disable Captcha (optional) */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Redirect to a thank-you page (optional) */}
          {/* <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" /> */}

          <button 
            type="submit" 
            className="contact-button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
