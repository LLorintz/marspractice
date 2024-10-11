import { useState } from "react"
import Resource from "./Resource"
import { resourceType } from "./Resource"



const PlayerCard = () => {

const[steel, setSteel] = useState<number>(0)
const handleSetSteel = (newValue:number)=>{
    setSteel(prev => prev + newValue)
}

const steelObj:resourceType={
    name:"Steel",
    amount: steel,
    onAmountChange:handleSetSteel
}

  return (
    <div>
        <p className="playername">Player Name</p>
        <Resource {...steelObj}></Resource>
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