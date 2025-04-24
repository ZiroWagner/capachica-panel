"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Semana 1", hospedaje: 1200, tours: 400, talleres: 240 },
  { name: "Semana 2", hospedaje: 1500, tours: 600, talleres: 320 },
  { name: "Semana 3", hospedaje: 1000, tours: 500, talleres: 190 },
  { name: "Semana 4", hospedaje: 1150, tours: 420, talleres: 250 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip formatter={(value) => `S/ ${value}`} />
        <Legend />
        <Bar dataKey="hospedaje" stackId="a" fill="#10b981" />
        <Bar dataKey="tours" stackId="a" fill="#3b82f6" />
        <Bar dataKey="talleres" stackId="a" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  )
}
