"use client"

import { useState } from "react"
import PanelLayout from "../components/panel-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { DatePickerWithRange } from "./components/date-range-picker"
import { VisitorsChart } from "./components/visitors-chart"
import { RevenueChart } from "./components/revenue-chart"
import { TrafficSourcesChart } from "./components/traffic-sources-chart"
import { ConversionRateChart } from "./components/conversion-rate-chart"
import { RatingDistributionChart } from "./components/rating-distribution-chart"
import { VisitorDemographics } from "./components/visitor-demographics"
import { StatsGrid } from "./components/stats-grid"
import { ReservationTrends } from "./components/reservation-trends"

import type { DateRange } from "react-day-picker"

export default function EstadisticasPage() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(2025, 3, 1), // 1 de abril de 2025
    to: new Date(2025, 3, 30), // 30 de abril de 2025
  })
  const [timeframe, setTimeframe] = useState<string>("month")

  return (
    <PanelLayout activeItem="estadisticas">
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold">Estadísticas</h1>
            <p className="text-muted-foreground">Análisis detallado del rendimiento de tu emprendimiento</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <DatePickerWithRange date={dateRange} setDate={setDateRange} />
            <Select value={timeframe} onValueChange={setTimeframe}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Periodo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">Última semana</SelectItem>
                <SelectItem value="month">Último mes</SelectItem>
                <SelectItem value="quarter">Último trimestre</SelectItem>
                <SelectItem value="year">Último año</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
          </div>
        </div>

        {/* KPIs principales */}
        <StatsGrid />

        {/* Pestañas para diferentes categorías de estadísticas */}
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Resumen</TabsTrigger>
            <TabsTrigger value="visitors">Visitantes</TabsTrigger>
            <TabsTrigger value="reservations">Reservas</TabsTrigger>
            <TabsTrigger value="revenue">Ingresos</TabsTrigger>
            <TabsTrigger value="ratings">Valoraciones</TabsTrigger>
          </TabsList>

          {/* Pestaña de Resumen */}
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Tendencia de Visitantes</CardTitle>
                  <CardDescription>Número de visitas a tu perfil durante el periodo seleccionado</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <VisitorsChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fuentes de Tráfico</CardTitle>
                  <CardDescription>De dónde provienen tus visitantes</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <TrafficSourcesChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tasa de Conversión</CardTitle>
                  <CardDescription>Porcentaje de visitas que resultan en reservas</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ConversionRateChart />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pestaña de Visitantes */}
          <TabsContent value="visitors">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Análisis de Visitantes</CardTitle>
                  <CardDescription>Desglose detallado de las visitas a tu perfil</CardDescription>
                </CardHeader>
                <CardContent className="h-[400px]">
                  <VisitorsChart detailed />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Demografía de Visitantes</CardTitle>
                  <CardDescription>Distribución por edad, género y ubicación</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <VisitorDemographics />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Dispositivos</CardTitle>
                  <CardDescription>Tipos de dispositivos utilizados para acceder</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">68%</div>
                      <div className="text-sm text-muted-foreground">Móvil</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">22%</div>
                      <div className="text-sm text-muted-foreground">Desktop</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">10%</div>
                      <div className="text-sm text-muted-foreground">Tablet</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pestaña de Reservas */}
          <TabsContent value="reservations">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Tendencia de Reservas</CardTitle>
                  <CardDescription>Evolución de las reservas durante el periodo seleccionado</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <ReservationTrends />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tipos de Servicios Reservados</CardTitle>
                  <CardDescription>Distribución por tipo de servicio</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">45%</div>
                      <div className="text-sm text-muted-foreground">Hospedaje</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">35%</div>
                      <div className="text-sm text-muted-foreground">Tours</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-3xl font-bold">20%</div>
                      <div className="text-sm text-muted-foreground">Talleres</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Duración de Estancia</CardTitle>
                  <CardDescription>Promedio de noches por reserva de hospedaje</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold">2.8</div>
                    <div className="text-sm text-muted-foreground mt-2">Noches en promedio</div>
                    <div className="text-sm text-green-600 mt-1">+0.3 vs mes anterior</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pestaña de Ingresos */}
          <TabsContent value="revenue">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Ingresos</CardTitle>
                  <CardDescription>Evolución de los ingresos durante el periodo seleccionado</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <RevenueChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ingresos por Tipo de Servicio</CardTitle>
                  <CardDescription>Distribución de ingresos por categoría</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full">
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold">S/ 4,850</div>
                      <div className="text-sm text-muted-foreground">Hospedaje</div>
                      <div className="text-xs text-green-600">65%</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold">S/ 1,920</div>
                      <div className="text-sm text-muted-foreground">Tours</div>
                      <div className="text-xs text-green-600">25%</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-2xl font-bold">S/ 750</div>
                      <div className="text-sm text-muted-foreground">Talleres</div>
                      <div className="text-xs text-green-600">10%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Valor Promedio por Reserva</CardTitle>
                  <CardDescription>Gasto promedio por reserva</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold">S/ 320</div>
                    <div className="text-sm text-muted-foreground mt-2">Valor promedio</div>
                    <div className="text-sm text-green-600 mt-1">+8% vs mes anterior</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pestaña de Valoraciones */}
          <TabsContent value="ratings">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Evolución de Valoraciones</CardTitle>
                  <CardDescription>Puntuación media a lo largo del tiempo</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <RatingDistributionChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribución de Valoraciones</CardTitle>
                  <CardDescription>Número de valoraciones por puntuación</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] pt-6">
                  <div className="space-y-4">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="w-10 text-sm font-medium">{rating} ★</div>
                        <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full ${
                              rating >= 4 ? "bg-green-500" : rating === 3 ? "bg-yellow-500" : "bg-red-500"
                            }`}
                            style={{
                              width: `${
                                rating === 5
                                  ? "65%"
                                  : rating === 4
                                    ? "25%"
                                    : rating === 3
                                      ? "7%"
                                      : rating === 2
                                        ? "2%"
                                        : "1%"
                              }`,
                            }}
                          />
                        </div>
                        <div className="w-10 text-sm text-right">
                          {rating === 5
                            ? "65%"
                            : rating === 4
                              ? "25%"
                              : rating === 3
                                ? "7%"
                                : rating === 2
                                  ? "2%"
                                  : "1%"}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Aspectos Mejor Valorados</CardTitle>
                  <CardDescription>Categorías con mejores puntuaciones</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px] pt-6">
                  <div className="space-y-4">
                    {[
                      { name: "Ubicación", score: 4.9 },
                      { name: "Limpieza", score: 4.8 },
                      { name: "Atención", score: 4.7 },
                      { name: "Calidad/Precio", score: 4.5 },
                      { name: "Instalaciones", score: 4.3 },
                    ].map((aspect) => (
                      <div key={aspect.name} className="flex items-center gap-2">
                        <div className="w-28 text-sm font-medium">{aspect.name}</div>
                        <div className="flex-1 h-4 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${(aspect.score / 5) * 100}%` }} />
                        </div>
                        <div className="w-10 text-sm text-right">{aspect.score}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PanelLayout>
  )
}
