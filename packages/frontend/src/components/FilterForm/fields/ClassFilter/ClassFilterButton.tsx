
import { HsClass } from 'types/metadataTypes'

interface ClassFilterButtonProps {
  hsClass: HsClass,
  imageSrc?: string,
  borderColor?: string,
  selected?: boolean,
  darkened?: boolean,
  onClick: () => void;
}

function ClassFilterButton({
  hsClass,
  imageSrc,
  borderColor,
  selected,
  darkened,
  onClick
}: ClassFilterButtonProps) {
  return (
    <div
      style={{ opacity: darkened ? 0.4 : 1 }}
    >
      <div
        className="ClassFilterButton selectable"
        onClick={onClick}
      >
        <img
          className="ClassFilterButtonIcon"
          alt={hsClass.name}
          src={imageSrc}
          style={{
            border: `3px solid ${borderColor}`,
            boxShadow: selected ? '0 0 3px 2px white' : 'none'
          }}
        />
        <div className="ClassFilterButtonLabel">{hsClass.name}</div>
      </div>
    </div>
  )
}

export default ClassFilterButton
