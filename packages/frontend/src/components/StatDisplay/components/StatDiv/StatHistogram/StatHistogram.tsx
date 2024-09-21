import { useElementWidth } from 'hooks/useElementWidth';
import { useMemo, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

interface StatHistogramProps {
  color: string;
  data: Record<number, number>;
  isLoading?: boolean;
  maxX: number;
  minX: number;
}

export const StatHistogram = ({ data, color, isLoading, maxX, minX }: StatHistogramProps) => {

  const containerRef = useRef(null);
  const containerWidth = useElementWidth(containerRef);

  const chartData = useMemo(() => {
    if (Object.values(data).length === 0) {
      return [];
    }

    let chartMaxX = maxX;
    let chartMinX = minX;

    // If there are less than 5 values, pad some values to the beginning and end to make it look better.
    let flip = false;
    while (chartMaxX - chartMinX < 4) {
      if (flip && chartMinX > 0) {
        chartMinX--;
      }
      else {
        chartMaxX++;
      }
      flip = !flip;
    }

    const result = [];

    for (let i = chartMinX; i <= chartMaxX; i++) {
      result.push({
        name: i,
        count: data[i] ?? 0,
      })
    }

    return result;
  }, [
    data,
    minX,
    maxX
  ]);

  if (isLoading) {
    return <Skeleton height={160} />
  }

  return (
    <div ref={containerRef} style={{width: '100%'}}>
      <BarChart
        width={containerWidth}
        height={160}
        data={chartData}
        margin={{ top: 15, left: -24, right: 10, bottom: 10 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis dataKey="count" />
        {/* <Tooltip /> */}
        <Bar dataKey="count" fill={color} />
      </BarChart>
    </div>
  )
}
