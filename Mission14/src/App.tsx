import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import TopBanner from './Blah';
import MovieList from './Movies';
import podcast from './Podcast';

import Movielist1 from './movies/MovieList';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Collin Young's Website
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/podcast">
                    Podcasts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/movies">
                    Movie Collection
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" Component={TopBanner} />
          <Route path="/podcast" Component={podcast} />
          <Route path="/movies" Component={Movielist1} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
