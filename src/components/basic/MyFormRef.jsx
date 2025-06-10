import React, { useRef } from "react";

function MyFormWithRef() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const messageRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access the current values
    const formData = {
      name: nameRef.current.valueOf,
      email: emailRef.current.valueOf,
      message: messageRef.current.valueOf,
    };

    console.log("Form Data Submitted:", formData);

    // Reset values
    nameRef.current.valueOf = "";
    emailRef.current.valueOf = "";
    messageRef.current.valueOf = "";
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={nameRef}
            className="w-full p-2 border rounded"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            ref={emailRef}
            className="w-full p-2 border rounded"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            ref={messageRef}
            className="w-full p-2 border rounded"
            placeholder="Write your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyFormWithRef;
