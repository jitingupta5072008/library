import React from 'react'
import Counter from '../components/counter'
import missionImg from '../assets/JaiHindDigitalLibrary-About.png' 
const About = () => {
  return (
    <>
      <Counter/>
    <section class="about-section">
    <div class="container">
      <hr />
      <div className="row align-items-center">
        <div class="col-md-6 about-data">
          <h2>Our Mission</h2>
          <p class="lead">हमारा मिशन है छात्रों को शिक्षा के प्रति प्रोत्साहित करना और उन्हें एक ऐसे संसाधन-संपन्न पुस्तकालय की सुविधा प्रदान करना, जहां वे ज्ञानवर्धक किताबें पढ़ सकें, नई चीज़ें सीख सकें और अपने कौशल को निखार सकें। हमारा उद्देश्य है कि हर छात्र की शिक्षा यात्रा को समृद्ध और सशक्त बनाया जाए।.</p>
        </div>
        <div class="col-md-6 about-img">
          <div>

          <img src={missionImg} style={{height:'400px',width:'400px'}} alt="JaiHindDigitalLibrary | About"/>
          </div>
        </div>
      </div>
      <hr />
      <div className="row align-items-center">
        <div className="col-md-6 about-data">
          <div className='card-body text-center'>
          <img src='https://th.bing.com/th/id/OIP.79mGIRdhf6t0CanmdcadiQHaF2?w=900&h=712&rs=1&pid=ImgDetMain' style={{height:'100px',width:'100px'}} alt="JaiHindDigitalLibrary | About"/>
          <h2>Unlimited Data</h2>
          </div>
        </div>
        <div className="col-md-6 about-data">
          <div className='card-body'>
          <h2 className='text-center'>Services</h2>
         <ul>
          <li>6-12th NCERT Books</li>
          <li>Air Conditioner (AC)</li>
          <li>Puifier Water</li>
          <li>80+ seats</li>
          <li>9+ fans</li>
         </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default About