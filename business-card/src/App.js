import './App.css';
import 'boxicons/css/boxicons.min.css';
import Socials from './Socials';
function App() {
  return (
    <div className="container">
      <img src="./images/portrait.jpg" alt="portrait" />
      <div className='content'>
        <div className='header'>
          <h2>Laura Smith</h2>
          <p>Frontend Developer</p>
          <div className="reach-out">
            <button id="email">Email</button>
            <button id="linkedin">
              <i className='bx bxl-linkedin-square'></i>Linkedin</button>
          </div>
        </div>
        <div className="main">
          <h3>About</h3>
          <p>I am a frontend developer with a particular interest in making things simple and
            automating daily tasks. I try to keep up with security and best practices, and am always
            looking for new things to learn.</p>
          <h3>Interests</h3>
          <p>When I'm not coding, I enjoy reading, hiking, and playing with my dog</p>
          <Socials />
        </div>
      </div>
    </div>
  );
}

export default App;