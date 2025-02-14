import logo from '../assets/img/dc-logo.png';

export default function Header() {
  return (
    <header>
      <div className="container">
        <a href="#"><img src={logo} alt="Logo" /></a>
        <nav>
          <ul>
            <li><a href="#">CHARACTERS</a></li>
            <li><a href="#">COMICS</a></li>
            <li><a href="#">MOVIE</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">GAMES</a></li>
            <li><a href="#">COLLECTIBLES</a></li>
            <li><a href="#">VIDEOS</a></li>
            <li><a href="#">FANS</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">SHOP</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

  
