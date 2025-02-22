import React from 'react'
import { Link } from 'react-router-dom'

function Categories() {
    return (
        <div>
            <div className='text-center d-flex align-items-center'>
                <div className='p-3 text-start'>
                    <Link className='category-button bg-light p-2 text-decoration-none text-dark rounded-pill me-2 shadow-none' to="/s?key=general">General</Link>
                    <Link className='category-button bg-light p-2 text-decoration-none text-dark rounded-pill me-2 shadow-none' to="/s?key=business">Business</Link>
                    <Link className='category-button bg-light p-2 text-decoration-none text-dark rounded-pill me-2 shadow-none' to="/s?key=technology">Technology</Link>
                    <Link className='category-button bg-light p-2 text-decoration-none text-dark rounded-pill me-2 shadow-none' to="/s?key=health">Health</Link>
                    <Link className='category-button bg-light p-2 text-decoration-none text-dark rounded-pill me-2 shadow-none' to="/s?key=entertainment">Entertainment</Link>
                    <Link className='category-button bg-light p-2 text-decoration-none text-dark rounded-pill me-2 shadow-none' to="/s?key=sports">Sports</Link>
                    <Link className='category-button bg-light p-2 text-decoration-none text-dark rounded-pill me-2 shadow-none' to="/s?key=science">Science</Link>
                </div>
            </div>
        </div>
    )
}

export default Categories
