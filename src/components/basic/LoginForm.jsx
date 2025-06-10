import React, { useState, useRef } from 'react';

function SignupFormWithValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef(null);

  const validateEmail = (value) => {
    if (!value.includes('@')) {
      setError('Invalid email address');
      emailRef.current.focus(); // Focus input on error
    } else {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail(email);

    if (!error) {
      console.log('Form submitted:', { email });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        ref={emailRef}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default SignupFormWithValidation;
