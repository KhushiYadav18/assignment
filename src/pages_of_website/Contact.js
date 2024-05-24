import React, { useState } from 'react';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data:', formData);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Submit</button>
      </form>
      <div className="social-media">
        <h2>Follow Us</h2>
        <ul>
          <li><a href="https://www.instagram.com/sarc_iitb?igsh=MWlvc2R3djN3a2t0ZQ==" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://alumination.sarc-iitb.org/" target="_blank" rel="noopener noreferrer">Alumination</a></li>
          <li><a href="https://in.linkedin.com/in/sarciitb" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href=" https://www.youtube.com/c/SARCIITBombay" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          <li><a href=" https://www.facebook.com/SARC.IITB" target="_blank" rel="noopener noreferrer">FaceBook</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
    