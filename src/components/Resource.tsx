
export type resourceType={
    name:string;
    amount: number
    onAmountChange: (newValue:number)=>void
}

type ResourceObjType={
    Obj:resourceType
}

const Resource = ({Obj}:ResourceObjType) => {
  return (
<div className="resource-container">
    <div className="resource">
        <p>{Obj.name}: <span>{Obj.amount}</span></p>
    </div>
    <div className="button-container">
        <button type="button" onClick={()=>Obj.onAmountChange(+1)}>+</button>
        <button type="button" onClick={()=>Obj.onAmountChange(-1)}>-</button>
    </div>
</div>
  )
}

export default Resource