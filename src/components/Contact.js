import React, { useState } from 'react';
// import { validEmail } from 'src/utils/helpers.js';

function Contact() {
    return (
        <div className='sections'>
            <h2>Contact</h2>

            <form>

                <label>Name:
                    <input type="text" name="name" />
                </label>

                <label>Email:
                    <input type="text" name="name" />
                </label>

                <label>Message</label>
                <textarea name="message" rows={7} cols={70} />

                // need form submit function
                // need error Message

                <button type="submit">Submit</button>
            </form>
        </div >
    );
};

export default Contact;