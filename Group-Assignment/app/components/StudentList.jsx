'use client'
import React, { useState, useEffect } from 'react'

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:5001/students');
                if (response.ok) {
                    const data = await response.json();
                    setStudents(data);
                } else {
                    console.error('Failed to fetch students');
                }
            } catch (error) {
                console.error('There was an error fetching the students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className='flex flex-col mt-10'>
            <h2 className='text-3xl mb-5 font-bold'>Student List</h2>
            <ol>
                {students.map((student, index) => (
                    <li key={index} className='mb-2 flex justify-between items-center'>
                        <span>{student.firstName} {student.lastName} - Grade: {student.currentGrade}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default StudentList;
