"use client"

import { useState } from "react"
import PanelLayout from "../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Filter, MessageSquare, Search, Star, ThumbsUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

function getBadgeVariantFromType(type: string): BadgeVariant {
  switch (type) {
    case "hospedaje":
      return "default";
    case "tour":
      return "secondary";
    case "taller":
      return "outline";
    default:
      return "outline";
  }
}

type Review = {
  id: number;
  user: { name: string; initials: string };
  service: string;
  rating: number;
  comment: string;
  date: string | null;
  replied: boolean;
  type: string;
};

export default function ValoracionesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  // Datos de ejemplo para las valoraciones
  const reviews: Review[] = [
    {
      id: 1,
      user: { name: "María Rodríguez", initials: "MR" },
      service: "Hospedaje frente al lago Titicaca",
      rating: 5,
      comment:
        "Una experiencia increíble. La habitación tenía una vista espectacular al lago y el desayuno tradicional fue delicioso. El personal muy amable y atento. Definitivamente volveré.",
      date: "20/04/2025",
      replied: true,
      type: "hospedaje",
    },
    {
      id: 2,
      user: { name: "Carlos Mendoza", initials: "CM" },
      service: "Tour por las islas del Titicaca",
      rating: 4,
      comment:
        "El tour fue muy interesante y el guía conocía muy bien la historia de las islas. Lo único que podría mejorar es el tiempo en cada parada, a veces se sentía un poco apresurado.",
      date: "18/04/2025",
      replied: false,
      type: "tour",
    },
    {
      id: 3,
      user: { name: "Ana Garrido", initials: "AG" },
      service: "Taller de textiles andinos",
      rating: 5,
      comment:
        "¡Excelente taller! Aprendí mucho sobre las técnicas tradicionales de tejido andino. Las maestras artesanas son muy pacientes y explican todo muy bien. Me llevé una hermosa pieza que hice yo misma.",
      date: "15/04/2025",
      replied: true,
      type: "taller",
    },
    {
      id: 4,
      user: { name: "Jorge Pérez", initials: "JP" },
      service: "Hospedaje frente al lago Titicaca",
      rating: 3,
      comment:
        "La habitación y las vistas eran buenas, pero hubo algunos problemas con el agua caliente. El personal intentó solucionarlo rápidamente, lo cual agradezco.",
      date: "10/04/2025",
      replied: true,
      type: "hospedaje",
    },
    {
      id: 5,
      user: { name: "Lucía Martínez", initials: "LM" },
      service: "Tour por las islas del Titicaca",
      rating: 5,
      comment:
        "Una experiencia única e inolvidable. El recorrido por las islas flotantes fue fascinante y el almuerzo tradicional delicioso. Nuestro guía fue muy amable y conocedor. Totalmente recomendado.",
      date: "05/04/2025",
      replied: false,
      type: "tour",
    },
  ];

  // Renderizar estrellas según la calificación
  const renderStars = (rating: number): React.ReactNode[] => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`} />
    ));
  };

  // Calcular promedio de valoraciones
  const averageRating = (reviews.reduce((sum: number, review: Review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  // Contar valoraciones por número de estrellas
  const ratingCounts = Array.from({ length: 5 }).map((_, i) => {
    const count = reviews.filter((review: Review) => review.rating === 5 - i).length;
    const percentage = (count / reviews.length) * 100;
    return { stars: 5 - i, count, percentage };
  });

  return (
    <PanelLayout activeItem="valoraciones">
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Valoraciones</h1>
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar valoraciones..."
                className="pl-8 w-full sm:w-[250px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        {/* Filtros */}
        {showFilters && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Calificación</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Todas las calificaciones" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todas las calificaciones</SelectItem>
                      <SelectItem value="5">5 estrellas</SelectItem>
                      <SelectItem value="4">4 estrellas</SelectItem>
                      <SelectItem value="3">3 estrellas</SelectItem>
                      <SelectItem value="2">2 estrellas</SelectItem>
                      <SelectItem value="1">1 estrella</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tipo de servicio</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los servicios" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los servicios</SelectItem>
                      <SelectItem value="hospedaje">Hospedaje</SelectItem>
                      <SelectItem value="tour">Tours</SelectItem>
                      <SelectItem value="taller">Talleres</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Estado</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Todos los estados" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="replied">Respondidas</SelectItem>
                      <SelectItem value="pending">Sin responder</SelectItem>
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

        {/* Resumen de valoraciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Valoración media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold">{averageRating}</div>
                <div className="flex flex-col gap-1">
                  <div className="flex">{renderStars(Math.round(Number.parseFloat(averageRating)))}</div>
                  <p className="text-sm text-muted-foreground">Basado en {reviews.length} valoraciones</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium">Distribución de valoraciones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {ratingCounts.map((item) => (
                  <div key={item.stars} className="flex items-center gap-2">
                    <div className="flex items-center gap-1 w-20">
                      <span>{item.stars}</span>
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                    </div>
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${item.percentage}%` }} />
                    </div>
                    <div className="w-12 text-right text-sm text-muted-foreground">{item.count}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de valoraciones */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="all">Todas</TabsTrigger>
            <TabsTrigger value="pending">Sin responder</TabsTrigger>
            <TabsTrigger value="positive">Positivas</TabsTrigger>
            <TabsTrigger value="negative">Negativas</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-4">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} renderStars={renderStars} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="pending">
            <div className="space-y-4">
              {reviews
                .filter((r) => !r.replied)
                .map((review) => (
                  <ReviewCard key={review.id} review={review} renderStars={renderStars} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="positive">
            <div className="space-y-4">
              {reviews
                .filter((r) => r.rating >= 4)
                .map((review) => (
                  <ReviewCard key={review.id} review={review} renderStars={renderStars} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="negative">
            <div className="space-y-4">
              {reviews
                .filter((r) => r.rating < 4)
                .map((review) => (
                  <ReviewCard key={review.id} review={review} renderStars={renderStars} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </PanelLayout>
  )
}

function ReviewCard({ review, renderStars }: { review: any; renderStars: (rating: number) => React.ReactNode }) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <Avatar className="h-10 w-10">
            <AvatarFallback>{review.user.initials}</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div>
                <h3 className="font-medium">{review.user.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </div>
              <Badge
                variant={getBadgeVariantFromType(review.type)}
              >
                {review.type}
              </Badge>
            </div>
            <p className="text-sm mb-4">{review.comment}</p>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">{review.service}</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <ThumbsUp className="h-4 w-4" />
                  <span>Útil</span>
                </Button>
                {!review.replied ? (
                  <Button size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Responder</span>
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />
                    <span>Ver respuesta</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
