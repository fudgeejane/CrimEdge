import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Landing.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


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

  return (
    <div className={styles.container}>
      <div className={styles.LandingContainer}>
        {/* Header */}
        <div className={styles.header}>
          <img src="./src/assets/CrimEdge.png" alt="Logo" />
          <Link to="/signIn">
            <button className={styles.signin}>Sign In</button>
          </Link>
        </div>

        {/* Get Started Section */}
        <div className={styles.getStarted}>
          <div className={styles.getStartedHead}>
            <h1 className={styles.edge}>
              EDGE over the <span className={styles.edge}>REST</span>
            </h1>
            <h1 className={styles.conquer}>
              <span className={styles.conquer}><span></span>CONQUER</span> the TEST!
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
              <button className={styles.getStartedButton}>Get Started</button>
            </Link>

          </div>
        </div>

        {/* Reasons to Join Section */}
        <div className={styles.joinContainer}>
          <div className={styles.joinContainerHead}>
            <h1>Reasons to Join Crim Edge</h1>
          </div>
          <div className={styles.joinContent}>
            <div className={styles.joinDescription}>
              <h1>All-in-One Learning Platform</h1>
              <p>
                Access comprehensive review materials, video lectures, and practice exams designed to cover all criminology board exam topics.
              </p>
            </div>
            <div className={styles.joinDescription}>
              <h1>Expert Support & Guidance</h1>
              <p>
                Get valuable insights through live Q&A sessions, mentorship, and performance tracking to improve your weak areas.
              </p>
            </div>
            <div className={styles.joinDescription}>
              <h1>Career-Boosting Opportunities</h1>
              <p>
                Earn a completion certificate, explore job listings, and access internship programs to jumpstart your career in law enforcement.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqContainer}>
          <div className={styles.faqContainerHead}>
            <h1>FAQ</h1>
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
      <p>
        Crim Edge is a leading platform for criminology board exam preparation. Access review materials, video lectures, and practice exams to boost your chances of success.
      </p>
    </div>
    <div className={styles.footerSection}>
      <h3>Contact Us</h3>
      <p>Email: support@crimedge.com</p>
      <p>Phone: +63 969 045 6744</p>
      <p>Address: Manila, Philippines</p>
    </div>
    <div className={styles.footerSection}>
      <h3>Social Media</h3>
      <p>
        Follow us on social media to find out about the latest updates, tips, and resources.
      </p>
      <div className={styles.socialIcons}>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
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
