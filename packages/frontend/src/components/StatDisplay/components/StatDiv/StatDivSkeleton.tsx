import Skeleton from "react-loading-skeleton"

import { useLookupContext } from "context/LookupContext/LookupContext"

export const StatDivSkeleton = () => {
  const { isMobile } = useLookupContext();

  return (
    <div className="StatDisplayDataGridDiv">
      <Skeleton height={isMobile ? 125 : 265} />
    </div>
  )
}
