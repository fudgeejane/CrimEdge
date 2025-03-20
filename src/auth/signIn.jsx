import { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link
import styles from './Reg.module.css';
import SignUp from './signUp';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2 className={styles.title}>Sign In</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
          <button type="submit" className={styles.button}>
            Sign In
          </button>
          <div className={styles.bottom}>
            <label className={styles.remember}>
              <input type="checkbox" />
              Remember me
            </label>
            <Link to="/forgot-password" className={styles.forgot}>
              Forgot Password?
            </Link>
          </div>
          <div className={styles.signup}>
            <p>
              New to Crim Edge?{' '}
              <Link to="/signUp" className={styles.link}>Sign Up Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
