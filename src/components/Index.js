import React from 'react'
import Mailchimp from 'react-mailchimp-form'

const Index = () => {
  return (
    <div id="front_panel" className="front_panel">

      <h2>Over a 100 Houses will soon be listed</h2>
      <p>Work in progress so far...</p>
      <p></p>

      <div id="progress-box">
        <div id="progress-bg">
          <div className="progressbar" id="progress">66</div>
        </div>
      </div>
      <p>Leave Your Contact to be notified of houses as soon as they are available...</p>
      <p></p>

      <div id="Newsletter">
        {/*<MailchimpSubscribe url={url} render={({subscribe, status, message})=>(
          <form id="notify" onSubmitted={formData => subscribe(formData)}>
            <input type="email" id="input" name="email" placeholder="Type your email address"
                   className="required" />
            <input type="submit" id="submit" value="SEND" className="required email" />
            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
            {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          </form>
        )}
        />*/}
        <Mailchimp
          action='https://housemasters.us19.list-manage.com/subscribe/post?u=1c51dd1902c540b81f1127a51&amp;id=b3a897aaaf'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true
            }
          ]}
          className= {"required email"}
        />
      </div>

      <div id="social">
        <ul>
          <li className="email show_contact">
            <a href="#">Email</a>
          </li>
          <li className="twitter">
            <a href="http://www.twitter.com/#!" target="_blank">Twitter</a>
          </li>
          <li className="facebook">
            <a href="http://www.facebook.com/housemasters.mu" target="_blank">Facebook</a>
          </li>

          <li className="linkedin">
            <a href="http://www.linkedin.com/#!" target="_blank">linkedin</a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Index