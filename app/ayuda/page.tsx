"use client"

import PanelLayout from "../../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, HelpCircle, Mail, MessageSquare, Phone, Search } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"

export default function AyudaPage() {
  return (
    <PanelLayout activeItem="ayuda">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Centro de Ayuda</h1>

        <div className="mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold mb-2">¿Cómo podemos ayudarte?</h2>
                <p className="text-muted-foreground mb-6">
                  Busca en nuestra base de conocimientos o contacta con nuestro equipo de soporte.
                </p>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-10" placeholder="Buscar ayuda (ej: cómo crear una reserva)" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="faq">
              <HelpCircle className="h-4 w-4 mr-2" />
              Preguntas frecuentes
            </TabsTrigger>
            <TabsTrigger value="guides">
              <BookOpen className="h-4 w-4 mr-2" />
              Guías
            </TabsTrigger>
            <TabsTrigger value="contact">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contacto
            </TabsTrigger>
          </TabsList>

          <TabsContent value="faq">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Preguntas sobre el panel</CardTitle>
                  <CardDescription>Resolvemos tus dudas sobre el uso del panel de emprendedor.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>¿Cómo puedo crear un nuevo servicio?</AccordionTrigger>
                      <AccordionContent>
                        Para crear un nuevo servicio, ve a la sección "Crear Contenido" en el menú lateral. Allí podrás
                        elegir entre crear un alojamiento, una experiencia o un tour. Completa todos los campos
                        requeridos y haz clic en "Publicar".
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>¿Cómo gestiono mis reservas?</AccordionTrigger>
                      <AccordionContent>
                        Todas las reservas se muestran en la sección "Reservas". Allí podrás ver las reservas
                        pendientes, confirmadas y canceladas. Para confirmar o rechazar una reserva, simplemente haz
                        clic en los botones correspondientes.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>¿Cómo actualizo mi disponibilidad?</AccordionTrigger>
                      <AccordionContent>
                        Puedes actualizar tu disponibilidad desde la sección "Calendario". Selecciona las fechas que
                        deseas marcar como disponibles o no disponibles y guarda los cambios.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>¿Cómo respondo a los mensajes de los clientes?</AccordionTrigger>
                      <AccordionContent>
                        En la sección "Mensajes" encontrarás todos los mensajes de tus clientes. Haz clic en un mensaje
                        para leerlo y responderlo. Es importante responder rápidamente para mejorar tu tasa de
                        conversión.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Preguntas sobre pagos</CardTitle>
                  <CardDescription>Información sobre pagos, comisiones y transferencias.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>¿Cómo recibo los pagos de mis clientes?</AccordionTrigger>
                      <AccordionContent>
                        Los pagos se procesan automáticamente a través de nuestra plataforma. Puedes configurar tu
                        cuenta bancaria en la sección "Configuración &gt; Pagos". Las transferencias se realizan cada 15
                        días.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>¿Cuáles son las comisiones por venta?</AccordionTrigger>
                      <AccordionContent>
                        La comisión estándar es del 10% sobre el valor total de la reserva. Esta comisión incluye el
                        procesamiento de pagos, la promoción de tu emprendimiento y el soporte técnico.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>¿Qué hago si un cliente cancela su reserva?</AccordionTrigger>
                      <AccordionContent>
                        Si un cliente cancela su reserva, recibirás una notificación. Dependiendo de tu política de
                        cancelación, el cliente podría recibir un reembolso total, parcial o ningún reembolso. Puedes
                        configurar tu política de cancelación en la sección "Configuración &gt; Políticas".
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                      <AccordionTrigger>¿Cómo emito facturas a mis clientes?</AccordionTrigger>
                      <AccordionContent>
                        Puedes generar facturas automáticamente desde la sección "Reservas". Selecciona la reserva para
                        la que deseas emitir una factura y haz clic en "Generar factura". La factura se enviará
                        automáticamente al cliente por correo electrónico.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="guides">
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle>Guía de inicio rápido</CardTitle>
                  <CardDescription>Aprende a configurar tu perfil y publicar tu primer servicio.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Esta guía te ayudará a dar tus primeros pasos en el panel de emprendedor. Aprenderás a configurar tu
                    perfil, subir fotos y crear tu primer servicio.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver guía
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle>Optimiza tus listados</CardTitle>
                  <CardDescription>Consejos para mejorar la visibilidad de tus servicios.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Aprende a optimizar tus listados para aparecer en los primeros resultados de búsqueda. Incluye
                    consejos sobre fotografías, descripciones y precios.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver guía
                  </Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                </div>
                <CardHeader>
                  <CardTitle>Gestión de reservas</CardTitle>
                  <CardDescription>Aprende a gestionar eficientemente tus reservas.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Esta guía te enseñará a gestionar tus reservas de manera eficiente, desde la confirmación hasta la
                    finalización del servicio.
                  </p>
                  <Button variant="outline" className="w-full">
                    Ver guía
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un mensaje</CardTitle>
                  <CardDescription>Completa el formulario y te responderemos a la brevedad.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nombre
                      </label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Correo electrónico
                      </label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Asunto
                      </label>
                      <Input id="subject" placeholder="Asunto de tu consulta" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Mensaje
                      </label>
                      <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} />
                    </div>
                    <Button className="w-full">Enviar mensaje</Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                  <CardDescription>Otras formas de contactar con nuestro equipo de soporte.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Correo electrónico</h3>
                      <p className="text-sm text-muted-foreground">
                        Envíanos un correo a{" "}
                        <a href="mailto:soporte@panel-emp.com" className="text-primary">
                          soporte@panel-emp.com
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">Tiempo de respuesta: 24-48 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-sm text-muted-foreground">
                        Llámanos al{" "}
                        <a href="tel:+51987654321" className="text-primary">
                          +51 987 654 321
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground">Lunes a viernes: 9:00 - 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-primary/10">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Chat en vivo</h3>
                      <p className="text-sm text-muted-foreground">
                        Chatea con nuestro equipo de soporte en tiempo real
                      </p>
                      <p className="text-sm text-muted-foreground">Disponible de lunes a viernes: 9:00 - 18:00</p>
                    </div>
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
