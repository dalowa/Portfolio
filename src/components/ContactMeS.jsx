import './../styles/ContactMeS.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMeS = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_7x7cfuh',
				'template_196506g',
				form.current,
				'cuCWET8tdn8eI06K8'
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
	};
	return (
		<>
			<section className='Formulario-container'>
				<h2>Contact Me</h2>
				<p className='Formulario-container-p'>
					I am currently looking for opportunities, but if you have any
					questions you can text me
				</p>
				<form className='Formulario' ref={form} onSubmit={sendEmail}>
					<label>
						<p>Name</p>
						<input type='text' name='user_name' />
					</label>
					<label>
						<p>Email</p>
						<input type='email' name='user_email' />
					</label>
					<label>
						<p>Message</p>
						<textarea name='message' />
					</label>
					<label>
						<button type='submit' value='Send' className='FormButton'>
							Send
						</button>
					</label>
				</form>
			</section>
			);
		</>
	);
};

export default ContactMeS;
