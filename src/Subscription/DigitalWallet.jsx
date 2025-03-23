import { Link } from "react-router-dom";
import styles from "./Membership.module.css";

export default function DigitalWallet() {
    return (
        <div className={styles.container}>
            <div className={styles.memContainer}>

                <div className={styles.header}>
                    <img src="src/assets/CrimEdge.png" alt="Logo" />
                    <Link to="/landing">
                        <button className={styles.signout}>Sign Out</button>
                    </Link>
                </div> 

                <div className={styles.paymentContainer}>
                    <div className={styles.paymentContent}>       
                        <div className={styles.paymentHead}>
                        <h1>Set up your GCash or Paypal</h1>
                            <div className={styles.paymentImages}>
                                <img src="src/assets/gcash.png" alt="Gcash"  />
                                <img src="src/assets/paypal.png" alt="Paypal" />
                            </div>
                        </div>
                    </div>

                    <form className={styles.paymentForm}>
                    
                    <input type="text" placeholder="+63 Mobile Number"/>

                    <div className={styles.formRow}>
                        <div className={styles.formCol1}>
                            <p>₱ 1,000 / month <br></br>Standard</p>
                        </div>
                        <div className={styles.formCol2}>
                            <Link to="/Membership">Change</Link>
                        </div>
                    </div>

                    <div className={styles.formAgreement}>
                        <p>
                        By checking the checkbox below, you agree to <span className={styles.terms}>Crim Edge’s Terms 
                            of Use, Privacy Policy</span>, and that you are over 18. Crim Edge 
                            will automatically continue your membership and charge the 
                            subscription fee (currently ₱1,000/month for Standard) to your 
                            payment method until you cancel. You may cancel anytime to avoid 
                            future charges.
                        </p>
                        <input type="checkbox" />
                        <span className={styles.checkTerms}>Agree to Terms and Conditions</span>
                    </div>

                    <button type="submit" className={styles.pay}>Pay Now</button>
                    
                </form>

                </div>

                

            </div>
        </div>
    );
}
