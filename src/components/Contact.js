import React from "react";
import "../static/css/style.css";
import "../static/css/book-filter.css";

function Contact() {
  return (
        <>
        <ul className="breadcrumb" style={{ listStyleType: "none", display: "flex", padding: 40, margin: 0 }}>
            <li style={{ marginRight: "10px" }}>
                <a href="/" style={{ color: "#6c5dd4" }}>Home</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>
        </ul>

      <section className="contact">
        <h3>Contact Us</h3>
        <div className="main">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6310.594819201665!2d-122.42768319999999!3d37.73616639999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e60a337d5f5%3A0xfa0bb626904e5ab2!2z4KSV4KWJ4KSy4KWH4KScIOCkueCkv-Cksiwg4KS44KS-4KSoIOCkq-CljeCksOCkvuCkguCkuOCkv-CkuOCljeCkleCliywg4KSV4KWI4KSy4KWA4KSr4KWL4KSw4KWN4KSo4KS_4KSv4KS-LCDgpK_gpYLgpKjgpL7gpIfgpJ_gpYfgpKEg4KS44KWN4KSf4KWH4KSf4KWN4oCN4KS4!5e0!3m2!1shi!2sin!4v1686917463994!5m2!1shi!2sin"
              height={70}
              style={{ width: "100%", border: "none", borderRadius: 5 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="contact-form">
            <h4>Contact Us</h4>
            <p>Get in touch with us</p>
            <div className="input-form">
              <div className="input-field">
                <label htmlFor="name">Full Name *</label>
                <input type="text" name="" id="name" placeholder="Full Name" />
              </div>
              <div className="input-field">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone">Phone No. *</label>
                <input
                  type="text"
                  name=""
                  id="phone"
                  placeholder="Phone Number"
                />
              </div>
              <div className="message">
                <label htmlFor="message">Message *</label>
                <textarea
                  placeholder="Message"
                  id="message"
                  defaultValue={""}
                />
              </div>
              <button>submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
