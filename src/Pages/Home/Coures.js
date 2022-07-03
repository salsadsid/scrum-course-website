import React, { useState } from 'react';
import Course from './Course';

const Coures = () => {
    const [courses, setCourses] = useState([])

    useState(() => {
        fetch('courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [courses, setCourses])
    return (
        <div className='grid gr-d-cols-12 mx-12 my-12'>
            <h1>A broad range of courses</h1>
            <h1>AChoose from 100+ online video courses with new additions published every month</h1>
            <div className='grid grid-cols-4 gap-4 my-8'>
                {
                    courses.map(course => <Course
                        key={course._id}
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Coures;