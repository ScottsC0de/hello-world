import React, { useState } from 'react';
// import { validEmail } from 'src/utils/helpers.js';

function Contact() {
    return (
        <div>
            <h2 className='section-headers'>Contact</h2>

            <form>

                <label>Name:
                    <input type="text" name="name" />
                </label>

                <label>Email:
                    <input type="text" name="name" />
                </label>

                <label>Message</label>
                <textarea name="message" rows={7} cols={70} />

                <button type="submit">Submit</button>
            </form>
        </div >
    );
};

// need form submit function
// need error Message

export default Contact;