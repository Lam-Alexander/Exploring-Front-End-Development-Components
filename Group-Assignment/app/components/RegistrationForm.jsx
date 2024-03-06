'use client'
import { useState } from "react"

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        userName: '',
        email: '',
        password: ''
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
                setMessage('User has been registered successfully')
                setFormData({
                    firstName: '',
                    lastName: '',
                    phoneNumber: '',
                    userName: '',
                    email: '',
                    password: ''
                })
            }
            else {
                setMessage('User registration failed')
            }

        } catch (error) {
            throw new Error("User registration failed")
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
            <h2 className='text 2xl mb-4'>Registration Form</h2>
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
                    <label htmlFor="phoneNumber" className='block text-sm font-medium text-gray-600'>Phone Number</label>
                    {/* add handle submit */}
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
                    {/* add handle submit */}
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
                    {/* add handle submit */}
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
                    {/* add handle submit */}
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
        </div>
    )
}

export default RegistrationForm