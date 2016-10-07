import React from 'react'
import cx from 'classnames'
import {repeat} from '../helpers'
import './WaveLoader.css'

const WaveLoader = ({size, className, count, stroke, strokeWidth, ...rest}) => {
  const radius = size / 2 - strokeWidth

  return (
    <svg
      {...rest}
      className={cx('WaveLoader', className)}
      width={size}
      height={size}
    >
      {repeat(count).map((_, i) => {
        const style = {
          animationDelay: `${0.4 * i}s`
        }

        return (
          <circle
            className="WaveLoader-child"
            key={`c-${i}`}
            style={style}
            stroke={stroke}
            strokeWidth={strokeWidth}
            fill="none"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        )
      })}
    </svg>
  )
}

WaveLoader.defaultProps = {
  size: 40,
  count: 3,
  strokeWidth: 2,
}

export default WaveLoader