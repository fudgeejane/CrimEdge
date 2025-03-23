import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './Reg.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.from(formRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reset link sent to:', email);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer} ref={formRef}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Forgot Password</h2>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Send Reset Link
          </button>
          <div className={styles.bottom}>
            <Link to="/signIn" >
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
