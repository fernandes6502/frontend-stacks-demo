import * as React from 'react'
import { Clock } from './Clock'

export type ClockConfig = { title: string, offset: number }
export type AppProps = {
  clockConfigs: ClockConfig[]
}
export const App: React.FC<AppProps> = ({ clockConfigs }) => (
  <div className="container mx-auto mt-4 p-4">
    <h1 className="text-2xl">React World Clock</h1>

    <div className="mt-4 grid gap-4 grid-cols-2">
      {clockConfigs.map(({ title, offset }) => (
        <Clock key={title} title={title} timeOffset={offset} />
      ))}
    </div>
  </div>
)