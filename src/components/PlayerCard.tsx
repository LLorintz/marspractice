

const PlayerCard = () => {
  return (
    <div>
        <p className="playername">Player Name</p>
        <div className="resource-container">
            <div className="resource">
                <p>Steel: <span>50</span></p>
            </div>
            <div className="button-container">
                <button type="button">+</button>
                <button type="button">-</button>
            </div>
        </div>
        <div className="resource-container">
            <div className="resource">
                <p>Steel: <span>50</span></p>
            </div>
            <div className="button-container">
                <button type="button">+</button>
                <button type="button">-</button>
            </div>
        </div>
        <div className="resource-container">
            <div className="resource">
                <p>Steel: <span>50</span></p>
            </div>
            <div className="button-container">
                <button type="button">+</button>
                <button type="button">-</button>
            </div>
        </div>
    </div>
  )
}

export default PlayerCard