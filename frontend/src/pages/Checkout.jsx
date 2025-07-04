import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courseData from '../data/courseData';
import './Checkout.css';

const Checkout = () => {
  const { id } = useParams();
  const course = courseData.find(c => c.id === id);

  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const [applied, setApplied] = useState(false);

  if (!course) return <p>Course not found.</p>;

  const priceValue = course.price === 'Free' ? 0 : parseInt(course.price.replace(/[^\d]/g, '')); // parsing doubt

  const handleApplyCoupon = () => {
    if (coupon === 'DISCOUNT10' && priceValue > 0) {
      const discountAmount = priceValue * 0.10; 
      setDiscount(discountAmount);
      setApplied(true);
    } else {
      alert('Invalid or not applicable coupon.');
      setDiscount(0);
      setApplied(false);
    }
  };

  const finalPrice = Math.max(priceValue - discount, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>{course.title}</h3>
        <p><b>Instructor:</b> {course.instructor}</p>
        <p><b>Original Price:</b> {course.price}</p>
        {applied && <p><b>Discount:</b> ₹{discount.toFixed(0)}</p>}
        <p><b>Final Price:</b> ₹{finalPrice === 0 ? 'Free' : finalPrice.toFixed(0)}</p>
      </div>

      {priceValue > 0 && (
        <div className="coupon-section">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
          <button type="button" onClick={handleApplyCoupon}>Apply</button>
        </div>
      )}

      <button type="button" className="pay-button">Pay Now</button>
    </div>
  );
};

export default Checkout;
