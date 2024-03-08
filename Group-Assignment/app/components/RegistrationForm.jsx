'use client'
import { useState } from "react"

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        currentGrade: ''
    })
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            if (response.ok) {
                setMessage('Student has been registered successfully')
                setFormData({
                    firstName: '',
                    lastName: '',
                    dateOfBirth: '',
                    currentGrade: ''
                })
            }
            else {
                setMessage('Student registration failed')
            }

        } catch (error) {
            console.error ('There was an error registering the student: ', error);
            setMessage("Student registration failed: " + error.message);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className='max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow'>
            <h2 className='text 2xl mb-4'>Student Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="firstName" className='block text-sm font-medium text-gray-600'>First Name</label>
                    {/* add handle submit */}
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
                    {/* add handle submit */}
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
                    {/* add handle submit */}
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
                    <label htmlFor="currentGrade" className='block text-sm font-medium text-gray-600'>Current Grade</label>
                    {/* add handle submit */}
                    <input
                        type="number"
                        id="currentGrade"
                        name="currentGrade"
                        className='mt-1 p-2 w-full border border-gray-300 rounded-md' required
                        value={formData.currentGrade}
                        onChange={handleInputChange}
                    />
                </div>

                <div className='mb-4'>
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600'>
                        Register Student
                    </button>
                </div>
            </form>
            {message && <div className='mt-4 text-center text-red-400'>{message}</div>}
        </div>
    )
}

export default RegistrationForm