import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Landing() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const faqData = [
    {
      question: 'What is Crim Edge?',
      answers: [
        'Crim Edge is an online learning platform designed to help students prepare for the criminology board exam through structured review modules, practice exams, live coaching, and performance tracking.',
      ],
    },
    {
      question: 'How does Crim Edge work?',
      answers: [
        'Free Trial – ₱0 (1-month limited access)',
        'Basic Plan – ₱500/month',
        'Standard Plan – ₱1,000/month',
        'Premium Plan – ₱2,000/month',
      ],
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answers: [
        'Yes, you can cancel anytime through your account settings. Your access will continue until the end of the billing period.',
      ],
    },
    {
      question: 'What courses are available on Crim Edge?',
      answers: [
        'Criminal Jurisprudence & Procedure',
        'Law Enforcement Administration',
        'Criminalistics',
        'Crime Detection & Investigation',
        'Sociology of Crimes & Ethics',
      ],
    },
  ];

  const headerRef = useRef(null);
  const getStartedRef = useRef(null);
  const joinSectionRef = useRef(null);
  const faqRef = useRef(null);

  // GSAP Animation
  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from(getStartedRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
    });

    gsap.from(joinSectionRef.current.children, {
      opacity: 0,
      y: 20,
      stagger: 0.2,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    });

    gsap.from(faqRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
      delay: 0.7,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.LandingContainer}>
        {/* Header */}
        <div className={styles.header} ref={headerRef}>
          <img src="./src/assets/CrimEdge.png" alt="Logo" />
          <Link to="/signIn">
            <button className={styles.signin}>Sign In</button>
          </Link>
        </div>

        {/* Get Started Section */}
        <div className={styles.getStarted} ref={getStartedRef}>
          <div className={styles.getStartedHead}>
            <h1 className={styles.edge}>
              EDGE over the <span className={styles.edge}>REST</span>
            </h1>
            <h1 className={styles.conquer}>
              <span className={styles.conquer}>CONQUER</span> the TEST!
            </h1>
          </div>
          <div className={styles.getStartedBody}>
            <p className={styles.description}>
              Ready to get started? Enter your email to create or resume your Crim Edge membership.
            </p>
          </div>
          <div className={styles.getStartedInput}>
            <input type="email" placeholder="Email address" className={styles.input} />
            <Link to="/signUp" className={styles.link}>
              Get Started
            </Link>
          </div>
        </div>

        {/* Reasons to Join Section */}
        <div className={styles.joinContainer} ref={joinSectionRef}>
          <div className={styles.joinContainerHead}>
            <h1>Reasons to Join Crim Edge</h1>
          </div>
          <div className={styles.joinContent}>
            <div className={styles.joinDescription}>
              <h2>All-in-One Learning Platform</h2>
              <p>
                Access comprehensive review materials, video lectures, and practice exams designed to cover all criminology board exam topics.
              </p>
            </div>
            <div className={styles.joinDescription}>
              <h2>Expert Support & Guidance</h2>
              <p>
                Get valuable insights through live Q&A sessions, mentorship, and performance tracking to improve your weak areas.
              </p>
            </div>
            <div className={styles.joinDescription}>
              <h2>Career-Boosting Opportunities</h2>
              <p>
                Earn a completion certificate, explore job listings, and access internship programs to jumpstart your career in law enforcement.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqContainer} ref={faqRef}>
          <div className={styles.faqContainerHead}>
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className={styles.faqContent}>
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`${styles.faqDescription} ${
                  hoveredIndex === index ? styles.expanded : ''
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <p className={styles.question}>{item.question}</p>
                <div
                  className={`${styles.dropdownContent} ${
                    hoveredIndex === index ? styles.show : ''
                  }`}
                >
                  {item.answers.map((answer, i) => (
                    <p key={i}>{answer}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

       

      </div>
       {/* Footer */}
      
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerSection}>
            <h3>About Crim Edge</h3>
            <p>Crim Edge is a leading platform for criminology board exam preparation.</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Contact Us</h3>
            <p>Email: support@crimedge.com</p>
            <p>Phone: +63 969 045 6744</p>
            <p>Address: Manila, Philippines</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Social Media</h3>
            <div className={styles.socialIcons}>
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Crim Edge. All Rights Reserved.</p>
        </div>
      </footer>
      
    </div>
  );
}
