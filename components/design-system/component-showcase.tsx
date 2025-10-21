import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Flower2, ShoppingBag, Heart, Star } from "lucide-react"

export function ComponentShowcase() {
  return (
    <div className="space-y-12" id="components">
      {/* Buttons */}
      <Card className="p-8 space-y-6 border-2">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-iron-black">Buttons</h3>
          <p className="text-sm text-muted-foreground">Primary actions and interactions</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gilded-brass hover:bg-gilded-brass/90 text-iron-black">Primary Button</Button>
          <Button variant="secondary" className="bg-oxide-blue hover:bg-oxide-blue/90 text-petal-ivory">
            Secondary Button
          </Button>
          <Button
            variant="outline"
            className="border-2 border-gilded-brass text-iron-black hover:bg-gilded-brass/10 bg-transparent"
          >
            Outline Button
          </Button>
          <Button variant="ghost" className="text-gilded-brass hover:text-gilded-brass/80 hover:bg-gilded-brass/10">
            Ghost Button
          </Button>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button className="bg-gilded-brass hover:bg-gilded-brass/90 text-iron-black" size="lg">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Shop Collection
          </Button>
          <Button className="bg-crimson-bloom hover:bg-crimson-bloom/90 text-petal-ivory" size="lg">
            <Heart className="mr-2 h-5 w-5" />
            Add to Wishlist
          </Button>
        </div>
      </Card>

      {/* Badges */}
      <Card className="p-8 space-y-6 border-2">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-iron-black">Badges</h3>
          <p className="text-sm text-muted-foreground">Labels and status indicators</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-gilded-brass text-iron-black">New Arrival</Badge>
          <Badge className="bg-oxide-blue text-petal-ivory">Limited Edition</Badge>
          <Badge className="bg-sunflower-gold text-iron-black">Best Seller</Badge>
          <Badge className="bg-crimson-bloom text-petal-ivory">Sale</Badge>
          <Badge variant="outline" className="border-2 border-gilded-brass text-iron-black">
            Handcrafted
          </Badge>
        </div>
      </Card>

      {/* Product Cards */}
      <Card className="p-8 space-y-6 border-2">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-iron-black">Product Cards</h3>
          <p className="text-sm text-muted-foreground">Showcase luxury fashion items</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Victorian Lace Gown", price: "$2,450", badge: "New" },
            { name: "Brass Gear Necklace", price: "$890", badge: "Limited" },
            { name: "Floral Embroidered Jacket", price: "$1,680", badge: "Bestseller" },
          ].map((product, i) => (
            <Card
              key={i}
              className="overflow-hidden border-2 hover:border-gilded-brass transition-all hover:shadow-lg group"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-petal-ivory to-muted relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Flower2 className="w-24 h-24 text-gilded-brass/20 group-hover:scale-110 transition-transform" />
                </div>
                <Badge className="absolute top-4 right-4 bg-gilded-brass text-iron-black">{product.badge}</Badge>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="text-xl font-serif font-semibold text-iron-black group-hover:text-gilded-brass transition-colors">
                  {product.name}
                </h4>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gilded-brass">{product.price}</span>
                  <Button size="sm" className="bg-oxide-blue hover:bg-oxide-blue/90 text-petal-ivory">
                    View
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Card>

      {/* Form Elements */}
      <Card className="p-8 space-y-6 border-2">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-iron-black">Form Elements</h3>
          <p className="text-sm text-muted-foreground">Input fields and form controls</p>
        </div>
        <div className="max-w-md space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-iron-black">Email Address</label>
            <Input
              type="email"
              placeholder="your@email.com"
              className="border-2 focus:border-gilded-brass focus:ring-gilded-brass"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-iron-black">Full Name</label>
            <Input
              type="text"
              placeholder="Enter your name"
              className="border-2 focus:border-gilded-brass focus:ring-gilded-brass"
            />
          </div>
          <Button className="w-full bg-gilded-brass hover:bg-gilded-brass/90 text-iron-black">
            Subscribe to Newsletter
          </Button>
        </div>
      </Card>

      {/* Testimonial Card */}
      <Card className="p-8 space-y-6 border-2 border-gilded-brass bg-gradient-to-br from-petal-ivory to-white">
        <div className="space-y-2">
          <h3 className="text-2xl font-serif font-bold text-iron-black">Testimonial</h3>
          <p className="text-sm text-muted-foreground">Customer reviews and social proof</p>
        </div>
        <div className="max-w-2xl space-y-4">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-sunflower-gold text-sunflower-gold" />
            ))}
          </div>
          <blockquote className="text-xl italic leading-relaxed text-iron-black">
            "Fleur du Fer captures the essence of timeless elegance. Each piece is a work of art that seamlessly blends
            strength and beauty. Absolutely exquisite craftsmanship."
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gilded-brass/20 flex items-center justify-center">
              <span className="text-gilded-brass font-serif font-bold">EC</span>
            </div>
            <div>
              <div className="font-semibold text-iron-black">Eleanor Chambers</div>
              <div className="text-sm text-muted-foreground">Fashion Editor, Vogue</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
