"use client"

import { useState } from "react"
import PanelLayout from "../../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ImagePlus, X } from "lucide-react"

export default function CrearContenido() {
  const [images, setImages] = useState<string[]>([
    "/placeholder.svg?height=200&width=300",
    "/placeholder.svg?height=200&width=300",
  ])

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  const addImage = () => {
    setImages([...images, "/placeholder.svg?height=200&width=300"])
  }

  return (
    <PanelLayout activeItem="crear-contenido">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Crear Nuevo Contenido</h1>

        <Tabs defaultValue="alojamiento" className="w-full">
          <TabsList className="grid grid-cols-3 mb-6">
            <TabsTrigger value="alojamiento">Alojamiento</TabsTrigger>
            <TabsTrigger value="experiencia">Experiencia</TabsTrigger>
            <TabsTrigger value="tour">Tour</TabsTrigger>
          </TabsList>

          <TabsContent value="alojamiento">
            <Card>
              <CardHeader>
                <CardTitle>Nuevo Alojamiento</CardTitle>
                <CardDescription>
                  Crea una nueva oferta de alojamiento para tu emprendimiento turístico.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input id="title" placeholder="Ej: Habitación doble con vista al lago" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Precio por noche (PEN)</Label>
                    <Input id="price" type="number" placeholder="150" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacidad</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar capacidad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 persona</SelectItem>
                        <SelectItem value="2">2 personas</SelectItem>
                        <SelectItem value="3">3 personas</SelectItem>
                        <SelectItem value="4">4 personas</SelectItem>
                        <SelectItem value="5+">5+ personas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe tu alojamiento, incluye detalles sobre las comodidades, vistas, servicios incluidos, etc."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Características</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="wifi" className="rounded border-gray-300" />
                      <Label htmlFor="wifi">WiFi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="breakfast" className="rounded border-gray-300" />
                      <Label htmlFor="breakfast">Desayuno incluido</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="bathroom" className="rounded border-gray-300" />
                      <Label htmlFor="bathroom">Baño privado</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="hotwater" className="rounded border-gray-300" />
                      <Label htmlFor="hotwater">Agua caliente</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="lakeview" className="rounded border-gray-300" />
                      <Label htmlFor="lakeview">Vista al lago</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="parking" className="rounded border-gray-300" />
                      <Label htmlFor="parking">Estacionamiento</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Imágenes</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative rounded-md overflow-hidden border aspect-video">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Imagen ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="border-dashed border-2 flex flex-col items-center justify-center h-full min-h-[150px] gap-2"
                      onClick={addImage}
                    >
                      <ImagePlus className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Añadir imagen</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Ubicación</Label>
                  <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Mapa de ubicación</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button>Publicar Alojamiento</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="experiencia">
            <Card>
              <CardHeader>
                <CardTitle>Nueva Experiencia</CardTitle>
                <CardDescription>
                  Crea una nueva experiencia cultural o actividad para ofrecer a los visitantes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input id="title" placeholder="Ej: Taller de textiles andinos" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Precio por persona (PEN)</Label>
                    <Input id="price" type="number" placeholder="50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duración</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1h">1 hora</SelectItem>
                        <SelectItem value="2h">2 horas</SelectItem>
                        <SelectItem value="3h">3 horas</SelectItem>
                        <SelectItem value="4h">4 horas</SelectItem>
                        <SelectItem value="full">Día completo</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe la experiencia, qué aprenderán los visitantes, qué incluye, etc."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Imágenes</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative rounded-md overflow-hidden border aspect-video">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Imagen ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="border-dashed border-2 flex flex-col items-center justify-center h-full min-h-[150px] gap-2"
                      onClick={addImage}
                    >
                      <ImagePlus className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Añadir imagen</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button>Publicar Experiencia</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="tour">
            <Card>
              <CardHeader>
                <CardTitle>Nuevo Tour</CardTitle>
                <CardDescription>Crea un nuevo tour o recorrido para ofrecer a los visitantes.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Título</Label>
                  <Input id="title" placeholder="Ej: Tour por las islas del Titicaca" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Precio por persona (PEN)</Label>
                    <Input id="price" type="number" placeholder="120" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duration">Duración</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar duración" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="half">Medio día</SelectItem>
                        <SelectItem value="full">Día completo</SelectItem>
                        <SelectItem value="2d">2 días</SelectItem>
                        <SelectItem value="3d">3 días</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capacity">Capacidad máxima</Label>
                    <Input id="capacity" type="number" placeholder="10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe el tour, lugares que se visitarán, qué incluye, etc."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Incluye</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="transport" className="rounded border-gray-300" />
                      <Label htmlFor="transport">Transporte</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="food" className="rounded border-gray-300" />
                      <Label htmlFor="food">Alimentación</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="guide" className="rounded border-gray-300" />
                      <Label htmlFor="guide">Guía turístico</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="entrance" className="rounded border-gray-300" />
                      <Label htmlFor="entrance">Entradas</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="accommodation" className="rounded border-gray-300" />
                      <Label htmlFor="accommodation">Alojamiento</Label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Imágenes</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative rounded-md overflow-hidden border aspect-video">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Imagen ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <Button
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2 h-6 w-6"
                          onClick={() => removeImage(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="outline"
                      className="border-dashed border-2 flex flex-col items-center justify-center h-full min-h-[150px] gap-2"
                      onClick={addImage}
                    >
                      <ImagePlus className="h-8 w-8 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Añadir imagen</span>
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="route">Ruta del tour</Label>
                  <div className="h-[200px] bg-muted rounded-md flex items-center justify-center">
                    <span className="text-muted-foreground">Mapa de ruta</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancelar</Button>
                <Button>Publicar Tour</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PanelLayout>
  )
}
