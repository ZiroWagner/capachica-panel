"use client"

import { Separator } from "@/components/ui/separator"

import { useState } from "react"
import PanelLayout from "../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Check, ChevronDown, Clock, Download, Filter, Search, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Reservation = {
  id: number;
  guest: { name: string; initials: string };
  service: string;
  type: string;
  date: string;
  endDate: string | null;
  status: string;
  people: number;
  total: number;
};

// Función para obtener el color de la insignia según el estado
type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export default function ReservasPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null)
  const [showFilters, setShowFilters] = useState<boolean>(false)

  // Datos de ejemplo para las reservas
  const reservations: Reservation[] = [
    {
      id: 1,
      guest: { name: "María Rodríguez", initials: "MR" },
      service: "Habitación Doble con Vista al Lago",
      type: "Hospedaje",
      date: "20/04/2025",
      endDate: "22/04/2025",
      status: "pending",
      people: 2,
      total: 300,
    },
    {
      id: 2,
      guest: { name: "Carlos Mendoza", initials: "CM" },
      service: "Tour por las Islas del Titicaca",
      type: "Tour",
      date: "22/04/2025",
      endDate: null,
      status: "confirmed",
      people: 4,
      total: 480,
    },
    {
      id: 3,
      guest: { name: "Ana Garrido", initials: "AG" },
      service: "Taller de Textiles Andinos",
      type: "Taller",
      date: "25/04/2025",
      endDate: null,
      status: "pending",
      people: 2,
      total: 100,
    },
    {
      id: 4,
      guest: { name: "Jorge Pérez", initials: "JP" },
      service: "Habitación Familiar",
      type: "Hospedaje",
      date: "01/05/2025",
      endDate: "05/05/2025",
      status: "confirmed",
      people: 3,
      total: 600,
    },
    {
      id: 5,
      guest: { name: "Lucía Martínez", initials: "LM" },
      service: "Tour por las Islas del Titicaca",
      type: "Tour",
      date: "03/05/2025",
      endDate: null,
      status: "cancelled",
      people: 2,
      total: 240,
    },
    {
      id: 6,
      guest: { name: "Roberto Sánchez", initials: "RS" },
      service: "Cabaña familiar con fogata",
      type: "Hospedaje",
      date: "10/05/2025",
      endDate: "12/05/2025",
      status: "confirmed",
      people: 4,
      total: 450,
    },
  ]

  const getBadgeVariant = (status: string): { variant: BadgeVariant; className?: string } => {
    switch (status) {
      case "confirmed":
        return { variant: "outline", className: "border-green-500 text-green-500" };
      case "pending":
        return { variant: "outline", className: "border-amber-500 text-amber-500" };
      case "cancelled":
        return { variant: "outline", className: "border-destructive text-destructive" };
      default:
        return { variant: "outline" };
    }
  }

  // Función para obtener el texto del estado
  const getStatusText = (status: string) => {
    switch (status) {
      case "confirmed":
        return "Confirmado"
      case "pending":
        return "Pendiente"
      case "cancelled":
        return "Cancelado"
      default:
        return status
    }
  }

  // Abrir diálogo de detalles de reserva
  const openReservationDetails = (reservation: Reservation) => {
    setSelectedReservation(reservation)
  }

  return (
    <PanelLayout activeItem="reservas">
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Reservas</h1>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar reservas..."
                className="pl-8 w-full sm:w-[250px]"
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem>Exportar a Excel</DropdownMenuItem>
                  <DropdownMenuItem>Exportar a PDF</DropdownMenuItem>
                  <DropdownMenuItem>Imprimir</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Filtros */}
        {showFilters && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date-range">Rango de fechas</Label>
                  <div className="flex items-center gap-2">
                    <Input id="date-from" type="date" className="w-full" />
                    <span>a</span>
                    <Input id="date-to" type="date" className="w-full" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Estado</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los estados" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="confirmed">Confirmados</SelectItem>
                      <SelectItem value="pending">Pendientes</SelectItem>
                      <SelectItem value="cancelled">Cancelados</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Tipo de servicio</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los tipos" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los tipos</SelectItem>
                      <SelectItem value="hospedaje">Hospedaje</SelectItem>
                      <SelectItem value="tour">Tour</SelectItem>
                      <SelectItem value="taller">Taller</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button variant="outline" className="mr-2">
                  Limpiar
                </Button>
                <Button>Aplicar Filtros</Button>
              </div>
            </CardContent>
          </Card>
        )}

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="pending">Pendientes</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmadas</TabsTrigger>
            <TabsTrigger value="cancelled">Canceladas</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <ReservationsTable
              reservations={reservations}
              getBadgeVariant={getBadgeVariant}
              getStatusText={getStatusText}
              openReservationDetails={openReservationDetails}
            />
          </TabsContent>

          <TabsContent value="pending">
            <ReservationsTable
              reservations={reservations.filter((r) => r.status === "pending")}
              getBadgeVariant={getBadgeVariant}
              getStatusText={getStatusText}
              openReservationDetails={openReservationDetails}
            />
          </TabsContent>

          <TabsContent value="confirmed">
            <ReservationsTable
              reservations={reservations.filter((r) => r.status === "confirmed")}
              getBadgeVariant={getBadgeVariant}
              getStatusText={getStatusText}
              openReservationDetails={openReservationDetails}
            />
          </TabsContent>

          <TabsContent value="cancelled">
            <ReservationsTable
              reservations={reservations.filter((r) => r.status === "cancelled")}
              getBadgeVariant={getBadgeVariant}
              getStatusText={getStatusText}
              openReservationDetails={openReservationDetails}
            />
          </TabsContent>
        </Tabs>

        {/* Diálogo de detalles de reserva */}
        {selectedReservation && (
          <Dialog open={!!selectedReservation} onOpenChange={() => setSelectedReservation(null)}>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Detalles de la Reserva</DialogTitle>
                <DialogDescription>Información completa de la reserva #{selectedReservation.id}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{selectedReservation.guest.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{selectedReservation.guest.name}</h3>
                    <p className="text-sm text-muted-foreground">Cliente</p>
                  </div>
                  <Badge
                    className={`ml-auto ${getBadgeVariant(selectedReservation.status).className}`}
                    variant={getBadgeVariant(selectedReservation.status).variant}
                  >
                    {getStatusText(selectedReservation.status)}
                  </Badge>
                </div>

                <Separator />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Servicio</p>
                    <p className="font-medium">{selectedReservation.service}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Tipo</p>
                    <p className="font-medium">{selectedReservation.type}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fecha</p>
                    <p className="font-medium flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {selectedReservation.date}
                      {selectedReservation.endDate && ` - ${selectedReservation.endDate}`}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Personas</p>
                    <p className="font-medium">{selectedReservation.people}</p>
                  </div>
                </div>

                <Separator />

                <div>
                  <p className="text-sm text-muted-foreground">Total</p>
                  <p className="text-xl font-bold">S/ {selectedReservation.total.toFixed(2)}</p>
                </div>
              </div>
              <DialogFooter className="flex justify-between">
                {selectedReservation.status === "pending" && (
                  <>
                    <Button variant="outline" className="border-destructive text-destructive hover:bg-destructive/10">
                      <X className="h-4 w-4 mr-2" />
                      Rechazar
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-2" />
                      Confirmar
                    </Button>
                  </>
                )}
                {selectedReservation.status === "confirmed" && (
                  <Button className="w-full">Ver Detalles Completos</Button>
                )}
                {selectedReservation.status === "cancelled" && (
                  <Button variant="outline" className="w-full">
                    Restaurar Reserva
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}

        {/* Resumen de reservas */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reservas Pendientes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservations.filter((r) => r.status === "pending").length}</div>
              <p className="text-xs text-amber-600 dark:text-amber-400">Requieren confirmación</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Reservas Confirmadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{reservations.filter((r) => r.status === "confirmed").length}</div>
              <p className="text-xs text-green-600 dark:text-green-400">Para los próximos 30 días</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Ingresos Estimados</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                S/{" "}
                {reservations
                  .filter((r) => r.status !== "cancelled")
                  .reduce((sum, r) => sum + r.total, 0)
                  .toFixed(2)}
              </div>
              <p className="text-xs text-green-600 dark:text-green-400">+15% vs mes anterior</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </PanelLayout>
  )
}

interface ReservationsTableProps {
  reservations: Reservation[];
  getBadgeVariant: (status: string) => { variant: BadgeVariant; className?: string };
  getStatusText: (status: string) => string;
  openReservationDetails: (reservation: Reservation) => void;
}

function ReservationsTable({ reservations, getBadgeVariant, getStatusText, openReservationDetails }: ReservationsTableProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>VISITANTE</TableHead>
                <TableHead>SERVICIO</TableHead>
                <TableHead>FECHA</TableHead>
                <TableHead>PERSONAS</TableHead>
                <TableHead>TOTAL</TableHead>
                <TableHead>ESTADO</TableHead>
                <TableHead>ACCIONES</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reservations.map((reservation: Reservation) => (
                <TableRow
                  key={reservation.id}
                  onClick={() => openReservationDetails(reservation)}
                  className="cursor-pointer"
                >
                  <TableCell className="font-medium">#{reservation.id}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>{reservation.guest.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{reservation.guest.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{reservation.service}</div>
                      <div className="text-xs text-muted-foreground">{reservation.type}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{reservation.date}</span>
                    </div>
                    {reservation.endDate && (
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Hasta {reservation.endDate}</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>{reservation.people}</TableCell>
                  <TableCell>S/ {reservation.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge
                      variant={getBadgeVariant(reservation.status).variant}
                      className={getBadgeVariant(reservation.status).className}
                    >
                      {getStatusText(reservation.status)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {reservation.status === "pending" ? (
                        <>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border-green-500 text-green-500 hover:bg-green-500/10"
                          >
                            Aprobar
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 border-destructive text-destructive hover:bg-destructive/10"
                          >
                            Rechazar
                          </Button>
                        </>
                      ) : (
                        <Button size="sm" variant="outline" className="h-8">
                          Ver detalles
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
              {reservations.length === 0 && (
                <TableRow>
                  <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                    No hay reservas que mostrar
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
