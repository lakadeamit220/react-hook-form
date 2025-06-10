import React, { useState, useRef } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef(null);

  const handleLogin = () => {
    if (!username || !password) {
      inputRef.current.focus(); // Focus the username field if inputs are empty
    } else {
      console.log('Logging in with:', { username, password });
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        ref={inputRef} // Using useRef for direct DOM access
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginForm;
