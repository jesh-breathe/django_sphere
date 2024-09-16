import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';

const Contact = () => {
    const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: '', 
    });

        const handleChange = (e) => {
            const {name, value} = e.target;
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
    <section className='border-2 rounded-xl max-w-3xl flex flex-col self-center mt-2 m-auto h-full px-8'>
        <div className='mx-4 my-4'>
            <h1>Send us a message</h1>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col pl-10 gap-3'>
          <input
            className='w-3/4 border-2 py-2 px-4 rounded-xl'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Name*'
          />
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email*'
            className='w-3/4 border-2 py-2 px-4 rounded-xl'
          />
          <textarea
            type='text'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Type message here'
            className='w-3/4 border-2 py-2 px-4 rounded-xl min-h-36'
          />
          <Button variant='primary' className='w-3/4 mb-4'>Submit</Button>
        </form>
    </section>
  )
}

export default Contact