import { Link } from "react-router-dom";
import styles from "./Membership.module.css";

export default function Payment() {
    return (
        <div className={styles.container}>
            <div className={styles.memContainer}>
                <div className={styles.header}>
                    <img src="src/assets/CrimEdge.png" alt="Logo" />
                    <Link to="/landing">
                        <button className={styles.signout}>Sign Out</button>
                    </Link>
                </div>
                <div className={styles.memContent}> 
                    <h1>Choose how to pay</h1>
                    <p>
                        Your payment is encrypted and you can change how you pay anytime.
                    </p>
                </div>
                <div className={styles.divider}>
                <Link to="/CreditDebit">
                <div className={styles.paymentMethod}>
                    <div className={styles.paymentOption}>
                        <p>Credit or Debit Card</p>
                    </div>
                    <div className={styles.paymentOption}>
                        <img src="src/assets/visa.png" alt="Visa" />
                    </div>
                    <div className={styles.paymentOption}>
                        <img src="src/assets/mastercard.png" alt="Mastercard" />
                    </div>  
                </div>
                </Link>
                <Link to="/DigitalWallet">
                <div className={styles.paymentMethod}>
                    <div className={styles.paymentOption}>
                        <p>Digital Wallet</p>
                    </div>
                    <div className={styles.paymentOption}>
                        <img src="src/assets/gcash.png" alt="GCash" />
                    </div>
                    <div className={styles.paymentOption}>
                        <img src="src/assets/paypal.png" alt="Paypal" />
                    </div>  
                </div>
                </Link>
                </div>
                
                
            </div>
        </div>
    );
}
