import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function ContactForm() {
    const [formData, setFormData] = useState({
        CustomerUniqueIdentifier: uuid(),
        Email: '',
        FirstName: '',
        LastName: '',
        Message: '',
    });
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Generate a new CustomerUniqueIdentifier for each form submission
        const newFormData = { ...formData, CustomerUniqueIdentifier: uuid() };
        console.log(newFormData);

        // Use the AWS API Gateway to send the contact data
        try {
            const response = await fetch(
                'https://t729zeuzdh.execute-api.us-east-1.amazonaws.com/Prod',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newFormData),
                }
            );

            if (response.ok) {
                // Handle success
                console.log('Contact information sent successfully.');
                setIsSuccess(true); // Set the success state to true
            } else {
                // Handle error
                console.error('Error sending contact information.');
            }
        } catch (error) {
            console.error('Error sending contact information:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section className="contact-form">
            <h2>Contact Us</h2>
            {isSuccess ? ( // Conditional rendering based on isSuccess state
                <div className="success-message">
                    <p>Contact information sent successfully!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="FirstName"
                            placeholder="FirstName"
                            value={formData.FirstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="LastName"
                            placeholder="LastName"
                            value={formData.LastName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={formData.Email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="Message"
                            placeholder="Message"
                            value={formData.Message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        </section>
    );
}

export default ContactForm;
