import Link from "next/link"
import { Home, BarChart2, Package, FileText, Grid, Settings, HelpCircle } from "lucide-react"

export default function Sidebar() {
  return (
    <div className="w-16 bg-[#0a0a0a] border-r border-gray-800 flex flex-col items-center py-6">
      <Link href="/" className="mb-8">
        <div className="text-amber-500 font-bold text-xl">GQ</div>
      </Link>

      <div className="flex flex-col items-center gap-6 flex-1">
        <Link href="/" className="p-2 text-white hover:text-amber-500">
          <Home className="h-5 w-5" />
        </Link>
        <Link href="/product" className="p-2 text-gray-500 hover:text-amber-500">
          <Package className="h-5 w-5" />
        </Link>
        <Link href="/files" className="p-2 text-gray-500 hover:text-amber-500">
          <FileText className="h-5 w-5" />
        </Link>
        <Link href="/dashboard" className="p-2 text-gray-500 hover:text-amber-500">
          <Grid className="h-5 w-5" />
        </Link>
        <Link href="/stats" className="p-2 text-gray-500 hover:text-amber-500">
          <BarChart2 className="h-5 w-5" />
        </Link>
        <Link href="/help" className="p-2 text-gray-500 hover:text-amber-500">
          <HelpCircle className="h-5 w-5" />
        </Link>
      </div>

      <div className="mt-auto">
        <Link href="/settings" className="p-2 text-gray-500 hover:text-amber-500">
          <Settings className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}

