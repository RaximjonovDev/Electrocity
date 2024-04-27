import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const BreadCrumb = () => {

    const location = useLocation();
    const pathArr = location.pathname.split('/').filter(path => path.trim() !== '');
    const cleanedPathArr = pathArr.map(path => path.replace(/20|%20|-/g, ' '));




    return (
        <ul className='flex space-x-2 '>
            <li>
                <Link className='text-lighterBlue underline'>Home</Link>
            </li>
            {
                
                cleanedPathArr.map((path, index) => {
                    return (
                        <li key={index}>
                            {
                                index !== cleanedPathArr.length - 1 ?
                                    <span>/ <Link to={path} className='text-lighterBlue capitalize underline'>{path}</Link></span> :
                                    <span className='capitalize'>/ {path}</span>
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default BreadCrumb