import React from 'react';
import userData from '../data/userData';
import './DashboardContent.css';
import { Link } from 'react-router-dom';

const DashboardContent = ({ activeTab }) => {
  return (
    <div className="dashboard-content">
      {activeTab === 'myCourses' && (
        <div>
          <h2>My Courses</h2>
          {userData.enrolledCourses.map(course => (
            <div key={course.id} className="course-progress">
              <h4>{course.title}</h4>
              <p>Progress: {course.progress}%</p>
              <progress value={course.progress} max="100"></progress>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'profile' && (
        <div>
          <h2>Profile Settings</h2>
          <form>
            <input type="text" defaultValue={userData.name} /><br/> 
            <input type="email" defaultValue={userData.email} /><br/>       
            <input type="password" placeholder="New Password" /><br/>
            <button type="submit">Update Profile</button>
          </form>
        </div>
      )}
      {activeTab === 'history' && (
        <div>
          <h2>Purchase History</h2>
          {userData.purchaseHistory.map(purchase => (
            <div key={purchase.id} className="purchase-item">
              <p><b>Course:</b> {purchase.title}</p>
              <p><b>Date:</b> {purchase.date}</p>
              <p><b>Price:</b> {purchase.price}</p>
            </div>
          ))}
        </div>
      )}
      {activeTab === 'certificates' && (
        <div>
          <h2>Certificates</h2>
          {userData.certificates.map(cert => (
            <div key={cert.id} className="certificate-item">
              <p>{cert.title}</p>
              <Link to={cert.link} >Download Certificate</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
