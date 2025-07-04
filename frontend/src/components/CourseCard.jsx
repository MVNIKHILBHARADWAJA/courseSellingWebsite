import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ course }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    setWishlisted(!wishlisted);
  };

  return (
    <div className="course-card">
      <span 
        className={`heart-icon ${wishlisted ? 'active' : ''}`} 
        onClick={toggleWishlist}
      >
        ♥
      </span>
      <img src={course.thumbnail} alt={course.title} className='course-thumbnail' />
      <h3>{course.title}</h3>
      <p>{course.instructor}</p>
      <p>{course.description}</p>
      <p><b>Price:</b> {course.price}</p>
      <p><b>Rating:</b> {course.rating}</p>
      <Link to={`/course/${course.id}`}>
        <button type='button'>Enroll now</button>
      </Link>
    </div>
  );
};

export default CourseCard;
