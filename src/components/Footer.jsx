import logoBG from '../assets/img/dc-logo-bg.png';

export default function Footer (){
    return (
        <footer>
            <div className="list1">
                <ul>
                    <li className="list-title"><span >DC COMICS</span></li>
                    <li><a href="">Characters</a></li>
                    <li><a href="">Comics</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Tv</a></li>
                    <li><a href="">Games</a></li>
                    <li><a href="">Videos</a></li>
                    <li><a href="">News</a></li>
                    <li className="list-title"><span>SHOP</span></li>
                    <li><a href="">Shop Dc</a></li>
                    <li><a href="">Shop Dc Collectibles</a></li>
                </ul>
            </div>  

            <div className="list2">
                    <ul>
                        <li className="list-title"><span>DC</span></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">Privacy Policy (New)</a></li>
                        <li><a href="#">Ad Choices</a></li>
                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Subscriptions</a></li>
                        <li><a href="#">Talent Workshops</a></li>
                        <li><a href="#">CPSC Certificates</a></li>
                        <li><a href="#">Ratings</a></li>
                        <li><a href="#">Shop Help</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="list3">
                    <ul>
                        <li className="list-title"><span>SITES</span></li>
                        <li><a href="#">DC</a></li>
                        <li><a href="#">MAD Magazine</a></li>
                        <li><a href="#">DC Kids</a></li>
                        <li><a href="#">DC Universe</a></li>
                        <li><a href="#">DC Power Visa</a></li>
                    </ul>
                </div>

                    <img className="logoBG" src={logoBG} alt="logoBG" />
                    

        </footer>
    );
}