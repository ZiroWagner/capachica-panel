"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  LogOut,
  Menu,
  MessageSquare,
  Moon,
  PanelLeft,
  Plus,
  Search,
  Settings,
  ShoppingBag,
  Star,
  Sun,
  User,
  Monitor,
  X,
  BarChart2,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface PanelLayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

export default function PanelLayout({ children, activeItem = "dashboard" }: PanelLayoutProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()

  // Efecto para detectar cambios en el tema y aplicarlos
  useEffect(() => {
    if (mounted) {
      // Forzar la actualización del tema cuando cambia
      const html = document.documentElement
      if (theme === "dark") {
        html.classList.add("dark")
        html.classList.remove("light")
      } else if (theme === "light") {
        html.classList.add("light")
        html.classList.remove("dark")
      }

      // Guardar preferencia en localStorage
      localStorage.setItem("panel-emprendedor-theme", theme || "system")
    }
  }, [theme, mounted])

  // Efecto específico para detectar el tema del sistema
  useEffect(() => {
    // Detectar preferencia del sistema
    if (theme === "system") {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      document.documentElement.classList.toggle("dark", systemPrefersDark)
      document.documentElement.classList.toggle("light", !systemPrefersDark)
    }
  }, [theme, mounted])

  // Efecto para cargar el tema inicial desde localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("panel-emprendedor-theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [setTheme])

  // Evitar problemas de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  // Función para alternar la barra lateral
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  // Función para navegar sin cambiar el estado del sidebar
  const navigateTo = (path: string) => {
    // Navegar sin afectar al estado del sidebar
    router.push(path)
  }

  // Componente de navegación para reutilizar en sidebar y menú móvil
  interface NavigationLinksProps {
    mobile?: boolean;
    onItemClick?: () => void;
  }
  const NavigationLinks = ({ mobile = false, onItemClick = () => {} }: NavigationLinksProps) => {
    const handleNavigation = (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault()
      // Solo ejecutar onItemClick si estamos en móvil
      if (mobile) {
        onItemClick()
      }
      router.push(path)
    }

    return (
      <>
        <nav className="grid gap-1 px-2">
          <h3 className="px-4 py-2 text-sm font-medium text-muted-foreground">PANEL</h3>
          <Link
            href="/"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "dashboard"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/", e)}
          >
            <Home className="h-4 w-4" />
            <span>Dashboard</span>
          </Link>

          <Link
            href="/estadisticas"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "estadisticas"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/estadisticas", e)}
          >
            <BarChart2 className="h-4 w-4" />
            <span>Estadísticas</span>
          </Link>

          <Link
            href="/crear-contenido"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "crear-contenido"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/crear-contenido", e)}
          >
            <Plus className="h-4 w-4" />
            <span>Crear Contenido</span>
          </Link>

          <Link
            href="/mi-contenido"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "mi-contenido"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/mi-contenido", e)}
          >
            <FileText className="h-4 w-4" />
            <span>Mi Contenido</span>
          </Link>

          <Link
            href="/calendario"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "calendario"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/calendario", e)}
          >
            <Calendar className="h-4 w-4" />
            <span>Calendario</span>
            <Badge className="ml-auto h-5 w-5 rounded-full bg-primary text-[10px] text-primary-foreground">1</Badge>
          </Link>

          <Link
            href="/reservas"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "reservas"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/reservas", e)}
          >
            <ShoppingBag className="h-4 w-4" />
            <span>Reservas</span>
            <Badge className="ml-auto h-5 w-5 rounded-full bg-primary text-[10px] text-primary-foreground">3</Badge>
          </Link>

          <Link
            href="/mensajes"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "mensajes"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/mensajes", e)}
          >
            <MessageSquare className="h-4 w-4" />
            <span>Mensajes</span>
            <Badge className="ml-auto h-5 w-5 rounded-full bg-primary text-[10px] text-primary-foreground">2</Badge>
          </Link>

          <Link
            href="/valoraciones"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "valoraciones"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/valoraciones", e)}
          >
            <Star className="h-4 w-4" />
            <span>Valoraciones</span>
          </Link>
        </nav>

        <Separator className="my-4" />

        <nav className="grid gap-1 px-2">
          <h3 className="px-4 py-2 text-sm font-medium text-muted-foreground">AJUSTES</h3>
          <Link
            href="/configuracion"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "configuracion"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/configuracion", e)}
          >
            <Settings className="h-4 w-4" />
            <span>Configuración</span>
          </Link>
          <Link
            href="/ayuda"
            className={`flex items-center gap-3 rounded-md px-3 py-2 ${
              activeItem === "ayuda"
                ? "text-primary bg-muted hover:text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
            onClick={(e) => handleNavigation("/ayuda", e)}
          >
            <User className="h-4 w-4" />
            <span>Ayuda</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-md px-3 py-2 text-muted-foreground hover:bg-muted hover:text-foreground"
            onClick={onItemClick}
          >
            <LogOut className="h-4 w-4" />
            <span>Cerrar Sesión</span>
          </Link>
        </nav>
      </>
    )
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar para desktop */}
      <div
        className={`hidden md:flex flex-shrink-0 flex-col border-r bg-muted/40 transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <div className="flex h-14 items-center border-b px-4">
          <div
            className={`flex items-center gap-2 font-semibold text-primary ${!sidebarOpen && "justify-center w-full"}`}
          >
            <PanelLeft className="h-5 w-5" />
            {sidebarOpen && <span>PANEL-EMP</span>}
          </div>
        </div>

        <div className="flex flex-col h-full overflow-hidden">
          <div className="flex-1 overflow-auto py-2 scrollbar-thin">
            {sidebarOpen ? (
              <NavigationLinks />
            ) : (
              <div className="flex flex-col items-center gap-4 py-4">
                {/* Dashboard */}
                <button
                  type="button"
                  onClick={() => navigateTo("/")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "dashboard" ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <Home
                    className={`h-5 w-5 ${activeItem === "dashboard" ? "text-primary" : "text-muted-foreground"}`}
                  />
                </button>

                {/* Estadísticas */}
                <button
                  type="button"
                  onClick={() => navigateTo("/estadisticas")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "estadisticas" ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <BarChart2
                    className={`h-5 w-5 ${activeItem === "estadisticas" ? "text-primary" : "text-muted-foreground"}`}
                  />
                </button>

                {/* Crear Contenido */}
                <button
                  type="button"
                  onClick={() => navigateTo("/crear-contenido")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "crear-contenido" ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <Plus
                    className={`h-5 w-5 ${activeItem === "crear-contenido" ? "text-primary" : "text-muted-foreground"}`}
                  />
                </button>

                {/* Mi Contenido */}
                <button
                  type="button"
                  onClick={() => navigateTo("/mi-contenido")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "mi-contenido" ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <FileText
                    className={`h-5 w-5 ${activeItem === "mi-contenido" ? "text-primary" : "text-muted-foreground"}`}
                  />
                </button>

                {/* Calendario */}
                <button
                  type="button"
                  onClick={() => navigateTo("/calendario")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "calendario" ? "bg-muted" : "hover:bg-muted"
                  } relative`}
                >
                  <Calendar
                    className={`h-5 w-5 ${activeItem === "calendario" ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary p-0 text-[10px] text-primary-foreground flex items-center justify-center">
                    1
                  </Badge>
                </button>

                {/* Reservas */}
                <button
                  type="button"
                  onClick={() => navigateTo("/reservas")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "reservas" ? "bg-muted" : "hover:bg-muted"
                  } relative`}
                >
                  <ShoppingBag
                    className={`h-5 w-5 ${activeItem === "reservas" ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary p-0 text-[10px] text-primary-foreground flex items-center justify-center">
                    3
                  </Badge>
                </button>

                {/* Mensajes */}
                <button
                  type="button"
                  onClick={() => navigateTo("/mensajes")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "mensajes" ? "bg-muted" : "hover:bg-muted"
                  } relative`}
                >
                  <MessageSquare
                    className={`h-5 w-5 ${activeItem === "mensajes" ? "text-primary" : "text-muted-foreground"}`}
                  />
                  <Badge className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-primary p-0 text-[10px] text-primary-foreground flex items-center justify-center">
                    2
                  </Badge>
                </button>

                {/* Valoraciones */}
                <button
                  type="button"
                  onClick={() => navigateTo("/valoraciones")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "valoraciones" ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <Star
                    className={`h-5 w-5 ${activeItem === "valoraciones" ? "text-primary" : "text-muted-foreground"}`}
                  />
                </button>

                <Separator className="my-2 w-4/5" />

                {/* Configuración */}
                <button
                  type="button"
                  onClick={() => navigateTo("/configuracion")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "configuracion" ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <Settings
                    className={`h-5 w-5 ${activeItem === "configuracion" ? "text-primary" : "text-muted-foreground"}`}
                  />
                </button>

                {/* Ayuda */}
                <button
                  type="button"
                  onClick={() => navigateTo("/ayuda")}
                  className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    activeItem === "ayuda" ? "bg-muted" : "hover:bg-muted"
                  }`}
                >
                  <User className={`h-5 w-5 ${activeItem === "ayuda" ? "text-primary" : "text-muted-foreground"}`} />
                </button>

                {/* Cerrar Sesión */}
                <button type="button" className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-muted">
                  <LogOut className="h-5 w-5 text-muted-foreground" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-[240px] sm:w-[300px] p-0">
          <div className="flex h-14 items-center border-b px-4">
            <div className="flex items-center gap-2 font-semibold text-primary">
              <PanelLeft className="h-5 w-5" />
              <span>PANEL-EMP</span>
            </div>
            <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setMobileMenuOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="py-4 overflow-auto h-full">
            <NavigationLinks mobile={true} onItemClick={() => setMobileMenuOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
          <div className="flex flex-1 items-center gap-2">
            {/* Botón para menú móvil */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-5 w-5" />
            </Button>

            {/* Botón para alternar sidebar en desktop */}
            <Button variant="ghost" size="icon" className="hidden md:flex" onClick={toggleSidebar}>
              {sidebarOpen ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </Button>

            <form className="relative flex-1 md:max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar..."
                className="pl-8 md:w-[300px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
          <div className="flex items-center gap-2">
            {/* Selector de tema mejorado con Select */}
            {mounted && (
              <Select value={theme} onValueChange={setTheme} defaultValue={theme || "system"}>
                <SelectTrigger className="w-[130px] h-9">
                  <SelectValue>
                    <div className="flex items-center gap-2">
                      {theme === "light" && <Sun className="h-4 w-4" />}
                      {theme === "dark" && <Moon className="h-4 w-4" />}
                      {theme === "system" && <Monitor className="h-4 w-4" />}
                      <span>
                        {theme === "light" && "Claro"}
                        {theme === "dark" && "Oscuro"}
                        {theme === "system" && "Sistema"}
                      </span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">
                    <div className="flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      <span>Claro</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="dark">
                    <div className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      <span>Oscuro</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="system">
                    <div className="flex items-center gap-2">
                      <Monitor className="h-4 w-4" />
                      <span>Sistema</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            )}

            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">Juan Pérez Pérez</span>
              <span className="text-xs text-muted-foreground">Casa Turística Sampaxtla</span>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-user.jpg" alt="Juan Pérez" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
