"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Ene", rating: 4.5 },
  { name: "Feb", rating: 4.6 },
  { name: "Mar", rating: 4.7 },
  { name: "Abr", rating: 4.8 },
  { name: "May", rating: 4.7 },
  { name: "Jun", rating: 4.8 },
  { name: "Jul", rating: 4.9 },
  { name: "Ago", rating: 4.9 },
  { name: "Sep", rating: 4.8 },
  { name: "Oct", rating: 4.8 },
  { name: "Nov", rating: 4.9 },
  { name: "Dic", rating: 4.9 },
]

export function RatingDistributionChart() {
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
        <YAxis domain={[3, 5]} />
        <Tooltip formatter={(value) => `${value} ★`} />
        <Legend />
        <Line type="monotone" dataKey="rating" stroke="#f59e0b" strokeWidth={2} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  )
}
