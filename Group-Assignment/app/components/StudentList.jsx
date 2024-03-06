'use client'
import React from 'react'
import { useState } from 'react'

const tasks = [
    'Task 1',
    'Task 2',
    'Task 3'
];

const StudentList = () => {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    const addTask = () => {
        if (input.trim() !== '') {
            setTasks([...tasks, input])
            setInput('')
        }
    }

    const removeTask = (index) => {
        const newTasks = tasks.filter((_, idx) => idx !== index)
        setTasks(newTasks)
    }
    return (
        <div className='flex flex-col mt-10'>
            <h2 className='text-2xl mb-5'>To-Do List App</h2>
            <div className='mb-5'>
                <input
                    type='text'
                    placeholder='Add a task'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // to be changed once state and funcationality is added 
                    onKeyDown={(e) => { e.key === 'Enter' && addTask(); console.log(e.key) }} // to be changed once state and funcationality is added
                    className='border-2 p-2 rounded mr-2'
                />

                <button className='bg-green-500 text-white px-4 py-2 hover:bg-green-600 rounded' onClick={addTask}>Add Task</button> {/* Add funcationality for addTask */}

            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index} className='mb-2 flex'>
                        <span className='flex-grow mr-2'>{task}</span>
                        <button onClick={() => removeTask(index)} className='text-xs bg-red-500 text-white px-2 py-1 hover:bg-red-600 rounded'>Remove</button>

                    </li>
                ))}
            </ol>

        </div>
    )
}

export default StudentList