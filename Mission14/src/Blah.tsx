import React from 'react';
import styles from './Blah.module.css';
function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col align-self-center ">
          <h1 className={styles.h1}>
            Hello My name is Joel Jilton I have a website dedicated to my love
            of movies and podcasts take a look{' '}
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src="./hilton.jpg" alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default TopBanner;
