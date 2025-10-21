import { Card } from "@/components/ui/card"

const colors = [
  {
    name: "Iron Black",
    hex: "#1C1C1C",
    usage: "Base / text / logo background",
    description: "Matte iron base for an industrial, elegant canvas.",
    textClass: "text-petal-ivory",
  },
  {
    name: "Gilded Brass",
    hex: "#C6A664",
    usage: "Primary color, metallic accents, logo linework",
    description: "Luxurious primary tone evoking gearwork, warmth, and elegance.",
    textClass: "text-iron-black",
  },
  {
    name: "Oxide Blue",
    hex: "#1D4E89",
    usage: "Contrast accent, structural details",
    description: "Regal steampunk blue for depth and sophisticated contrast.",
    textClass: "text-petal-ivory",
  },
  {
    name: "Petal Ivory",
    hex: "#FAF6F0",
    usage: "Secondary background, lace motifs",
    description: "Soft romantic contrast to dark industrial tones.",
    textClass: "text-iron-black",
  },
  {
    name: "Sunflower Gold",
    hex: "#FFD34E",
    usage: "Accent highlights / floral prints",
    description: "Adds life and vibrancy to collections.",
    textClass: "text-iron-black",
  },
  {
    name: "Crimson Bloom",
    hex: "#A11B2A",
    usage: "Floral embroidery, contrast accents",
    description: "Romantic, powerful red for signature details.",
    textClass: "text-petal-ivory",
  },
  {
    name: "Success",
    hex: "#4BA96E",
    usage: "Success states, confirmations",
    description: "Positive feedback and successful actions.",
    textClass: "text-petal-ivory",
  },
  {
    name: "Error",
    hex: "#D64545",
    usage: "Error states, warnings",
    description: "Alert users to errors and critical information.",
    textClass: "text-petal-ivory",
  },
  {
    name: "Info",
    hex: "#3A7FC1",
    usage: "Informational states, tips",
    description: "Neutral information and helpful guidance.",
    textClass: "text-petal-ivory",
  },
]

export function ColorPalette() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {colors.map((color) => (
        <Card key={color.name} className="overflow-hidden border-2 hover:border-gilded-brass transition-colors">
          <div
            className={`h-40 flex items-center justify-center ${color.textClass}`}
            style={{ backgroundColor: color.hex }}
          >
            <div className="text-center space-y-2">
              <div className="text-3xl font-serif font-bold">{color.name}</div>
              <div className="text-sm font-mono opacity-90">{color.hex}</div>
            </div>
          </div>
          <div className="p-6 space-y-3 bg-card">
            <div className="text-sm font-semibold text-gilded-brass uppercase tracking-wide">{color.usage}</div>
            <p className="text-sm text-muted-foreground leading-relaxed">{color.description}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
