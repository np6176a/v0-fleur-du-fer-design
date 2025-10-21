import { Card } from "@/components/ui/card"

export function TypographyShowcase() {
  return (
    <div className="space-y-8" id="typography">
      {/* Headings */}
      <Card className="p-8 space-y-6 border-2">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gilded-brass uppercase tracking-wide">Headings</h3>
          <p className="text-sm text-muted-foreground">Playfair Display - Serif typeface for elegant headlines</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-6xl font-serif font-bold text-iron-black">Heading 1</h1>
          <h2 className="text-5xl font-serif font-bold text-iron-black">Heading 2</h2>
          <h3 className="text-4xl font-serif font-semibold text-iron-black">Heading 3</h3>
          <h4 className="text-3xl font-serif font-semibold text-iron-black">Heading 4</h4>
          <h5 className="text-2xl font-serif font-medium text-iron-black">Heading 5</h5>
          <h6 className="text-xl font-serif font-medium text-iron-black">Heading 6</h6>
        </div>
      </Card>

      {/* Body Text */}
      <Card className="p-8 space-y-6 border-2">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gilded-brass uppercase tracking-wide">Body Text</h3>
          <p className="text-sm text-muted-foreground">Cormorant Garamond - Refined serif for body content</p>
        </div>
        <div className="space-y-4 max-w-3xl">
          <p className="text-xl leading-relaxed">
            Large body text - Fleur du Fer represents the perfect marriage of industrial strength and natural beauty.
            Each piece tells a story of craftsmanship and elegance.
          </p>
          <p className="text-base leading-relaxed">
            Regular body text - Our collections blend Victorian-era industrial aesthetics with contemporary floral
            motifs, creating timeless pieces that celebrate both power and grace.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Small body text - Meticulously crafted details and premium materials ensure every garment embodies the
            essence of luxury fashion.
          </p>
        </div>
      </Card>

      {/* Text Styles */}
      <Card className="p-8 space-y-6 border-2">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gilded-brass uppercase tracking-wide">Text Styles</h3>
          <p className="text-sm text-muted-foreground">Various text treatments for different contexts</p>
        </div>
        <div className="space-y-4">
          <p className="text-base">
            <strong className="font-bold">Bold text</strong> for emphasis and importance
          </p>
          <p className="text-base">
            <em className="italic">Italic text</em> for subtle emphasis and quotes
          </p>
          <p className="text-base text-gilded-brass">Gilded Brass accent text for highlights</p>
          <p className="text-base text-oxide-blue">Oxide Blue for primary actions and links</p>
          <p className="text-base text-crimson-bloom">Crimson Bloom for special callouts</p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Small caps for labels</p>
        </div>
      </Card>
    </div>
  )
}
