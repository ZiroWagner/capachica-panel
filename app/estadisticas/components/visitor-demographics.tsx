"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "18-24", hombres: 15, mujeres: 18 },
  { name: "25-34", hombres: 25, mujeres: 28 },
  { name: "35-44", hombres: 20, mujeres: 22 },
  { name: "45-54", hombres: 15, mujeres: 16 },
  { name: "55+", hombres: 10, mujeres: 12 },
]

export function VisitorDemographics() {
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
        <Tooltip formatter={(value) => `${value}%`} />
        <Legend />
        <Bar dataKey="hombres" fill="#3b82f6" />
        <Bar dataKey="mujeres" fill="#8b5cf6" />
      </BarChart>
    </ResponsiveContainer>
  )
}
