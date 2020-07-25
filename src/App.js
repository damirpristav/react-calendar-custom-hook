import React, { Fragment } from 'react';
import './App.css';

import Calendar from './components/Calendar';

function App() {
  return (
    <Fragment>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Calendar</h1>
          </div>
        </div>
      </section>
      <div className="container has-text-centered">
        <Calendar />
      </div>
    </Fragment>
  );
}

export default App;
