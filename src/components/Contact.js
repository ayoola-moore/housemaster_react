import React from 'react'

const Contact = () => {
    return (
        <div id="ContactForm">
          <div className="loader"></div>
          <div className="bar"></div>
          <form action="https://formspree.io/olalekanarowoselu@gmail.com" className="ContactForm" name="contact_form" method="POST">
            <h3>Send Us a Message</h3>
            <div className="input_boxes">
              <p>
                <label htmlFor="name">Your Name</label>
                <span className="name-missing">* Enter your Full Name</span>
                <br />
                <input id="name" type="text" name="name" />
              </p>
              <p>
                <label htmlFor="e-mail">Your E-mail</label>
                <span className="email-missing">* Enter a valid email</span>
                <br />
                <input id="e-mail" type="text" name="email" />
              </p>
              <p>
                <label htmlFor="message">Type your Message</label>
                <span className="message-missing">* Type your Message!</span>
                <br />
                <textarea id="message" name="message"></textarea>
              </p>
              <div id="exit">
                <a href="#" className="show_contact">exit</a>
              </div>
              <input className="submit" type="submit" name="submit" value="SEND" />
            </div>
          </form>
          <div id="contxt" className="contxt">
            <h3>Address</h3>
            <p>Avenue des cocotier</p>
            <p>2nd Floor </p>
            <p>MOrcement Bismic</p>
            <h3>Phone</h3>
            <p>58531705</p>
            <h3>Email</h3>
            <p>rentals@housemasters.mu</p>
          </div>
        </div>
    )
}

export default Contact