import React from 'react';
import './cardCourse.css';
import courseImg from '../../images/react.png'

const courseCard = (props) => {
    return (
        <>
            <div className='card'>
                <div className='card-img'>
                    <img src={props.courseData.img} alt={props.courseData.title}></img>
                </div>
                <div className='card-body'>
                    <h3 className='card-title'>{props.courseData.title}</h3>
                    <div className='line'></div>
                    <div className='card-details'>
                        <p>{props.courseData.desp}</p>
                    </div>
                    <a href='javascript:void(0)' type="submit">Learn More</a>
                </div>
            </div>
        </>
    )
}

export default courseCard
