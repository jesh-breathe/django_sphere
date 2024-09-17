import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/submit-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className='border-2 rounded-xl max-w-3xl m-auto p-8 my-8 bg-white shadow-lg'>
      {/* Heading */}
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold text-gray-800'>Send Us a Message</h1>
        <p className='text-lg text-gray-600'>We would love to hear from you!</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4'>
        <input
          className='w-full md:w-3/4 lg:w-2/3 border-2 py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          placeholder='Your Name*'
          required
        />
        <input
          className='w-full md:w-3/4 lg:w-2/3 border-2 py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Your Email*'
          required
        />
        <textarea
          className='w-full md:w-3/4 lg:w-2/3 border-2 py-3 px-4 rounded-lg min-h-36 focus:ring-2 focus:ring-blue-500 focus:outline-none'
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Your Message*'
          rows='6'
          required
        />
        <Button
          variant='primary'
          type='submit'
          className='w-full md:w-3/4 lg:w-2/3 py-3 text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-all rounded-lg'>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Contact;
