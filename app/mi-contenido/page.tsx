"use client"

import PanelLayout from "../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Edit, Eye, MoreHorizontal, Plus, Search, Star, Trash2, Users } from "lucide-react"
import Image from "next/image"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ContentItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  type: string;
  views: number;
  rating: number;
  status: string;
};

export default function MiContenido() {
  const contentItems: ContentItem[] = [
    {
      id: 1,
      title: "Hospedaje frente al lago Titicaca",
      description: "Habitación doble con vistas panorámicas al lago y desayuno tradicional incluido.",
      image: "/placeholder.svg?height=200&width=300",
      type: "alojamiento",
      views: 120,
      rating: 4.9,
      status: "published",
    },
    {
      id: 2,
      title: "Tour por las islas del Titicaca",
      description: "Visita guiada a las islas flotantes de los Uros y Taquile con almuerzo tradicional.",
      image: "/placeholder.svg?height=200&width=300",
      type: "tour",
      views: 92,
      rating: 4.7,
      status: "published",
    },
    {
      id: 3,
      title: "Taller de textiles andinos",
      description: "Aprende técnicas ancestrales de tejido andino con maestras artesanas locales.",
      image: "/placeholder.svg?height=200&width=300",
      type: "experiencia",
      views: 68,
      rating: 5.0,
      status: "published",
    },
    {
      id: 4,
      title: "Cabaña familiar con fogata",
      description: "Cabaña para 4 personas con área de fogata y vista a las montañas.",
      image: "/placeholder.svg?height=200&width=300",
      type: "alojamiento",
      views: 45,
      rating: 4.5,
      status: "draft",
    },
    {
      id: 5,
      title: "Paseo en bote tradicional",
      description: "Recorrido en bote de totora por la bahía de Puno al atardecer.",
      image: "/placeholder.svg?height=200&width=300",
      type: "tour",
      views: 0,
      rating: 0,
      status: "draft",
    },
  ]

  return (
    <PanelLayout activeItem="mi-contenido">
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Mi Contenido</h1>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar contenido..." className="pl-8 w-full sm:w-[250px]" />
            </div>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              <span>Crear Nuevo</span>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="published">Publicados</TabsTrigger>
              <TabsTrigger value="draft">Borradores</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Select defaultValue="recent">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Más recientes</SelectItem>
                  <SelectItem value="popular">Más populares</SelectItem>
                  <SelectItem value="rating">Mejor valorados</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los tipos</SelectItem>
                  <SelectItem value="alojamiento">Alojamiento</SelectItem>
                  <SelectItem value="tour">Tour</SelectItem>
                  <SelectItem value="experiencia">Experiencia</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentItems.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="published">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentItems
                .filter((item) => item.status === "published")
                .map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="draft">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentItems
                .filter((item) => item.status === "draft")
                .map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PanelLayout>
  )
}

function ContentCard({ item }: { item: ContentItem }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden relative">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={300}
          height={200}
          className="h-full w-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {item.status === "draft" && (
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
              Borrador
            </Badge>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="h-8 w-8 bg-background/80 backdrop-blur-sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Eye className="mr-2 h-4 w-4" />
                <span>Ver</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4" />
                <span>Editar</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Eliminar</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Badge
          className="absolute bottom-2 left-2 capitalize"
          variant={item.type === "alojamiento" ? "default" : item.type === "tour" ? "secondary" : "outline"}
        >
          {item.type}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{item.views} vistas</span>
          </div>
          {item.rating > 0 && (
            <div className="flex items-center gap-1 text-sm text-yellow-500">
              <Star className="h-4 w-4 fill-current" />
              <span>{item.rating}</span>
            </div>
          )}
        </div>
        <div className="flex gap-2 mt-4">
          <Button variant="outline" size="sm" className="w-full">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
          <Button variant="outline" size="sm" className="w-full">
            <Eye className="mr-2 h-4 w-4" />
            Vista previa
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
