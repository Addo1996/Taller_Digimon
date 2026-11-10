
function DigimonCard(props) {
    const { digimon } = props;

    return (
        <div className="tarjeta">
            <img src={digimon.img} alt={digimon.name} />

            <h3>{digimon.name}</h3>

            <p>Nivel: {digimon.level}</p>
        </div>
    );
}

export default DigimonCard;
