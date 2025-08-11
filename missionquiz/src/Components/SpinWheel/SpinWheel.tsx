import React, { useRef, useState } from 'react'

type SpinWheelProps = {
  options: string[]
  size?: number
}

const SpinWheel: React.FC<SpinWheelProps> = ({ options, size = 520 }) => {
  const [spinning, setSpinning] = useState(false)
  const wheelRef = useRef<SVGSVGElement>(null)
  const currentRotation = useRef(0)

  const radius = size / 2
  const segmentAngle = 360 / options.length

  // Helper to get coordinates for arc
  const getCoordinatesForAngle = (angle: number) => {
    const rad = ((angle - 90) * Math.PI) / 180.0
    return {
      x: radius + radius * Math.cos(rad),
      y: radius + radius * Math.sin(rad),
    }
  }

  // Spin logic
  const spin = () => {
    if (spinning) return
    setSpinning(true)
    const randomIndex = Math.floor(Math.random() * options.length)

    // The angle to land the selected option at the top (arrow)
    const targetAngle = 360 - (segmentAngle * randomIndex + segmentAngle / 2)
    const spins = 5
    const finalRotation =
      currentRotation.current +
      spins * 360 +
      targetAngle -
      (currentRotation.current % 360)
    currentRotation.current = finalRotation
    if (wheelRef.current) {
      wheelRef.current.style.transition =
        'transform 4s cubic-bezier(.17,.67,.83,.67)'
      wheelRef.current.style.transform = `rotate(${finalRotation}deg)`
    }
    setTimeout(() => {
      setSpinning(false)
      // Reset rotation to avoid overflow
      if (wheelRef.current) {
        wheelRef.current.style.transition = 'none'
        wheelRef.current.style.transform = `rotate(${targetAngle}deg)`
      }
      currentRotation.current = targetAngle
    }, 4000)
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '10px',
        }}
      >
        {/* Arrow Indicator */}
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: '30px solid transparent',
            borderRight: '30px solid transparent',
            borderTop: '60px solid #fc0456ff',
            marginBottom: -10,
            zIndex: 2,
            position: 'relative',
          }}
        />
        <div
          style={{
            position: 'relative',
            width: size,
            height: size,
            marginBottom: 20,
          }}
        >
          <svg
            ref={wheelRef}
            width={size}
            height={size}
            style={{
              display: 'block',
              borderRadius: '50%',
              border: '8px solid #22c1c3',
              background: '#fff',
              boxSizing: 'border-box',
              transition: 'transform 4s cubic-bezier(.17,.67,.83,.67)',
            }}
          >
            {options.map((option, i) => {
              const startAngle = i * segmentAngle
              const endAngle = (i + 1) * segmentAngle
              const largeArcFlag = segmentAngle > 180 ? 1 : 0

              const start = getCoordinatesForAngle(startAngle)
              const end = getCoordinatesForAngle(endAngle)

              // SVG arc path for the slice
              const pathData = [
                `M ${radius} ${radius}`,
                `L ${start.x} ${start.y}`,
                `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y}`,
                'Z',
              ].join(' ')

              // For text: angle in the middle of the slice
              const textAngle = startAngle + segmentAngle / 2
              const textRad = ((textAngle - 90) * Math.PI) / 180.0
              const textRadius = radius * 0.65
              const textX = radius + textRadius * Math.cos(textRad)
              const textY = radius + textRadius * Math.sin(textRad)

              return (
                <g key={option}>
                  <path
                    d={pathData}
                    fill={i % 2 === 0 ? '#fdbb2d' : '#ec0a0aff'}
                    stroke="#fff"
                    strokeWidth={2}
                  />
                  <text
                    x={textX}
                    y={textY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={size / 18}
                    fontWeight="bold"
                    fill="#222"
                    transform={`rotate(${textAngle}, ${textX}, ${textY})`}
                    style={{
                      userSelect: 'none',
                    }}
                  >
                    {option}
                  </text>
                </g>
              )
            })}
          </svg>
          {/* Optional: add a small circle at the center */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              width: size * 0.12,
              height: size * 0.12,
              background: '#0b0560ff',
              border: '4px solid #22c1c3',
              borderRadius: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1,
            }}
          />
          <button
            onClick={spin}
            disabled={spinning}
            style={{
              position: 'absolute',
              transform: 'translate(300px, -260px)',
              fontSize: 25,
              fontWeight: 'bold',
              padding: '0.5em 2em',
              background: '#22c1c3',
              color: '#fc0456ff',
              border: 'none',
              borderRadius: 5,
              cursor: spinning ? 'not-allowed' : 'pointer',
            }}
          >
            {spinning ? 'Spinning...' : 'Spin'}
          </button>
        </div>
      </div>
    </>
  )
}

export default SpinWheel
