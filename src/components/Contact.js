import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactForm.css'; // Import your custom CSS for dark theme styling
import { Alert } from 'react-bootstrap';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: ''
    });
    const [submitStatus, setSubmitStatus] = useState({
        submitted: false,
        error: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., submit to FormBold endpoint)
        const form = e.target;
        const formDataToSend = new FormData(form);

        fetch('https://formbold.com/s/oyDZJ', {
            method: 'POST',
            body: formDataToSend
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Form submitted successfully');
            setSubmitStatus({
                submitted: true,
                error: false,
            });
            setFormData({
                name: '',
                email: '',
                description: '',
            });
        })
        .catch(error => {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                submitted: true,
                error: true,
            });
        });
    };

    return (
        <div className="container contact-form" id='contact'>
            <h2>Contact</h2>
            {submitStatus.submitted && !submitStatus.error && (
                <Alert variant="success" onClose={() => setSubmitStatus({ submitted: false, error: false })} dismissible>
                    Form submitted successfully!
                </Alert>
            )}
            {submitStatus.submitted && submitStatus.error && (
                <Alert variant="danger" onClose={() => setSubmitStatus({ submitted: false, error: false })} dismissible>
                    Error submitting form. Please try again later.
                </Alert>
            )}
            <form onSubmit={handleSubmit} action='https://formbold.com/s/oyDZJ' method='POST' encType="multipart/form-data">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3" value={formData.description} onChange={handleChange} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="social-links mt-3">
                <a href="https://github.com/JASHWANTH-REDDY9" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/jashwanth-geereddy/" className="btn btn-outline-light" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    );
};

export default ContactForm;
