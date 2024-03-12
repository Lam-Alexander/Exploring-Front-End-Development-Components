"use client"
import React, { useState, useEffect } from 'react';

const CombinedComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        CurrentGPA: ''
    });
    const [students, setStudents] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/users')
            .then(response => response.json())
            .then(data => setStudents(data))
            .catch(error => console.error('Error fetching students:', error));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const capitalizedFormData = {
                firstName: capitalizeFirstLetter(formData.firstName),
                lastName: capitalizeFirstLetter(formData.lastName),
                dateOfBirth: formData.dateOfBirth,
                CurrentGPA: formData.CurrentGPA
            };
            const response = await fetch('http://localhost:5001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(capitalizedFormData)
            });
            if (response.ok) {
                setMessage('User has been registered successfully');
                setStudents([...students, capitalizedFormData]);
                setFormData({
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    CurrentGPA: ''
                });
            } else {
                setMessage('User registration failed');
            }
    
        } catch (error) {
            console.error("User registration failed:", error);
            setMessage('User registration failed');
        }
    };
    

    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const removeStudent = async (index) => {
        try {
            const studentToRemove = students[index];
            const response = await fetch(`http://localhost:5001/users/${studentToRemove.id}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                const newStudents = students.filter((_, idx) => idx !== index);
                setStudents(newStudents);
                setMessage('Student removed successfully');
            } else {
                setMessage('Failed to remove student');
            }
        } catch (error) {
            console.error('Error removing student:', error);
            setMessage('Failed to remove student');
        }
    };
    

    return (
        <div className='max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow'>
            <strong><h2 className='text 2xl mb-4'>Register New Students</h2> </strong>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="firstName" className='block text-sm font-medium text-gray-600'>First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md'
                        required
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
                     <label htmlFor="dateOfBirth" className='block text-sm font-medium text-gray-600'>Date of Birth</label>
                     <input
                        type="date"
                         id="dateOfBirth"
                         name="dateOfBirth"
                         className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                         value={formData.dateOfBirth}
                         onChange={handleInputChange}
                    />
                 </div>

                 <div className='mb-4'>
                     <label htmlFor="CurrentGPA" className='block text-sm font-medium text-gray-600'>Current GPA</label>
                    <input
                         type="number"
                         id="CurrentGPA"
                         name="CurrentGPA"
                         className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                         value={formData.CurrentGPA}
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

                <strong><h2 className='text-2xl mb-5'>Student List</h2></strong> 
        
                <ol>
                    {students.map((student, index) => (
                        <li key={index} className='mb-2'>
                            <div>
                                <strong>Name:</strong> {`${student.firstName} ${student.lastName}`}
                            </div>

                            <div>
                                <strong>DOB:</strong> {student.dateOfBirth}
                            </div>

                            <div>
                                <strong>GPA:</strong> {student.CurrentGPA}
                            </div>

                            <button onClick={() => removeStudent(index)} className='text-xs bg-red-500 text-white px-2 py-1 hover:bg-red-600 rounded'>Remove</button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default CombinedComponent;
