import React, { useState } from 'react';
import { Button, Input } from 'components/common';
import { Error, Center, InputField } from './styles';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const ContactForm = ({
  setFieldValue,
  isSubmitting,
  values,
  errors,
  touched,
}) => {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(e.target)),
      });
    } catch (error) {
      alert(error);
      setSubmitting(false);
      return;
    }

    setSubmitted(true);
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
          required
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
          required
        />
      </InputField>
      <InputField>
        <Input
          as="textarea"
          aria-label="message"
          id="message"
          rows="8"
          type="text"
          name="message"
          placeholder="Message*"
          required
        />
      </InputField>
      {submitted && (
        <InputField>
          <Center>
            <h4 role="alert">
              Your message has been successfully sent, thanks!
            </h4>
          </Center>
        </InputField>
      )}
      <Center>
        <Button secondary type="submit" disabled={submitting}>
          Submit
        </Button>
      </Center>
    </form>
  );
};

export default ContactForm;
