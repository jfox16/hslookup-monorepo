import IconButton from 'components/IconButton';
import { FiMoreHorizontal } from 'react-icons/fi';
import { MdExpandLess } from 'react-icons/md';

import { PercentageDisplayItem, PercentageDisplayItemProps } from './PercentageDisplayItem';

import './PercentageDisplay.css';

interface PercentageDisplayProps {
  displayItems: PercentageDisplayItemProps[];
  hasHiddenItems?: boolean;
  showMore?: boolean;
  setShowMore?: (showMore: boolean) => void;
  title?: string;
}

export const PercentageDisplay = ({
  displayItems,
  hasHiddenItems,
  showMore,
  setShowMore,
  title,
}: PercentageDisplayProps) => {

  return displayItems.length > 0 ? (
    <div style={{ textAlign: 'center' }}>
      <div className="PercentageDisplay">
        {title && <h3 className="title">{title}</h3>}

        <div className="Percentages">
          {displayItems.map((props) => {
            const { name, id } = props;
            return (
              <PercentageDisplayItem
                {...props}
                key={id ?? name}
              />
            )
          })}
        </div>

        {hasHiddenItems && <div style={{ textAlign: 'center' }}>
          <IconButton
            onClick={() => setShowMore?.(!showMore)}
            style={{ fontSize: 24 }}
          >
            {showMore ? <MdExpandLess /> : <FiMoreHorizontal />}
          </IconButton>
        </div>}

      </div>
    </div>
  ) : <></>;
}
