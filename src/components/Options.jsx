
export default function Options({ onUpdate, onReset,totalFeedbackValue }) {
    
    return (
        <>
            <button onClick={() => onUpdate("good")}>good</button>
            <button onClick={() => onUpdate("neutral")}>neutral</button>
            <button onClick={() => onUpdate("bad")} >bad</button>
            {totalFeedbackValue > 0 ? (<button onClick = { onReset } > Reset</button >):(<></>)}
        </>
    )
}