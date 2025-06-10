import React, { useState, useRef } from 'react';

function SignupFormWithValidation() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const emailRef = useRef(null);

  const validateEmail = (value) => {
    // Basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setError('Email is required');
      return false;
    } else if (!emailRegex.test(value)) {
      setError('Invalid email address');
      return false;
    } else {
      setError('');
      return true;
    }
  };

  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateEmail(newEmail); // Validate on change for real-time feedback
  };

  const handleBlur = (e) => {
    validateEmail(e.target.value); // Validate on blur for additional check
    if (error) {
      emailRef.current.focus(); // Focus input if there's an error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email);

    if (isValid) {
      console.log('Form submitted:', { email });
      setEmail(''); // Reset form after successful submission
      setError('');
    } else {
      emailRef.current.focus(); // Focus input on submission error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="emailInput">Email:</label>
        <input
          type="email"
          id="emailInput"
          ref={emailRef}
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Enter your email"
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? 'emailError' : undefined}
        />
        {error && (
          <p id="emailError" style={{ color: 'red' }} role="alert">
            {error}
          </p>
        )}
      </div>
      <button type="submit" disabled={!!error}>
        Submit
      </button>
    </form>
  );
}

export default SignupFormWithValidation;