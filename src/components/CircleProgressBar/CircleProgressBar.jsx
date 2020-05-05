import React from 'react';

const INITIAL_OFFSET = 50;
const circleConfig = {
  viewBox: '0 0 100 100',
  x: '50',
  y: '50',
  radio: '40'
};

const CircleProgressBarBase = ({
  className,
  trailStrokeColor,
  strokeColor,
  percentage,
  innerText
  }) => {
    return (
        <figure style={{margin:'0'}} className={className}>
            <svg viewBox={circleConfig.viewBox}>
                <circle
                className="ring"
                cx={circleConfig.x}
                cy={circleConfig.y}
                r={circleConfig.radio}
                fill="transparent"
                stroke={trailStrokeColor}
                strokeWidth="7"
                />
                
                <defs>
                    <linearGradient id="linear" x1="269.22" y1="0%">
                        <stop offset="-3.37%"   stopColor="#37A0F6"/>
                        <stop offset="99.26%" stopColor="#387EE9"/>
                    </linearGradient>
                </defs>

                <circle
                className="path"
                cx={circleConfig.x}
                cy={circleConfig.y}
                r={circleConfig.radio}
                fill="transparent"
                stroke="url(#linear)"
                strokeDasharray="282"
                strokeDashoffset={INITIAL_OFFSET}
                strokeWidth="7"
                />
                <g className="circle-label">
                <text x="50%" y="50%" className="circle-percentage" textAnchor="middle">
                    {percentage}%
                    <span> Semister 2 </span>
                </text>
                {/* <text x="50%" y="50%" className="circle-text">
                    {innerText}
                </text> */}
                </g>
            </svg>
        </figure>
    );
};

export default CircleProgressBarBase;