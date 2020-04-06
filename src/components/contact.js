import React from 'react';
// import { css } from '@emotion/core';
import { navigate } from 'gatsby-link';
import theme from '../../config/theme';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Contact = () => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    // eslint-disable-next-line no-undef
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      // eslint-disable-next-line no-undef
      .catch(error => alert(error));
  };

  return (
    <div
      css={theme.mq({
        width: '100%',
        p: {
          color: theme.colors.smoke_black,
          marginBottom: 24,
        },
        label: {
          fontSize: 18,
        },
        input: {
          fontSize: 18,
          minWidth: ['100%', '100%', '100%', '100%', '100%', '75%'],
          height: 40,
          padding: 8,
          borderRadius: 4,
          border: `1px solid ${theme.colors.smoke_black}`,
        },
        textarea: {
          fontSize: 18,
          minWidth: ['100%', '100%', '100%', '100%', '100%', '75%'],
          maxWidth: ['100%', '100%', '100%', '100%', '100%', '75%'],
          minHeight: 225,
          padding: 8,
          borderRadius: 4,
          border: `1px solid ${theme.colors.smoke_black}`,
        },
        button: {
          fontSize: 24,
          width: 100,
          fontFamily: 'Roboto, sans-serif',
          padding: 8,
          color: theme.colors.copy,
          background: theme.colors.electric_purple,
          border: `1px solid ${theme.colors.electric_purple}`,
          borderRadius: 4,
          '&:hover': {
            background: theme.colors.smoke_black,
            border: `1px solid ${theme.colors.smoke_black}`,
          },
        },
      })}
    >
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Name
            <br />
            <input type="text" name="name" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Email
            <br />
            <input type="email" name="email" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Subject
            <br />
            <input type="text" name="subject" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message
            <br />
            <textarea name="message" rows="10" onChange={handleChange} />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};

export default Contact;
