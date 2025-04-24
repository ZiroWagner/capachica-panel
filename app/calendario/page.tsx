"use client"

import { useState } from "react"
import PanelLayout from "../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ChevronLeft, ChevronRight, Plus } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CalendarioPage() {
  const [currentMonth, setCurrentMonth] = useState("Abril 2025")
  const [selectedDate, setSelectedDate] = useState<number | null>(null)

  // Datos de ejemplo para el calendario
  const events = [
    { date: 5, type: "reserva", title: "Reserva: María Rodríguez", status: "confirmed" },
    { date: 8, type: "reserva", title: "Reserva: Carlos Mendoza", status: "pending" },
    { date: 11, type: "tour", title: "Tour por las islas", status: "confirmed" },
    { date: 15, type: "mantenimiento", title: "Mantenimiento", status: "confirmed" },
    { date: 18, type: "reserva", title: "Reserva: Ana Garrido", status: "confirmed" },
    { date: 22, type: "tour", title: "Tour por las islas", status: "confirmed" },
    { date: 25, type: "taller", title: "Taller de textiles", status: "confirmed" },
  ]

  // Función para obtener eventos por fecha
  const getEventsForDate = (day: number) => {
    return events.filter((event) => event.date === day)
  }

  // Función para obtener el color de la insignia según el tipo de evento
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "reserva":
        return "default"
      case "tour":
        return "secondary"
      case "taller":
        return "outline"
      case "mantenimiento":
        return "destructive"
      default:
        return "default"
    }
  }

  // Generar días del mes (simplificado)
  const daysInMonth = 30
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  // Cambiar al mes anterior
  const prevMonth = () => {
    setCurrentMonth("Marzo 2025")
  }

  // Cambiar al mes siguiente
  const nextMonth = () => {
    setCurrentMonth("Mayo 2025")
  }

  return (
    <PanelLayout activeItem="calendario">
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Calendario</h1>
          <div className="flex items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  <span>Nuevo Evento</span>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Crear Nuevo Evento</DialogTitle>
                  <DialogDescription>Añade un nuevo evento a tu calendario.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Título</Label>
                    <Input id="title" placeholder="Título del evento" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Fecha</Label>
                      <Input id="date" type="date" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="type">Tipo</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="reserva">Reserva</SelectItem>
                          <SelectItem value="tour">Tour</SelectItem>
                          <SelectItem value="taller">Taller</SelectItem>
                          <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Descripción</Label>
                    <Textarea id="description" placeholder="Detalles del evento" />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Guardar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                <span>{currentMonth}</span>
              </div>
            </CardTitle>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={prevMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {/* Días de la semana */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendario */}
            <div className="grid grid-cols-7 gap-1">
              {/* Espacios vacíos para alinear el primer día (ejemplo: si el 1 cae en miércoles) */}
              {Array.from({ length: 2 }, (_, i) => (
                <div key={`empty-${i}`} className="aspect-square p-1"></div>
              ))}

              {/* Días del mes */}
              {days.map((day: number) => {
                const dayEvents = getEventsForDate(day)
                const hasEvents = dayEvents.length > 0

                return (
                  <div
                    key={day}
                    className={`aspect-square p-1 relative ${hasEvents ? "cursor-pointer" : ""}`}
                    onClick={() => hasEvents && setSelectedDate(day)}
                  >
                    <div
                      className={`
                      h-full w-full rounded-md flex flex-col items-center justify-start p-1
                      ${hasEvents ? "bg-muted/50 hover:bg-muted" : ""}
                      ${day === 11 ? "ring-2 ring-primary" : ""}
                    `}
                    >
                      <span
                        className={`
                        text-sm font-medium
                        ${day === 11 ? "text-primary" : ""}
                      `}
                      >
                        {day}
                      </span>

                      {/* Indicadores de eventos */}
                      {hasEvents && (
                        <div className="mt-1 flex flex-wrap gap-1 justify-center">
                          {dayEvents.slice(0, 2).map((event, idx) => (
                            <div
                              key={idx}
                              className={`w-2 h-2 rounded-full bg-${
                                event.type === "reserva"
                                  ? "primary"
                                  : event.type === "tour"
                                    ? "secondary"
                                    : event.type === "taller"
                                      ? "accent"
                                      : "destructive"
                              }`}
                            />
                          ))}
                          {dayEvents.length > 2 && (
                            <span className="text-[10px] text-muted-foreground">+{dayEvents.length - 2}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Eventos del día seleccionado */}
            {selectedDate && (
              <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Eventos para el {selectedDate} de Abril</h3>
                <div className="space-y-2">
                  {getEventsForDate(selectedDate).map((event, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 rounded-md bg-muted/50">
                      <div className="flex items-center gap-2">
                        <Badge variant={getBadgeVariant(event.type)}>{event.type}</Badge>
                        <span>{event.title}</span>
                      </div>
                      <Badge variant={event.status === "confirmed" ? "default" : "outline"}>
                        {event.status === "confirmed" ? "Confirmado" : "Pendiente"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Próximos eventos */}
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4">Próximos Eventos</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {events
              .filter((_, idx) => idx < 3)
              .map((event, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="bg-primary/10 text-primary rounded-md p-2 flex items-center justify-center">
                          <CalendarIcon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-sm text-muted-foreground">{event.date} de Abril, 2025</p>
                        </div>
                      </div>
                      <Badge variant={getBadgeVariant(event.type)}>{event.type}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </PanelLayout>
  )
}
