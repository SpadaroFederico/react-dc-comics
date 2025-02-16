export default function singleCard (){
    return (
        <div className="prod card">
            <img src={card.src} alt="{card.title}" />
            <h3>{card.title}</h3>
        </div>
        );
    }