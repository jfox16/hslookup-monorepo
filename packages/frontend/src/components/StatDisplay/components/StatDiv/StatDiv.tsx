import { useState } from 'react'

import { MdExpandLess } from 'react-icons/md'
import { FiMoreHorizontal } from 'react-icons/fi'

import IconButton from 'components/IconButton';
import { useLookupContext } from 'context/LookupContext/LookupContext';
import { DisplayStat, StatTotal } from 'types/statDisplayTypes';
import StatSummary from './StatSummary/StatSummary';
import { StatHistogram } from './StatHistogram/StatHistogram';

export interface StatDivProps {
  stat: DisplayStat;
  totals: StatTotal;
  filterFormOpen?: boolean;
}

export const StatDiv = ({ stat, totals, filterFormOpen }: StatDivProps) => {
  const { isLoading, isMobile } = useLookupContext();
  const [showMore, setShowMore] = useState(false)

  const showMoreButton = (
    <div style={{ textAlign: 'center' }}>
      <IconButton
        onClick={() => setShowMore(!showMore)}
        style={{ fontSize: 24 }}
      >
        {showMore ? <MdExpandLess /> : <FiMoreHorizontal />}
      </IconButton>
    </div>
  )

  if (isMobile && !showMore) {
    return (
      <div className="StatDisplayDataGridDiv">
        <div className="StatDisplayDataGroup">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around'
            }}
          >
            <div className="StatDisplayDataGroupHeader">
              <img
                className="StatDisplayDataGroupIcon"
                src={stat.image}
                alt={stat.name}
              />
              <p className="StatDisplayDataGroupTitle">{stat.name}</p>
            </div>
            <div className="StatSummaryDiv" style={{ flex: 0 }}>
              <StatSummary
                mean={totals.mean}
                median={totals.median}
                stdev={totals.stdev}
              />
            </div>
          </div>
          {showMoreButton}
        </div>
      </div>
    )
  }

  return (
    <div className="StatDisplayDataGridDiv" key={stat.name + 'summary'}>
      <div
        className="StatDisplayDataGroup"
        style={{ zIndex: filterFormOpen ? -10 : 0 }}
      >
        <div className="StatDisplayDataGroupHeader">
          <img
            className="StatDisplayDataGroupIcon"
            src={stat.image}
            alt={stat.name}
          />
          <p className="StatDisplayDataGroupTitle">{stat.name}</p>
        </div>
        <div className="StatDisplayDataGroupData">
          <StatHistogram
            color={stat.color}
            data={totals.frequencies}
            minX={totals.min}
            maxX={totals.max}
            isLoading={isLoading}
          />
          <div
            className="StatSummaryDiv"
            style={{ marginTop: -12, marginBottom: 4 }}
          >
            <StatSummary
              mean={totals.mean}
              median={totals.median}
              stdev={totals.stdev}
            />
          </div>
        </div>
        {isMobile && showMoreButton}
      </div>
    </div>
  )
}
