import { ColorPalette } from "@/components/design-system/color-palette"
import { TypographyShowcase } from "@/components/design-system/typography-showcase"
import { ComponentShowcase } from "@/components/design-system/component-showcase"
import { BrandHeader } from "@/components/design-system/brand-header"

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen">
      <BrandHeader />

      <main className="container mx-auto px-4 py-12 space-y-24">
        {/* Introduction */}
        <section className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-iron-black tracking-tight">Fleur du Fer</h1>
          <div className="h-1 w-24 bg-gilded-brass mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Where industrial elegance meets romantic florals. A design that harmonizes the strength of iron with the delicate beauty of flowers.
          </p>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Brand target audience focused on 25 to late 30s creatives.
          </p>
        </section>

        {/* Color Palette */}
        <section id="colors" className="space-y-8 scroll-mt-24">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-black">Color Palette</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A carefully curated palette balancing dark industrial tones with warm metallics and vibrant florals
            </p>
          </div>
          <ColorPalette />
        </section>

        {/* Typography */}
        <section id="typography" className="space-y-8 scroll-mt-24">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-iron-black">Typography</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elegant serif typefaces that convey luxury and sophistication
            </p>
          </div>
          <TypographyShowcase />
        </section>

        {/* Components */}
        <section id="components" className="space-y-8 scroll-mt-24">
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
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 border-2 border-gilded-brass rounded-full flex items-center justify-center">
              <span className="text-gilded-brass text-xs font-serif">F</span>
            </div>
            <span className="text-2xl font-serif font-bold">Fleur du Fer</span>
          </div>
          <p className="text-sm text-petal-ivory/70">Design System © 2025 • Where Iron Meets Flower</p>
        </div>
      </footer>
    </div>
  )
}
