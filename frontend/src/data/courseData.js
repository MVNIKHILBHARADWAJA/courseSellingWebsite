import dsaImg from '../assets/images/dsaimage.png';
import uiuxImg from '../assets/images/uximage.png';
import pythonImg from '../assets/images/pythonimage.png';
import webdevImg from '../assets/images/webimage.png';

const courseData = [
  {
    id: '1',
    title: 'Full Stack Web Development',
    description: 'Learn frontend and backend technologies from scratch.',
    instructor: 'Nikhil',
    price: '₹999',
    rating: 4.8,
    category: 'Web Development',
    level: 'Intermediate',
    thumbnail: webdevImg,
    curriculum: [
      'HTML & CSS Basics',
      'JavaScript & DOM',
      'React Fundamentals',
      'Backend with Node.js',
      'MongoDB and Deployment'
    ],
    review: `"This course gave me real-world experience and helped me build my first portfolio project!" - Nikhil Bharadwaja`,
    faq: {
      question: 'Is prior coding experience required?',
      answer: 'No, this course starts from the basics.'
    }
  },
  {
    id: '2',
    title: 'Data Structures & Algorithms',
    description: 'Master problem-solving with DSA in C++ and Java.',
    instructor: 'Akhil',
    price: 'Free',
    rating: 4.6,
    category: 'Computer Science',
    level: 'Advanced',
    thumbnail: dsaImg,
    curriculum: [
      'Arrays and Linked Lists',
      'Stacks and Queues',
      'Trees and Graphs',
      'Dynamic Programming',
      'Problem Solving Practice'
    ],
    review: `"Very helpful for placements!" - Akhil`,
    faq: {
      question: 'Do I need prior C++ knowledge?',
      answer: 'Yes, basic syntax will help.'
    }
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    description: 'Design beautiful and user-friendly interfaces.',
    instructor: 'Vikram',
    price: '₹799',
    rating: 4.4,
    category: 'Design',
    level: 'Beginner',
    thumbnail: uiuxImg,
    curriculum: [
      'Design Principles',
      'Wireframing',
      'User Research',
      'Prototyping Tools',
      'Portfolio Project'
    ],
    review: `"Great intro to design tools and process." - Vikram`,
    faq: {
      question: 'Do I need to know graphic design?',
      answer: 'No, this course starts with fundamentals.'
    }
  },
  {
    id: '4',
    title: 'Python for Beginners',
    description: 'Get started with Python and build simple applications.',
    instructor: 'Vaishnavi',
    price: 'Free',
    rating: 4.7,
    category: 'Programming',
    level: 'Beginner',
    thumbnail: pythonImg,
    curriculum: [
      'Python Basics',
      'Control Structures',
      'Functions and Modules',
      'Working with Files',
      'Mini Projects'
    ],
    review: `"Excellent for first-time coders!" - Vaishnavi`,
    faq: {
      question: 'Can I use this on Windows/Mac/Linux?',
      answer: 'Yes, Python works on all platforms.'
    }
  }
];

export default courseData;
