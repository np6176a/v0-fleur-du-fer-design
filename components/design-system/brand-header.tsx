import Image from "next/image"
import Link from "next/link"

export function BrandHeader() {
  return (
    <header className="sticky top-0 z-50 bg-iron-black text-petal-ivory py-6 border-b-2 border-gilded-brass shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
            <div className="relative w-16 h-16">
              <Image src="/logo.png" alt="Fleur du Fer Logo" width={64} height={64} className="object-contain" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold tracking-wide text-[rgba(199,166,101,1)]">Fleur du Fer</h1>
              <p className="text-xs text-gilded-brass uppercase tracking-widest">Design System</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm hover:text-gilded-brass transition-colors">
              Home
            </Link>
            <Link href="/branding" className="text-sm hover:text-gilded-brass transition-colors">
              Branding
            </Link>
            <Link href="/prompts" className="text-sm hover:text-gilded-brass transition-colors">
              Prompts
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
