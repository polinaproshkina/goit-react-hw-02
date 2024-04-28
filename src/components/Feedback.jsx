export default function Feedback({value,totalValue, positiveFeedbackValue}) {
    return (
        <>
            <p>Good: {value.good}</p>
            <p>Neutral: {value.neutral}</p>
            <p>Bad: {value.bad}</p>
            <p>Total: {totalValue}</p>
            <p>Positive: {positiveFeedbackValue}%</p>
        </>
    )
}