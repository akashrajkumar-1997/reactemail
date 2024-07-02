import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
function App() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_3eit01u', 'template_yzdqclg', form.current, 'JynKy1Y770myZYfWI')
            .then(
                (result) => {
                    console.log('Email successfully sent!', result.text);
                },
                (error) => {
                    console.error('Email sending failed:', error.text);
                }
            );
    };

    return (
        <div >
            <h1>ReactJs with EmailJs</h1>
            <form ref={form} onSubmit={sendEmail} style={{ width: '50%', border: '2px solid black', marginTop: '3%', padding: '5%', display: 'flex', flexDirection: 'column' }}>
                <h1>ReactJs with EmailJs</h1>
                <label>Name</label>
                <input type="text" name="user_name"  />
                <label>Email</label>
                <input type="email" name="user_email"/>
                <label>Phone Number</label>
                <input type="text" name="user_number" />
                <label>Message</label>
                <textarea name="message" rows="4" ></textarea>
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}

export default App;
