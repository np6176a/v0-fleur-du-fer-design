import { BrandHeader } from "@/components/design-system/brand-header"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <BrandHeader />

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-6 py-24">
          <h1 className="text-5xl md:text-7xl font-bold text-iron-black tracking-tight">Fleur du Fer</h1>

          <div className="flex justify-center my-8">
            <div className="relative w-full max-w-md aspect-[9/16] rounded-lg overflow-hidden shadow-lg border-2 border-gilded-brass/20">
              <iframe
                src="https://www.youtube.com/embed/qn9FluBWR34"
                title="Fleur du Fer Brand Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>

          <div className="h-1 w-24 bg-gilded-brass mx-auto" />
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Where industrial elegance meets romantic florals. A design system that harmonizes the strength of iron with
            the delicate beauty of flowers.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-iron-black text-petal-ivory py-12 mt-24">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <img src="/logo.png" alt="Fleur du Fer Logo" className="w-12 h-12" />
            <span className="text-2xl font-serif font-bold">Fleur du Fer</span>
          </div>
          <p className="text-sm text-petal-ivory/70">Fleur du Fer © 2025 • Where Iron Meets Flower</p>
        </div>
      </footer>
    </div>
  )
}
