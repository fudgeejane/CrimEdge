import { Link } from "react-router-dom";
import styles from "./Membership.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Membership() {
    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.memContainer}>
                    <div className={styles.header}>
                        <img src="src/assets/CrimEdge.png" alt="Logo" />
                        <Link to="/landing">
                            <button className={styles.signout}>Sign Out</button>
                        </Link>
                    </div>

                    <div className={styles.subContainer}>
                        <div className={styles.subContent}>
                            <div className={styles.subHead}>Free Tier</div>
                            <div className={styles.subBodyContainer}>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Monthly</p></div>
                                    <div className={styles.subBodyCon}><p>₱0 (for one month only)</p></div>
                                </div>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Access & Features</p></div>
                                    <div className={styles.subBodyCon}>
                                        <ul>
                                            <li>Sample quizzes</li>
                                            <li>Trial lessons</li>
                                            <li>Web only (1 device)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.subContent}>
                            <div className={styles.subHead}>Basic Plan</div>
                            <div className={styles.subBodyContainer}>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Monthly</p></div>
                                    <div className={styles.subBodyCon}><p>₱500</p></div>
                                </div>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Access & Features</p></div>
                                    <div className={styles.subBodyCon}>
                                        <ul>
                                            <li>Pre-recorded lectures</li>
                                            <li>Practice exams</li>
                                            <li>Web & Mobile (2 devices)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.subContent}>
                            <div className={styles.subHead}>Standard Plan</div>
                            <div className={styles.subBodyContainer}>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Monthly</p></div>
                                    <div className={styles.subBodyCon}><p>₱1,000</p></div>
                                </div>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Access & Features</p></div>
                                    <div className={styles.subBodyCon}>
                                        <ul>
                                            <li>All Basic Plan features</li>
                                            <li>Full-length mock exams</li>
                                            <li>Score analysis & tracking</li>
                                            <li>Web & Mobile (3 devices)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.subContent}>
                            <div className={styles.subHead}>Premium Plan</div>
                            <div className={styles.subBodyContainer}>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Monthly</p></div>
                                    <div className={styles.subBodyCon}><p>₱2,000</p></div>
                                </div>
                                <div className={styles.subBody}>
                                    <div className={styles.subBodyHead}><p>Access & Features</p></div>
                                    <div className={styles.subBodyCon}>
                                        <ul>
                                            <li>All Standard Plan features</li>
                                            <li>Live coaching & mentorship</li>
                                            <li>One-on-one mentoring</li>
                                            <li>Offline access to study materials</li>
                                            <li>Web, Mobile & Offline Mode (5 devices)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className={styles.subBodyPay}>
                        <Link to="/payment">Next</Link>
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

          
        </div>
    );
}