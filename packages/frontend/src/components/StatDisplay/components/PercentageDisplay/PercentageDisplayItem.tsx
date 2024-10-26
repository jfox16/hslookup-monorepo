import cns from 'classnames';

export interface PercentageDisplayItemProps {
  className?: string;
  decimal: number;
  id?: string | number;
  name: string;
  onClick?: () => void;
  selected?: boolean;
}

export const PercentageDisplayItem = ({
  className,
  decimal,
  name,
  onClick,
  selected,
}: PercentageDisplayItemProps) => {

  return (
    <div
      className={cns('PercentageDisplayDiv', className, {
        selectable: !!onClick,
        selected
      })}
      onClick={onClick}
    >
      <p className="name">{name}</p>
      {decimal ? (
        <p className="Percentage">
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
