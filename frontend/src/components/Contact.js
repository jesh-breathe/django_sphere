import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
       name: '',
       email: '',
       message: '', 
    });

        const handleChange = (e) => {
            const {name, email, message} = e.target;
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
    <section className='border-2'>
        <div>
            <h1>Send us a message</h1>
        </div>
        <form action={post}>

        </form>
    </section>
  )
}

export default Contact