// StudentCounter.js
import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
     <>
    <div className='container d-flex align-item-center justify-content-center mt-5 flex-wrap'>
      <h1 className='heading2 text-center'>Library Info & Statistics</h1>

        <div className="card-deck">
        <div class="card profile-card text-center" style={{padding:'2rem'}}>
          <div class="card-body Statistics">
              <h3 class="library-student-card-title"><CountUp start={0} end={80} duration={10} />+</h3>
              <p class="card-subtitle mb-2 text-muted">Enrolled Student</p>
          </div>
        </div>
        <div class="card profile-card text-center" style={{padding:'2rem'}}>
          <div class="card-body Statistics">
              <h3 class="library-student-card-title"><CountUp start={0} end={24} duration={10} />h</h3>
              <p class="card-subtitle mb-2 text-muted">Library Open Time</p>
          </div>
        </div>
        <div class="card profile-card text-center" style={{padding:'2rem'}}>
          <div class="card-body Statistics">
              <h3 class="library-student-card-title"><CountUp start={0} end={80} duration={10} />+</h3>
              <p class="card-subtitle mb-2 text-muted">Enrolled Student</p>
          </div>
        </div>
       
        </div>
      </div>
  
    </>
  );
};

export default Counter;

