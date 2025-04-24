"use client"

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts"

const data = [
  { name: "01/04", visitas: 120, nuevos: 80, recurrentes: 40 },
  { name: "02/04", visitas: 132, nuevos: 89, recurrentes: 43 },
  { name: "03/04", visitas: 101, nuevos: 65, recurrentes: 36 },
  { name: "04/04", visitas: 134, nuevos: 90, recurrentes: 44 },
  { name: "05/04", visitas: 190, nuevos: 120, recurrentes: 70 },
  { name: "06/04", visitas: 230, nuevos: 140, recurrentes: 90 },
  { name: "07/04", visitas: 220, nuevos: 135, recurrentes: 85 },
  { name: "08/04", visitas: 145, nuevos: 95, recurrentes: 50 },
  { name: "09/04", visitas: 180, nuevos: 110, recurrentes: 70 },
  { name: "10/04", visitas: 165, nuevos: 100, recurrentes: 65 },
  { name: "11/04", visitas: 172, nuevos: 105, recurrentes: 67 },
  { name: "12/04", visitas: 195, nuevos: 120, recurrentes: 75 },
  { name: "13/04", visitas: 205, nuevos: 130, recurrentes: 75 },
  { name: "14/04", visitas: 198, nuevos: 125, recurrentes: 73 },
  { name: "15/04", visitas: 150, nuevos: 90, recurrentes: 60 },
]

interface VisitorsChartProps {
  detailed?: boolean
}

export function VisitorsChart({ detailed = false }: VisitorsChartProps) {
  if (detailed) {
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="visitas" stroke="#10b981" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="nuevos" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="recurrentes" stroke="#8b5cf6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    )
  }

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
        <Area type="monotone" dataKey="visitas" stroke="#10b981" fill="#10b98133" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
