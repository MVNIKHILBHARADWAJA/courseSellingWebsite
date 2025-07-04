import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import courseData from '../data/courseData.js';

const popularCourses = [...courseData]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3);

const Home = () => {
  return (
   <div className="home">
      
      <section className="hero">
        <h1>Unlock Your Learning Journey</h1>
        <p>Choose from expert-led courses and gain certifications</p>
         <Link to="/courses">
        <button type="button">Browse Courses</button>
        </Link>
      </section>
      <section className="features">
        <h2>Why Learn With Us?</h2>
        <ul>
          <li>Expert Instructors</li>
          <li> Free Certification</li>
          <li>Lifetime Access</li>
        </ul>
      </section>
      <section className="featured-courses">
        <h2>Popular Courses</h2>
        <div className="course-grid">
         {popularCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
         ))}
        </div>
       </section>
      <section className="testimonials">
        <h2>What Our Learners Say</h2>
        <div className="testimonial">
          <p>“This platform transformed the way I learn. The courses are top-notch!”</p>
          <h4>- Nikhil</h4>
        </div>
      </section>
      <section className="final-cta">
        <h2>Join thousands of learners today!</h2>
        <p>Sign up and start your journey with our best courses.</p>
       <Link to="/register">
  <button type='button'>Get Started</button>
</Link>

      </section>
      </div>

  )
}

export default Home;