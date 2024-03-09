// CombinedComponent.js
"use client"
import React, { useState } from 'react';

const CombinedComponent = () => {
    // State for form data and student list
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        userName: '',
        email: '',
        password: ''
    });
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setMessage('User has been registered successfully');
                // Update student list with new student data
                setStudents([...students, formData]);
                // Reset form data
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    userName: '',
                    email: '',
                    password: ''
                });
            } else {
                setMessage('User registration failed');
            }

        } catch (error) {
            throw new Error("User registration failed");
        }
    };

    // Handle input change in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Remove student from the list
    const removeStudent = (index) => {
        const newStudents = students.filter((_, idx) => idx !== index);
        setStudents(newStudents);
    };

    return (
        <div className='max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow'>
            <h2 className='text 2xl mb-4'>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="firstName" className='block text-sm font-medium text-gray-600'>First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                        value={formData.firstName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="lastName" className='block text-sm font-medium text-gray-600'>Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                        value={formData.lastName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="phoneNumber" className='block text-sm font-medium text-gray-600'>Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="userName" className='block text-sm font-medium text-gray-600'>User Name</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                        value={formData.userName}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-600'>Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-4'>
                    <label htmlFor="password" className='block text-sm font-medium text-gray-600'>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-4'>
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600'>
                        Register
                    </button>
                </div>
            </form>
            {message && <div className='mt-4 text-center text-red-400'>{message}</div>}

            <div className='flex flex-col mt-10'>
                <h2 className='text-2xl mb-5'>Student List</h2>
                <ol>
                    {students.map((student, index) => (
                        <li key={index} className='mb-2 flex'>
                            <span className='flex-grow mr-2'>{`${student.firstName} ${student.lastName}`}</span>
                            <button onClick={() => removeStudent(index)} className='text-xs bg-red-500 text-white px-2 py-1 hover:bg-red-600 rounded'>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default CombinedComponent;
