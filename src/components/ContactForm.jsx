import React, { useState } from 'react'

const API_URL = 'https://vernanbackend.ezlab.in/api/contact-us/'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else {
      // basic email regex
      const re = /^\S+@\S+\.\S+$/
      if (!re.test(form.email)) e.email = 'Enter a valid email'
    }
    if (!form.phone.trim()) e.phone = 'Phone is required'
    else {
      const digits = form.phone.replace(/\D/g, '')
      if (digits.length !== 10) e.phone = 'Enter a valid 10-digit phone number'
    }
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  async function handleSubmit(ev) {
    ev.preventDefault()
    setStatus('')
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length) return
    setLoading(true)
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (res.ok) {
        setStatus('Form Submitted')
        setForm({ name: '', email: '', phone: '', message: '' })
        setErrors({})
      } else {
        const body = await res.text()
        setStatus('Submission failed: ' + (body || res.status))
      }
    } catch (err) {
      setStatus('Network error')
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    if (loading) return
    setForm({ name: '', email: '', phone: '', message: '' })
    setErrors({})
    setStatus('')
  }

  return (
    <div className="contact">
      <h1 className="section-heading">Contact Us</h1>
      <p className="contact-intro">For any inquiries or bookings, feel free to get in touch with us.</p>
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-row">
            <label>Name</label>
            <input name="name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="form-row">
            <label>Email</label>
            <input name="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>

        <div className="form-row">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="e.g. 9087654980" value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} />
          {errors.phone && <div className="error">{errors.phone}</div>}
        </div>

        <div className="form-row">
          <label>Message</label>
          <textarea name="message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
          {errors.message && <div className="error">{errors.message}</div>}
        </div>

        <div className="form-actions">
          <button type="button" className="btn-reset" onClick={handleReset} disabled={loading}>Reset</button>
          <button type="submit" className="btn-primary" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
      </form>
      {status && <div className="status">{status}</div>}
    </div>
  )
}
