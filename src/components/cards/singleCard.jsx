export default function SingleCard({ title, thumb }) {
    return (
        <div className="prod-card">
            <img src={thumb} alt={title} />
            <h3>{title}</h3>
        </div>
    );
}
