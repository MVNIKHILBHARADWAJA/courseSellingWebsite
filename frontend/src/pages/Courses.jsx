import { useState } from 'react';
import './Courses.css';
import CourseCard from '../components/CourseCard';
import courseData from '../data/courseData';

const Courses = () => {
  const [searchCourse, setSearchCourse] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [levelFilter, setLevelFilter] = useState('All');
  const [ratingFilter, setRatingFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState('All');

  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const filteredCourses = courseData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchCourse.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || course.category === categoryFilter;
    const matchesLevel = levelFilter === 'All' || course.level === levelFilter;
    const matchesRating = ratingFilter === 'All' || course.rating >= parseFloat(ratingFilter);
    const matchesPrice = priceFilter === 'All' 
      || (priceFilter === 'Free' && course.price === 'Free')
      || (priceFilter === 'Paid' && course.price !== 'Free');
    return matchesSearch && matchesCategory && matchesLevel && matchesRating && matchesPrice;
  });

  return (
    <div className="courses">
      <h2>All Available Courses</h2>

      <div className="course-controls">
        <input
          type="text"
          placeholder="Search courses..."
          className="search-bar"
          value={searchCourse}
          onChange={(e) => setSearchCourse(e.target.value)}
        />
      </div>

      <div className="filters">
        <div className="filter-item">
          <label>Category:</label>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
            <option>All</option>
            <option>Web Development</option>
            <option>Computer Science</option>
            <option>Design</option>
            <option>Programming</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Level:</label>
          <select value={levelFilter} onChange={(e) => setLevelFilter(e.target.value)}>
            <option>All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Rating:</label>
          <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
            <option>All</option>
            <option value="4">4+ stars</option>
            <option value="3">3+ stars</option>
            <option value="2">2+ stars</option>
          </select>
        </div>

        <div className="filter-item">
          <label>Price:</label>
          <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
            <option>All</option>
            <option>Free</option>
            <option>Paid</option>
          </select>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            isWishlisted={wishlist.includes(course.id)}
            toggleWishlist={toggleWishlist}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
