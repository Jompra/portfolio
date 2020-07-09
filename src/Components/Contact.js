import React, { useState } from 'react'
import emailjs from 'emailjs-com'

const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID
const userId = process.env.REACT_APP_EMAIL_USER_ID
const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [emailSuccessMessage, setEmailSuccessMessage] = useState('')

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log(formData)
  }
  const handleSubmit = async event => {
    event.preventDefault()
    try {
      await emailjs.sendForm(serviceId, templateId, event.target, userId)
      setEmailSuccessMessage('Your message has been sent, I will get back to you ASAP!')
    } catch (err) {
      setEmailSuccessMessage('Something went wrong. Would you mind sending an email instead to georgekeesjones@gmail.com')
    }
    
  }

  return (
    <section id="contact" className="section contact">
      <div className="columns is-centered">
        <div className="column is-2">
          <h1>Get In <span className="blue-text">Touch</span></h1>
        </div>
        <div className="column">
          <form onSubmit={handleSubmit}>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Name"
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Email Address"
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                </div>

              </div>
              <div className="column">
                {/* Column two */}
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Phone Number"
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Company"
                      name="company"
                      onChange={handleChange}
                      value={formData.company}
                    />
                  </div>
                </div>
              </div>
              <div className="column">
                {/* column three */}
                <div className="field">
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Message...."
                      name="message"
                      onChange={handleChange}
                      value={formData.message}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="field submit-button">
              <button type="submit" className="button">Send Message –</button>
            </div>
            <h2>{emailSuccessMessage}</h2>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact