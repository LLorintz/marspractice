
export type resourceType={
    name:string;
    amount: number
    onAmountChange: (newValue:number)=>void
}

const Resource = ({name, amount, onAmountChange}:resourceType) => {
  return (
<div className="resource-container">
    <div className="resource">
        <p>{name}: <span>{amount}</span></p>
    </div>
    <div className="button-container">
        <button type="button" onClick={()=>onAmountChange(+1)}>+</button>
        <button type="button" onClick={()=>onAmountChange(-1)}>-</button>
    </div>
</div>
  )
}

export default Resource