import * as React from 'react'
import { DigitDisplay } from './DigitDisplay'

export type ClockProps = {
  title: string
  timeOffset: number
}
export const Clock: React.FC<ClockProps> = ({ title, timeOffset }) => {
  const [hour, setHour] = React.useState(0)
  const [minute, setMinute] = React.useState(0)
  const [second, setSecond] = React.useState(0)

  const getDate = React.useCallback(() => {
    const d = new Date()
    d.setTime(d.getTime() + (timeOffset * 60 * 60 * 1000))
    return d
  }, [timeOffset])

  const updateTime = React.useCallback(() => {
    const date = getDate()
    setHour(date.getHours())
    setMinute(date.getMinutes())
    setSecond(date.getSeconds())

    setTimeout(updateTime, 1000)
  }, [getDate])

  React.useEffect(() => {
    updateTime()
  }, [updateTime])

  return (
    <div id="clock1" className="bg-white shadow-sm rounded p-2">
      <div className="text-lg pb-2 font-semibold">{title}</div>
      <div className="text-6xl text-bold font-mono text-center py-6">
        <DigitDisplay color='black' val={hour} />:
        <DigitDisplay color='red' val={minute} />:
        <DigitDisplay color='yellow' val={second} />
      </div>
    </div>
  )
}