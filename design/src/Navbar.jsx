import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">Elementum</div>
      {/* Navigation Links */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Studio</li>
        <li>Services</li>
        <li>Contact</li>
        <li>FAQ's</li>
      </ul>
      {/* Menu Icon */}
      <div className="menu-icon">
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;