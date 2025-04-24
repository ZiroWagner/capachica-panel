"use client"

import { useState } from "react"
import PanelLayout from "../components/panel-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Camera, CreditCard, Globe, Lock, Mail, Smartphone, User } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function ConfiguracionPage() {
  const [profileImage, setProfileImage] = useState<string>("/placeholder-user.jpg")

  return (
    <PanelLayout activeItem="configuracion">
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold mb-6">Configuración</h1>

        <Tabs defaultValue="perfil" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="perfil">Perfil</TabsTrigger>
            <TabsTrigger value="cuenta">Cuenta</TabsTrigger>
            <TabsTrigger value="notificaciones">Notificaciones</TabsTrigger>
            <TabsTrigger value="pagos">Pagos</TabsTrigger>
          </TabsList>

          <TabsContent value="perfil">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Información del Perfil</CardTitle>
                  <CardDescription>
                    Actualiza tu información personal y detalles de tu emprendimiento turístico.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="flex flex-col items-center gap-2">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={profileImage || "/placeholder.svg"} alt="Foto de perfil" />
                        <AvatarFallback>JP</AvatarFallback>
                      </Avatar>
                      <Button variant="outline" size="sm" className="relative">
                        <Camera className="h-4 w-4 mr-2" />
                        Cambiar foto
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept="image/*"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            // En una aplicación real, aquí se manejaría la subida de la imagen
                            if (e.target.files && e.target.files[0]) {
                              console.log("Imagen seleccionada:", e.target.files[0]);
                            }
                          }}
                        />
                      </Button>
                    </div>
                    <div className="flex-1 grid gap-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre">Nombre</Label>
                          <Input id="nombre" defaultValue="Juan" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="apellidos">Apellidos</Label>
                          <Input id="apellidos" defaultValue="Pérez Pérez" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" defaultValue="juan.perez@ejemplo.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input id="telefono" defaultValue="+51 987 654 321" />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Información del Emprendimiento</h3>
                    <div className="space-y-2">
                      <Label htmlFor="nombre-emprendimiento">Nombre del emprendimiento</Label>
                      <Input id="nombre-emprendimiento" defaultValue="Casa Turística Sampaxtla" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="tipo-emprendimiento">Tipo de emprendimiento</Label>
                        <Select defaultValue="hospedaje">
                          <SelectTrigger id="tipo-emprendimiento">
                            <SelectValue placeholder="Seleccionar tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hospedaje">Hospedaje</SelectItem>
                            <SelectItem value="tour">Operador de tours</SelectItem>
                            <SelectItem value="artesania">Artesanía</SelectItem>
                            <SelectItem value="gastronomia">Gastronomía</SelectItem>
                            <SelectItem value="mixto">Mixto</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ubicacion">Ubicación</Label>
                        <Input id="ubicacion" defaultValue="Capacñica, Puno, Perú" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="descripcion">Descripción</Label>
                      <Textarea
                        id="descripcion"
                        rows={4}
                        defaultValue="Hospedaje tradicional con vistas panorámicas al lago Titicaca. Ofrecemos habitaciones cómodas, desayunos tradicionales y experiencias culturales auténticas."
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar cambios</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociales</CardTitle>
                  <CardDescription>Conecta tus redes sociales para promocionar tu emprendimiento.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="website">Sitio web</Label>
                    <div className="flex">
                      <div className="flex items-center px-3 border rounded-l-md bg-muted">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <Input id="website" className="rounded-l-none" placeholder="www.ejemplo.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="facebook">Facebook</Label>
                    <Input id="facebook" placeholder="facebook.com/tuemprendimiento" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instagram">Instagram</Label>
                    <Input id="instagram" placeholder="instagram.com/tuemprendimiento" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar cambios</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cuenta">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Seguridad de la cuenta</CardTitle>
                  <CardDescription>
                    Actualiza tu contraseña y configura la autenticación de dos factores.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Contraseña actual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nueva contraseña</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Actualizar contraseña</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Autenticación de dos factores</CardTitle>
                  <CardDescription>Añade una capa adicional de seguridad a tu cuenta.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Autenticación por SMS</p>
                        <p className="text-sm text-muted-foreground">Recibe un código por SMS al iniciar sesión</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Lock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Aplicación de autenticación</p>
                        <p className="text-sm text-muted-foreground">Usa una aplicación como Google Authenticator</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notificaciones">
            <Card>
              <CardHeader>
                <CardTitle>Preferencias de notificaciones</CardTitle>
                <CardDescription>Configura cómo y cuándo quieres recibir notificaciones.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notificaciones por correo electrónico</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Nuevas reservas</p>
                        <p className="text-sm text-muted-foreground">
                          Recibe un correo cuando llegue una nueva reserva
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mensajes de clientes</p>
                        <p className="text-sm text-muted-foreground">
                          Recibe un correo cuando un cliente te envíe un mensaje
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Nuevas valoraciones</p>
                        <p className="text-sm text-muted-foreground">
                          Recibe un correo cuando un cliente deje una valoración
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Actualizaciones del sistema</p>
                        <p className="text-sm text-muted-foreground">
                          Recibe información sobre actualizaciones y novedades
                        </p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notificaciones en la aplicación</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Mostrar notificaciones</p>
                        <p className="text-sm text-muted-foreground">Activar notificaciones en el panel</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sonidos de notificación</p>
                        <p className="text-sm text-muted-foreground">Reproducir sonido al recibir notificaciones</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Guardar preferencias</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="pagos">
            <Card>
              <CardHeader>
                <CardTitle>Métodos de pago</CardTitle>
                <CardDescription>
                  Gestiona tus métodos de pago y configura cómo recibes los pagos de tus clientes.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Métodos de pago aceptados</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Tarjetas de crédito/débito</p>
                          <p className="text-sm text-muted-foreground">Visa, Mastercard, American Express</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Mail className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Transferencia bancaria</p>
                          <p className="text-sm text-muted-foreground">Pago directo a tu cuenta bancaria</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="h-5 w-5 text-muted-foreground" />
                        <div>
                          <p className="font-medium">Pago en efectivo</p>
                          <p className="text-sm text-muted-foreground">Pago al llegar al establecimiento</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Cuenta bancaria</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="banco">Banco</Label>
                      <Input id="banco" placeholder="Nombre del banco" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo-cuenta">Tipo de cuenta</Label>
                      <Select>
                        <SelectTrigger id="tipo-cuenta">
                          <SelectValue placeholder="Seleccionar tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ahorro">Ahorro</SelectItem>
                          <SelectItem value="corriente">Corriente</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="titular">Titular de la cuenta</Label>
                    <Input id="titular" placeholder="Nombre completo del titular" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="numero-cuenta">Número de cuenta</Label>
                    <Input id="numero-cuenta" placeholder="Número de cuenta bancaria" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button>Guardar cambios</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </PanelLayout>
  )
}
