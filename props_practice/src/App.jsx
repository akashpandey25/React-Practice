import React from 'react'
import Cards from './components/Cards'
import './App.css'
const App = () => {

  const users = [
  {
    id: 1,
    image: "https://i.pravatar.cc/150?img=1",
    name: "Rahul Sharma",
    designation: "Frontend Developer",
    description: "Passionate frontend developer who loves building modern and responsive web applications."
  },
  {
    id: 2,
    image: "https://i.pravatar.cc/150?img=2",
    name: "Priya Singh",
    designation: "UI/UX Designer",
    description: "Creative UI/UX designer focused on creating simple, beautiful, and user-friendly experiences."
  },
  {
    id: 3,
    image: "https://i.pravatar.cc/150?img=3",
    name: "Aman Verma",
    designation: "Backend Developer",
    description: "Backend developer experienced in building scalable APIs and database-driven applications."
  },
  {
    id: 4,
    image: "https://i.pravatar.cc/150?img=4",
    name: "Sneha Patel",
    designation: "Full Stack Developer",
    description: "Full stack developer working with React, Node.js, Express, and MongoDB."
  },
  {
    id: 5,
    image: "https://i.pravatar.cc/150?img=5",
    name: "Arjun Mehta",
    designation: "Software Engineer",
    description: "Software engineer who enjoys solving complex problems and developing reliable applications."
  },
  {
    id: 6,
    image: "https://i.pravatar.cc/150?img=6",
    name: "Neha Gupta",
    designation: "Product Designer",
    description: "Product designer passionate about turning ideas into intuitive and engaging digital products."
  },
  {
    id: 7,
    image: "https://i.pravatar.cc/150?img=7",
    name: "Rohan Kapoor",
    designation: "React Developer",
    description: "React developer focused on reusable components, clean code, and smooth user interfaces."
  },
  {
    id: 8,
    image: "https://i.pravatar.cc/150?img=8",
    name: "Anjali Mishra",
    designation: "Data Analyst",
    description: "Data analyst who transforms complex data into meaningful insights for better decisions."
  },
  {
    id: 9,
    image: "https://i.pravatar.cc/150?img=9",
    name: "Vikash Kumar",
    designation: "DevOps Engineer",
    description: "DevOps engineer experienced in CI/CD, cloud infrastructure, Docker, and automation."
  },
  {
    id: 10,
    image: "https://i.pravatar.cc/150?img=10",
    name: "Kavya Rao",
    designation: "Mobile Developer",
    description: "Mobile developer building fast and user-friendly applications for modern platforms."
  }
];
  return (
    <>
    <div className="container">
        {users.map(function(elem, idx){
          return (
            <div key={idx} className='box'>
              <Cards
                image={elem.image}
                name={elem.name}
                designation={elem.designation}
                description={elem.description}
              />
            </div>
          )
        })}
     </div>    
    </>
  )
}

export default App