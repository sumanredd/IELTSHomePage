import { useEffect, useRef, useState } from "react";
import "./index.css";

const reviews = [
  {
    id: 1,
    name: "Ananya",
    text: "Passed with Band 8! The Mock Tests were invaluable and gave me real exam confidence. The practice structure was exactly what I needed to improve my weak areas.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Rahul",
    text: "Improved my speaking drastically. The one-on-one practice sessions helped me overcome hesitation and build fluency. Highly recommend to anyone aiming for a higher band score.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sophia",
    text: "The practice sessions were excellent. The mentors gave personalized feedback that boosted my confidence and helped me polish my grammar and pronunciation.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    name: "Arjun",
    text: "I found the mock tests to be extremely realistic. They not only prepared me for the format but also helped me manage my time effectively during the actual exam.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 5,
    name: "Maya",
    text: "The course material was well-structured and easy to follow. The teachers were approachable and always ready to guide us through difficult topics with patience.",
    img: "https://randomuser.me/api/portraits/women/52.jpg",
  },
  {
    id: 6,
    name: "David",
    text: "I was struggling with writing tasks, but the detailed feedback I received helped me understand exactly where I was going wrong and how to improve step by step.",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
];

const StudentReviews = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);


  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <>
    
    <div className="reviewsWrapper">
    <h1 className="TestimonialsHeading">Learner Stories</h1>
      <div className="carousel">
        {reviews.map((rev, idx) => {
        
          let className = "card";
          if (idx === current) className += " active";
          else if (idx === (current + 1) % reviews.length) className += " right";
          else if (idx === (current - 1 + reviews.length) % reviews.length)
            className += " left";
          else className += " hidden";

          return (
            <div key={rev.id} className={className}>
              <img src={rev.img} alt={rev.name} className="reviewImg" />
              <p className="reviewText">{rev.text}</p>
              <h4 className="reviewName">- {rev.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
</>
  );
};

export default StudentReviews;
