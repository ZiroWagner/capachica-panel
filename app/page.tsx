import PanelLayout from "./components/panel-layout"
import Dashboard from "./dashboard/page"

export default function Home() {
  return (
    <PanelLayout activeItem="dashboard">
      <Dashboard />
    </PanelLayout>
  )
}
