import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="form-success">
        <div className="success-icon">✓</div>
        <h3>Thank you!</h3>
        <p>Your message has been sent successfully. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          type="tel"
          name="phone"
          placeholder="Your phone number"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <textarea
          name="message"
          placeholder="Your message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
};

export default ContactForm;
