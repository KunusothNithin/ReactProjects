import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let formErrors = {};
    
    if (!username) formErrors.username = 'Username is required';
    if (!email) formErrors.email = 'Email is required';
    if (!password) formErrors.password = 'Password is required';
    if (password !== confirmPassword) formErrors.confirmPassword = 'Passwords do not match';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      // Handle sign-up logic
      console.log({ username, email, password });
    }
  };

  const getPasswordStrength = () => {
    if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
      return 'Strong';
    } else if (password.length >= 6) {
      return 'Medium';
    } else {
      return 'Weak';
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-lg bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={`w-full p-3 border rounded ${errors.username ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring focus:ring-blue-200`}
          />
          {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring focus:ring-blue-200`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-3 border rounded ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring focus:ring-blue-200`}
          />
          <div className="absolute right-3 top-3">
            {passwordVisible ? (
              <EyeOffIcon className="h-5 w-5 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
            ) : (
              <EyeIcon className="h-5 w-5 text-gray-400 cursor-pointer" onClick={togglePasswordVisibility} />
            )}
          </div>
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          <p className={`text-sm mt-1 ${getPasswordStrength() === 'Strong' ? 'text-green-500' : getPasswordStrength() === 'Medium' ? 'text-yellow-500' : 'text-red-500'}`}>
            Password Strength: {getPasswordStrength()}
          </p>
        </div>
        <div>
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-3 border rounded ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring focus:ring-blue-200`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
