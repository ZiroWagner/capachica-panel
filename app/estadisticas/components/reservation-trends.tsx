"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Semana 1", reservas: 18, cancelaciones: 2 },
  { name: "Semana 2", reservas: 22, cancelaciones: 3 },
  { name: "Semana 3", reservas: 25, cancelaciones: 1 },
  { name: "Semana 4", reservas: 20, cancelaciones: 2 },
]

export function ReservationTrends() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="reservas" stackId="1" stroke="#10b981" fill="#10b98133" />
        <Area type="monotone" dataKey="cancelaciones" stackId="2" stroke="#ef4444" fill="#ef444433" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
