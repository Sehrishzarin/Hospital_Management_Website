import React from 'react';
import styles from './AboutSection.module.css';
import pic1 from '../assets/pic1.jpg';
import historyImg from '../assets/history.png';
import branchImg from '../assets/branch-leaves.png';
import visionImg from '../assets/vision.png';
import missionImg from '../assets/mission.png';
import urologyImg from '../assets/urology.png';
import gynaeImg from '../assets/gyanaecology.png';

function AboutUs() {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.aboutContainer}>
        <h1>
          <i className="bi bi-house-door-fill" style={{ fontSize: '50px', padding: '10px' }}></i>
          About Us
        </h1>
        <p className={styles.text}>
          Welcome to MidCity Hospital Urology and General Nursing Home, a leading healthcare institution renowned for its excellence in urology and gynecology. Our commitment to providing top-notch medical care, state-of-the-art facilities, and compassionate patient care has made us a trusted name in the community.
        </p>
      </div>

      <div className={styles.historyVisionMission}>
        <div className={styles.history}>
          <div className={styles.cardHeader}>
            <img src={historyImg} alt="history" width={50} height={50} />
            <h2>Our History</h2>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.text}>
              Established in 2019, MidCity Hospital has been at the forefront of healthcare innovation. Our founders, Dr. xyz and Dr. abc, envisioned a hospital that not only treated illnesses but also prioritized patient comfort and satisfaction. Over the decades, we have grown into a multifaceted healthcare provider, expanding our services to meet the evolving needs of our patients.
            </p>
            <div className={styles.readMoreContainer}>
              <span className={styles.readMore}>Read More <i className="bi bi-arrow-right"></i></span>
            </div>
          </div>
        </div>

        <div className={styles.vision}>
          <div className={styles.cardHeader}>
            <img src={visionImg} alt="vision" width={50} height={50} />
            <h2>Our Vision</h2>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.text}>
              Our vision is to be a beacon of excellence in the healthcare industry, recognized for our innovative practices, clinical expertise, and unwavering commitment to patient care. We aim to set new standards in healthcare delivery and become the preferred choice for urology and gynecology services.
            </p>
            <div className={styles.readMoreContainer}>
              <span className={styles.readMore}>Read More <i className="bi bi-arrow-right"></i></span>
            </div>
          </div>
        </div>

        <div className={styles.mission}>
          <div className={styles.cardHeader}>
            <img src={missionImg} alt="mission" width={50} height={50} />
            <h2>Our Mission</h2>
          </div>
          <div className={styles.cardContent}>
            <p className={styles.text}>
              Our mission is to deliver exceptional healthcare services with a patient-centered approach. We strive to enhance the quality of life for our patients by offering advanced medical treatments and personalized care in a welcoming environment.
            </p>
            <div className={styles.readMoreContainer}>
              <span className={styles.readMore}>Read More <i className="bi bi-arrow-right"></i></span>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section - Kept EXACTLY as original */}
      <h2 className={styles.specialtiesHeading}>
        Specialties
      </h2>

      <div className={styles.specialties}>
        <div className={styles.specialty}>
          <h3>
            Urology <img src={urologyImg} alt="urology" width={50} height={50} style={{ padding: '10px' }} />
          </h3>
          <p>
            MidCity Hospital's urology department is staffed by some of the most skilled urologists in the field. We offer comprehensive diagnostic and treatment services for a wide range of urological conditions, including kidney stones, urinary tract infections, prostate issues, and more.
          </p>
        </div>

        <div className={styles.specialty}>
          <h3>
            Gynaecology <img src={gynaeImg} alt="gynae" width={50} height={50} style={{ padding: '10px' }} />
          </h3>
          <p>
            Our gynecology department is dedicated to providing women with the highest quality care throughout all stages of life. From routine check-ups to advanced surgical procedures, our experienced gynecologists are committed to addressing the unique health needs of women.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;