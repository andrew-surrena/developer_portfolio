import { useState } from 'react';
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {return setName(value)}
    else if (name === 'email') {return setEmail (value)}
    else {return setMessage (value)}
    }

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if (!re.test(email)) {
        setErrorMessage('Please enter valid email'); return
    }
    if (!message) {
        setErrorMessage('Message required')
    }
    if (!name) {
        setErrorMessage('Name required')
    }
  };

    return (
        <section class="page-section">
            <h2 id="news1">Contact</h2>
            <div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <div>Name:</div>
                        <input
                            value={name}
                            name="name"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Enter name' />
                    </div>
                    <div>
                        <div>Email:</div>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="text"
                            placeholder='me@example.com' />
                    </div>
                    <div>
                        <div>Message:</div>
                        <textarea
                            className='messagebox'
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="message"
                            placeholder='Insert text' />
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                    <div className='error'>{errorMessage}</div>
                </form>
            </div>
        </section>
    )
}