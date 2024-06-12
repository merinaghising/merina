//About.js File name: MERINA, Student’s Name: Merina Ghising, StudentID: 301303828, and Date:2024-06-10.
import React from 'react';
import resume from "../assests/merinaghising.pdf"
import profile from "../assests/profilepicture.png"
const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <img src={profile} alt="profile" style={{ height: '300px', marginRight: '150px' }} />

      <p>Hey there, I'm Merina, a dedicated web developer with a knack for building dynamic and responsive web applications. I earned my degree in Computer Science from Centennial College.</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
    </div>
  );
};

export default About;
