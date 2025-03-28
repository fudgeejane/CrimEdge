import '../index.css';
import { FiMenu } from 'react-icons/fi';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../assets/CrimEdge.png';

export default function Header({ toggleSidebar }) {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="menu-toggle">
        <FiMenu className="menu-icon" onClick={toggleSidebar} />
      </div>
      <div className="user-head">
        <div className="notification">
          <i className="bi bi-bell"></i>
        </div>
        <div className="user-info">
          <i className="bi bi-person-circle"></i>
          <span>User's Name</span>
        </div>
      </div>
    </div>
  );
}
