import comics from '../assets/img/buy-comics-digital-comics.png';
import merchandise from '../assets/img/buy-comics-merchandise.png';
import locater from '../assets/img/buy-comics-shop-locator.png';
import subscriptions from '../assets/img/buy-comics-subscriptions.png';
import visa from '../assets/img/buy-dc-power-visa.svg';
import CardsList from './cards/cardsList.jsx'


export default function Main (){
    return (
        <main>
            <div className="container-black">
                
            </div> 
            
             <div className="cards-container">
                    <CardsList />
                </div>         

            <div className="container-blue">
                <a href="#"><img src={comics} alt="comics" />
                    <span>DIGITAL COMICS</span>
                </a>
                <a href="#"><img src={merchandise} alt="merchandise" />
                    <span>DC MERCHANDISE</span>
                </a>
                
                <a href="#"><img src={subscriptions} alt="subscriptions" />
                    <span>SUBSCRIPTIONS</span>
                </a>
                
                <a href="#"><img src={locater} alt="locater" />
                    <span>COMICS STOP LOCATOR</span>
                </a>
          
                <a href="#"><img src={visa} alt="visa" />
                    <span>DC POWER VISA</span>
                </a>
            </div>
        </main>
    );
}