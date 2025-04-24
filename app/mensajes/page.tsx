"use client"

import { useState } from "react"
import PanelLayout from "../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Archive, Clock, Inbox, Search, Send, Star, Trash } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"

type Message = {
  id: number;
  sender: { name: string; initials: string };
  subject: string;
  preview: string;
  content: string;
  date: string;
  read: boolean;
  starred: boolean;
  category: string;
};

export default function MensajesPage() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [replyText, setReplyText] = useState<string>("")

  // Datos de ejemplo para los mensajes
  const messages: Message[] = [
    {
      id: 1,
      sender: { name: "María Rodríguez", initials: "MR" },
      subject: "Consulta sobre disponibilidad",
      preview: "Hola, me gustaría saber si tienen disponibilidad para el fin de semana del 20 de abril...",
      content:
        "Hola, me gustaría saber si tienen disponibilidad para el fin de semana del 20 de abril. Somos una familia de 4 personas (2 adultos y 2 niños) y estamos interesados en su hospedaje con vista al lago. ¿Podrían confirmarme si hay habitaciones disponibles y cuál sería el costo total? Gracias de antemano.",
      date: "Hoy, 10:23",
      read: false,
      starred: false,
      category: "inbox",
    },
    {
      id: 2,
      sender: { name: "Carlos Mendoza", initials: "CM" },
      subject: "Reserva confirmada",
      preview: "Gracias por confirmar mi reserva. Tengo algunas preguntas adicionales sobre...",
      content:
        "Gracias por confirmar mi reserva. Tengo algunas preguntas adicionales sobre el tour por las islas. ¿Qué debo llevar para el recorrido? ¿Está incluido el almuerzo? También quería saber si hay alguna recomendación especial para la visita. Saludos cordiales.",
      date: "Ayer, 15:45",
      read: true,
      starred: true,
      category: "inbox",
    },
    {
      id: 3,
      sender: { name: "Ana Garrido", initials: "AG" },
      subject: "Taller de textiles",
      preview: "Estoy interesada en el taller de textiles andinos. ¿Cuál es la duración del taller y...",
      content:
        "Estoy interesada en el taller de textiles andinos. ¿Cuál es la duración del taller y qué materiales se utilizan? Me gustaría saber si es adecuado para principiantes o si se requiere experiencia previa. También quisiera saber si ofrecen descuentos para grupos, ya que somos 5 personas interesadas. Muchas gracias.",
      date: "18/04/2025",
      read: true,
      starred: false,
      category: "inbox",
    },
    {
      id: 4,
      sender: { name: "Jorge Pérez", initials: "JP" },
      subject: "Cancelación de reserva",
      preview: "Lamento informarles que debo cancelar mi reserva para el próximo fin de semana...",
      content:
        "Lamento informarles que debo cancelar mi reserva para el próximo fin de semana debido a un imprevisto familiar. Quisiera saber si es posible reprogramar para el mes siguiente o, en su defecto, conocer la política de devoluciones. Agradezco su comprensión y espero poder visitarlos pronto.",
      date: "15/04/2025",
      read: true,
      starred: false,
      category: "archive",
    },
    {
      id: 5,
      sender: { name: "Lucía Martínez", initials: "LM" },
      subject: "Valoración de estancia",
      preview: "Quería agradecerles por la maravillosa estancia que tuvimos la semana pasada...",
      content:
        "Quería agradecerles por la maravillosa estancia que tuvimos la semana pasada en su hospedaje. Todo fue perfecto, desde la limpieza de la habitación hasta la atención del personal. La vista al lago es espectacular y el desayuno tradicional fue delicioso. Sin duda volveremos y los recomendaremos a nuestros amigos y familiares. ¡Muchas gracias por todo!",
      date: "10/04/2025",
      read: true,
      starred: true,
      category: "starred",
    },
  ]

  // Filtrar mensajes según la pestaña activa
  const getFilteredMessages = (category: string): Message[] => {
    if (category === "all") return messages
    if (category === "unread") return messages.filter((m) => !m.read)
    if (category === "starred") return messages.filter((m) => m.starred)
    return messages.filter((m) => m.category === category)
  }

  // Marcar mensaje como leído
  const markAsRead = (id: number) => {
    // En una aplicación real, esto actualizaría el estado o haría una llamada a la API
    console.log(`Marcar mensaje ${id} como leído`)
  }

  // Enviar respuesta
  const sendReply = () => {
    if (!replyText.trim()) return
    // En una aplicación real, esto enviaría la respuesta y actualizaría el estado
    console.log(`Enviando respuesta: ${replyText}`)
    setReplyText("")
  }

  return (
    <PanelLayout activeItem="mensajes">
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Mensajes</h1>
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar mensajes..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Lista de mensajes */}
          <div className="lg:col-span-1">
            <Card className="h-full">
              <CardHeader className="pb-2">
                <Tabs defaultValue="inbox" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="inbox">
                      <Inbox className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Recibidos</span>
                    </TabsTrigger>
                    <TabsTrigger value="unread">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">No leídos</span>
                    </TabsTrigger>
                    <TabsTrigger value="starred">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Destacados</span>
                    </TabsTrigger>
                    <TabsTrigger value="archive">
                      <Archive className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">Archivados</span>
                    </TabsTrigger>
                  </TabsList>

                  {["inbox", "unread", "starred", "archive"].map((category) => (
                    <TabsContent key={category} value={category} className="m-0">
                      <div className="max-h-[600px] overflow-y-auto">
                        {getFilteredMessages(category).length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-8 text-center">
                            <div className="rounded-full bg-muted p-3 mb-2">
                              {category === "inbox" && <Inbox className="h-6 w-6 text-muted-foreground" />}
                              {category === "unread" && <Clock className="h-6 w-6 text-muted-foreground" />}
                              {category === "starred" && <Star className="h-6 w-6 text-muted-foreground" />}
                              {category === "archive" && <Archive className="h-6 w-6 text-muted-foreground" />}
                            </div>
                            <p className="text-muted-foreground">No hay mensajes que mostrar</p>
                          </div>
                        ) : (
                          getFilteredMessages(category).map((message) => (
                            <div
                              key={message.id}
                              className={`
                                p-3 border-b cursor-pointer hover:bg-muted/50 transition-colors
                                ${!message.read ? "bg-primary/5" : ""}
                                ${selectedMessage?.id === message.id ? "bg-muted" : ""}
                              `}
                              onClick={() => {
                                setSelectedMessage(message)
                                if (!message.read) markAsRead(message.id)
                              }}
                            >
                              <div className="flex items-start gap-3">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback>{message.sender.initials}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <p className={`font-medium truncate ${!message.read ? "text-primary" : ""}`}>
                                      {message.sender.name}
                                    </p>
                                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                                      {message.date}
                                    </span>
                                  </div>
                                  <p className="text-sm font-medium truncate">{message.subject}</p>
                                  <p className="text-xs text-muted-foreground truncate">{message.preview}</p>
                                </div>
                              </div>
                              <div className="flex items-center justify-end mt-1 gap-1">
                                {!message.read && <Badge variant="secondary" className="h-2 w-2 rounded-full p-0" />}
                                {message.starred && <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />}
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardHeader>
            </Card>
          </div>

          {/* Detalle del mensaje */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              {selectedMessage ? (
                <>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-medium">{selectedMessage.subject}</CardTitle>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon">
                        <Star
                          className={`h-4 w-4 ${selectedMessage.starred ? "fill-yellow-500 text-yellow-500" : ""}`}
                        />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Archive className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback>{selectedMessage.sender.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{selectedMessage.sender.name}</p>
                        <p className="text-xs text-muted-foreground">{selectedMessage.date}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-muted/30 rounded-md mb-6">
                      <p className="whitespace-pre-line">{selectedMessage.content}</p>
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-4">
                      <h3 className="text-sm font-medium">Responder</h3>
                      <Textarea
                        placeholder="Escribe tu respuesta aquí..."
                        className="min-h-[120px]"
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                      />
                      <div className="flex justify-end">
                        <Button onClick={sendReply} disabled={!replyText.trim()}>
                          <Send className="h-4 w-4 mr-2" />
                          Enviar respuesta
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="rounded-full bg-muted p-4 mb-4">
                    <Inbox className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Selecciona un mensaje</h3>
                  <p className="text-muted-foreground max-w-xs">
                    Selecciona un mensaje de la lista para ver su contenido y responder.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </PanelLayout>
  )
}
