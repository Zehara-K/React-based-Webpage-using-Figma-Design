import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="logo">Elementum</div>

      <ul className="nav-links">
        <li className="nav-item nav-home">Home</li>
        <li className="nav-item nav-studio">Studio</li>
        <li className="nav-item nav-services">Services</li>
        <li className="nav-item nav-contact">Contact</li>
        <li className="nav-item nav-faqs">FAQ&apos;s</li>
      </ul>

      <button type="button" className="menu-icon" aria-label="Open menu">
        <span />
        <span />
      </button>
    </nav>
  );
}

export default Navbar;
