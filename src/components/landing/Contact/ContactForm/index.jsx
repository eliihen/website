import React from 'react';
import Recaptcha from 'react-google-recaptcha';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const ContactForm = ({
  setFieldValue,
  isSubmitting,
  values,
  errors,
  touched,
}) => {
  const onSubmit = e => {
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(new FormData(e.target)),
    })
      .catch(error => alert(error))
  };

  return (
    <form
      name="portfolio-contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
    >
      <p hidden>
        <label>
          Don’t fill this out if you're human or the form will be discarded upon
          submission.
          <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="portfolio-contact" />
      <InputField>
        <Input
          type="text"
          name="name"
          component="input"
          aria-label="name"
          placeholder="Full name*"
        />
      </InputField>
      <InputField>
        <Input
          id="email"
          aria-label="email"
          component="input"
          type="email"
          name="email"
          placeholder="Email*"
        />
      </InputField>
      <InputField>
        <Input
          component="textarea"
          aria-label="message"
          id="message"
          rows="8"
          type="text"
          name="message"
          placeholder="Message*"
        />
      </InputField>
      {/*values.success && (
        <InputField>
          <Center>
            <h4>
              Your message has been successfully sent, I will get back to you
              ASAP!
            </h4>
          </Center>
        </InputField>
      )*/}
      <Center>
        <Button secondary type="submit">
          Submit
        </Button>
      </Center>
    </form>
  );
};

export default ContactForm;
