"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Edit, ImageIcon, Star, Tag, Users } from "lucide-react"
import Image from "next/image"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      {/* Welcome Banner */}
      <div className="mb-6 rounded-lg bg-primary/10 p-4 sm:p-6">
        <h1 className="mb-2 text-2xl font-bold text-primary">¡Bienvenido Juan! ¿Qué te gustaría hacer hoy?</h1>
        <p className="text-muted-foreground">
          Mantén actualizada la información de tu emprendimiento turístico para atraer más visitantes a Capacñica.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="secondary" className="gap-2">
            <ImageIcon className="h-4 w-4" />
            Subir Fotos
          </Button>
          <Button variant="outline" className="gap-2">
            <Calendar className="h-4 w-4" />
            Actualizar Disponibilidad
          </Button>
          <Button variant="outline" className="gap-2">
            <Edit className="h-4 w-4" />
            Editar Descripción
          </Button>
          <Button variant="outline" className="gap-2">
            <Tag className="h-4 w-4" />
            Actualizar Precios
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Visitas (30 días)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">238</div>
            <p className="text-xs text-green-600 dark:text-green-400">+12% vs mes anterior</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Reservas Confirmadas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-green-600 dark:text-green-400">+2 nuevas esta semana</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Consultas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-amber-600 dark:text-amber-400">+5 sin responder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Valoración Media</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.8</div>
            <div className="flex text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current stroke-yellow-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content and Stats */}
      <div className="mb-6 grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Mi Contenido Publicado</CardTitle>
            <Button variant="link" size="sm" className="text-sm text-muted-foreground">
              Ver todo
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {/* Content Item 1 */}
              <div className="overflow-hidden rounded-md border bg-background">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=120&width=240"
                    alt="Hospedaje frente al lago"
                    width={240}
                    height={120}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">Hospedaje frente al lago Titicaca</h3>
                  <p className="text-xs text-muted-foreground">
                    Habitación doble con vistas panorámicas al lago y desayuno tradicional incluido.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>120 vistas</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-yellow-500">
                      <Star className="h-3 w-3 fill-current" />
                      <span>4.9</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Item 2 */}
              <div className="overflow-hidden rounded-md border bg-background">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=120&width=240"
                    alt="Tour por las islas"
                    width={240}
                    height={120}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">Tour por las islas del Titicaca</h3>
                  <p className="text-xs text-muted-foreground">
                    Visita guiada a las islas flotantes de los Uros y Taquile con almuerzo tradicional.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>92 vistas</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-yellow-500">
                      <Star className="h-3 w-3 fill-current" />
                      <span>4.7</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Item 3 */}
              <div className="overflow-hidden rounded-md border bg-background">
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=120&width=240"
                    alt="Taller de textiles"
                    width={240}
                    height={120}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="font-medium">Taller de textiles andinos</h3>
                  <p className="text-xs text-muted-foreground">
                    Aprende técnicas ancestrales de tejido andino con maestras artesanas locales.
                  </p>
                  <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>68 vistas</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-yellow-500">
                      <Star className="h-3 w-3 fill-current" />
                      <span>5.0</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Estadísticas de Visitantes</CardTitle>
            <Button variant="link" size="sm" className="text-sm text-muted-foreground">
              Más detalles
            </Button>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] w-full">
              <div className="flex h-full items-end gap-2">
                <div className="relative h-[60%] w-full bg-primary/80" style={{ height: "60%" }}>
                  <div className="absolute -top-6 w-full text-center text-xs">Lun</div>
                </div>
                <div className="relative h-[75%] w-full bg-primary/80" style={{ height: "75%" }}>
                  <div className="absolute -top-6 w-full text-center text-xs">Mar</div>
                </div>
                <div className="relative h-[65%] w-full bg-primary/80" style={{ height: "65%" }}>
                  <div className="absolute -top-6 w-full text-center text-xs">Mié</div>
                </div>
                <div className="relative h-[80%] w-full bg-primary/80" style={{ height: "80%" }}>
                  <div className="absolute -top-6 w-full text-center text-xs">Jue</div>
                </div>
                <div className="relative h-[90%] w-full bg-primary/80" style={{ height: "90%" }}>
                  <div className="absolute -top-6 w-full text-center text-xs">Vie</div>
                </div>
                <div className="relative h-[95%] w-full bg-primary/80" style={{ height: "95%" }}>
                  <div className="absolute -top-6 w-full text-center text-xs">Sáb</div>
                </div>
                <div className="relative h-[85%] w-full bg-primary/80" style={{ height: "85%" }}>
                  <div className="absolute -top-6 w-full text-center text-xs">Dom</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-primary"></div>
                <span className="text-xs text-muted-foreground">Visitas</span>
              </div>
              <div className="mt-1 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-amber-500"></div>
                <span className="text-xs text-muted-foreground">Temporada alta: Mayo - Agosto</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Reservations Table */}
      <div className="mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Solicitudes de Reserva</CardTitle>
            <Button variant="link" size="sm" className="text-sm text-muted-foreground">
              Ver todas
            </Button>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2 text-left font-medium">VISITANTE</th>
                    <th className="pb-2 text-left font-medium">TIPO</th>
                    <th className="pb-2 text-left font-medium">SERVICIO</th>
                    <th className="pb-2 text-left font-medium">ESTADO</th>
                    <th className="pb-2 text-left font-medium">ACCIONES</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xs font-medium">MR</span>
                        </div>
                        <div>
                          <div className="font-medium">María Rodríguez</div>
                          <div className="text-xs text-muted-foreground">20/04/2025</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">Hospedaje</td>
                    <td className="py-3">Habitación Doble con Vista al Lago</td>
                    <td className="py-3">
                      <Badge variant="outline" className="border-amber-500 text-amber-500">
                        Pendiente
                      </Badge>
                    </td>
                    <td className="py-3">
                      <div className="flex gap-2">
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
                      </div>
                    </td>
                  </tr>
                  {/* Más filas aquí... */}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Availability Calendar */}
      <div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-lg font-medium">Disponibilidad (Abril 2025)</CardTitle>
            <Button size="sm">Actualizar</Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((day) => (
                <Button key={day} variant={day === 11 ? "default" : "outline"} className="h-10 w-10 p-0">
                  {day}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
