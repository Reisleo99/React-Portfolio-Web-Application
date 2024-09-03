import React, { useState } from 'react';
import './Contact.css';

const ContactMe = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Remove error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value) {
      setErrors({ ...errors, [name]: 'This field is required' });
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors({ ...errors, email: 'Please enter a valid email address' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'This field is required';
    if (!formData.email) {
      newErrors.email = 'This field is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message) newErrors.message = 'This field is required';

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      // You can add form submission logic here
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-me-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? 'input-error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? 'input-error' : ''}
          ></textarea>
          {errors.message && <span className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactMe;
