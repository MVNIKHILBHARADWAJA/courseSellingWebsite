import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './CourseDetail.css';
import courseData from '../data/courseData';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData.find(c => c.id === id);

  const [showCurriculum, setShowCurriculum] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const toggleCurriculum = () => setShowCurriculum(!showCurriculum);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (rating > 0 && reviewText.trim()) {
      setSubmittedReviews([...submittedReviews, { rating, text: reviewText }]);
      setReviewText('');
      setRating(0);
    }
  };

  if (!course) return <p>Course not found.</p>;

  return (
    <div className="course-detail">
      <h1>{course.title}</h1>
      <p className="description">{course.description}</p>

      <div className="section">
        <h2>What You'll Learn</h2>
        <ul>
          {course.curriculum.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h2>Prerequisites</h2>
        <p>{course.level} level course</p>
      </div>

      <div className="section curriculum">
        <button 
          className="toggle-btn"
          onClick={toggleCurriculum}
        >
          {showCurriculum ? 'Hide Curriculum ▲' : 'Show Curriculum ▼'}
        </button>
        {showCurriculum && (
          <ul className="curriculum-list">
            {course.curriculum.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="section instructor">
        <h2>Instructor</h2>
        <div className="instructor-info">
          <img src="https://via.placeholder.com/100" alt="Instructor" />
          <div>
            <h4>{course.instructor}</h4>
            <p>{course.title} expert.</p>
          </div>
        </div>
      </div>

      <div className="section price-section">
        <p className="price">{course.price}</p>
        <Link to={`/checkout/${course.id}`}>
          <button type="button">Buy Now</button>
        </Link>
      </div>

      <div className="section reviews">
        <h2>Ratings & Reviews</h2>
        <p>({course.rating}/5)</p>
        <p>{course.review}</p>

        <h3>Submit Your Review</h3>
        <form onSubmit={handleSubmitReview}>
          <label>Rating (1-5):</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          />
          <textarea
            placeholder="Write your review..."
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button type="submit">Submit Review</button>
        </form>

        {submittedReviews.length > 0 && (
          <>
            <h3>Submitted Reviews:</h3>
            {submittedReviews.map((r, idx) => (
              <div key={idx} className="submitted-review">
                <p><b>Rating:</b> {r.rating}</p>
                <p>{r.text}</p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className="section faqs">
        <h2>FAQs</h2>
        <p><b>Q:</b> {course.faq.question}</p>
        <p><b>A:</b> {course.faq.answer}</p>
      </div>
    </div>
  );
};

export default CourseDetail;
