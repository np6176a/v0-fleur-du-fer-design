import { ColorPalette } from "@/components/design-system/color-palette"
import { TypographyShowcase } from "@/components/design-system/typography-showcase"
import { ComponentShowcase } from "@/components/design-system/component-showcase"
import { BrandHeader } from "@/components/design-system/brand-header"

export default function BrandingPage() {
  return (
    <div className="min-h-screen">
      <BrandHeader />

      <main className="container mx-auto px-4 py-8 space-y-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6 py-24">
          <h1 className="text-5xl md:text-7xl font-bold text-iron-black tracking-tight">Fleur du Fer Branding</h1>
          <div className="h-1 w-24 bg-gilded-brass mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Where industrial elegance meets romantic florals. A design system that harmonizes the strength of iron with
            the delicate beauty of flowers.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Brand target audience focused on 25 to late 30s creatives.
          </p>
        </section>

        {/* Brand Overview */}
        <section className="max-w-6xl mx-auto py-8 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4 p-8 border border-gilded-brass/20 rounded-lg">
            <div className="w-16 h-16 mx-auto bg-gilded-brass/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">⚙️</span>
            </div>
            <h3 className="text-2xl font-bold text-iron-black">Industrial</h3>
            <p className="text-muted-foreground">Strength and precision inspired by gears and metalwork</p>
          </div>
          <div className="text-center space-y-4 p-8 border border-gilded-brass/20 rounded-lg">
            <div className="w-16 h-16 mx-auto bg-gilded-brass/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">🌹</span>
            </div>
            <h3 className="text-2xl font-bold text-iron-black">Romantic</h3>
            <p className="text-muted-foreground">Delicate beauty and elegance of floral artistry</p>
          </div>
          <div className="text-center space-y-4 p-8 border border-gilded-brass/20 rounded-lg">
            <div className="w-16 h-16 mx-auto bg-gilded-brass/10 rounded-full flex items-center justify-center">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-2xl font-bold text-iron-black">Luxury</h3>
            <p className="text-muted-foreground">Premium craftsmanship and sophisticated design</p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-black">Color Palette</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A carefully curated palette balancing dark industrial tones with warm metallics and vibrant florals
            </p>
          </div>
          <ColorPalette />
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-black">Typography</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elegant serif typefaces that convey luxury and sophistication
            </p>
          </div>
          <TypographyShowcase />
        </section>

        {/* Components */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-black">Components</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              UI elements designed for luxury fashion experiences
            </p>
          </div>
          <ComponentShowcase />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-iron-black text-petal-ivory py-12 mt-24">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img src="/logo.png" alt="Fleur du Fer Logo" className="w-12 h-12" />
            <span className="text-2xl font-serif font-bold">Fleur du Fer</span>
          </div>
          <p className="text-sm text-petal-ivory/70">Design System © 2025 • Where Iron Meets Flower</p>
        </div>
      </footer>
    </div>
  )
}
