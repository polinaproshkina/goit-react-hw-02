export default function Options({onUpdate, onReset}) {
    
   return (
        <>
           <button onClick={()=>onUpdate("good")}>good</button>
           <button onClick={()=>onUpdate("neutral")}>neutral</button>
           <button onClick={()=>onUpdate("bad")} >bad</button>
            <button onClick={onReset}>Reset</button>
        </>
    )
}