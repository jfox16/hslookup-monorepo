
interface KeywordDisplayItemProps {
  name?: string;
  decimal?: number;
}

export const KeywordDisplayItem = ({ name, decimal }: KeywordDisplayItemProps) => {
  return (
    <div className="KeywordDisplayDiv">
      <p>{name}</p>
      {decimal ? (
        <p className="KeywordPercentage">
          {makePercentage(decimal)}
        </p>
      ) : null}
    </div>
  )
}

const makePercentage = (decimalValue: number) => {
  const percent = decimalValue * 100
  if (percent < 0.2) {
    return percent.toFixed(2) + '%'
  } else {
    return percent.toFixed(1) + '%'
  }
}
