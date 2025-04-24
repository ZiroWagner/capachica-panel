"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "01/04", tasa: 3.2 },
  { name: "02/04", tasa: 3.5 },
  { name: "03/04", tasa: 2.8 },
  { name: "04/04", tasa: 3.1 },
  { name: "05/04", tasa: 4.2 },
  { name: "06/04", tasa: 4.5 },
  { name: "07/04", tasa: 4.3 },
  { name: "08/04", tasa: 3.8 },
  { name: "09/04", tasa: 4.0 },
  { name: "10/04", tasa: 3.9 },
  { name: "11/04", tasa: 4.1 },
  { name: "12/04", tasa: 4.4 },
  { name: "13/04", tasa: 4.6 },
  { name: "14/04", tasa: 4.5 },
  { name: "15/04", tasa: 4.2 },
]

export function ConversionRateChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 6]} tickFormatter={(value) => `${value}%`} />
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Line type="monotone" dataKey="tasa" stroke="#f59e0b" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
