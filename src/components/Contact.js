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

                <br /><br />

                <label>Email:
                    <input type="text" name="name" />
                </label>

                <br /><br />

                <label>Leave a Message</label>

                <br />

                <textarea name="message" rows={7} cols={70} />

                <br />

                <button type="submit">Submit</button>
            </form>
        </div >
    );
};

// need form submit function
// need error Message

export default Contact;