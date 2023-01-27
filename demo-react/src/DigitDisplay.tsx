import * as React from 'react'

export type DigitDisplayProps = {
  val: number
  color: string
}
export const DigitDisplay: React.FC<DigitDisplayProps> = ({ val, color }) => (
  <span className={`text-${color}-500`}>{`${val}`.padStart(2, '0')}</span>
)
