import "./Header.css";

const imgUrl = "https://m.media-amazon.com/images/I/41UaA6ncmbL.png";
const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo" src={imgUrl} alt="Namaste Swiggy Logo" />
      </div>
      <nav className="nav-items">
        <ul className="nav-list">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;