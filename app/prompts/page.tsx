import { BrandHeader } from "@/components/design-system/brand-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

export default function PromptsPage() {
  return (
    <div className="min-h-screen">
      <BrandHeader />

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto space-y-6 mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-iron-black tracking-tight text-center">Prompts</h1>
          <div className="h-1 w-24 bg-gilded-brass mx-auto" />
          <p className="text-xl text-muted-foreground leading-relaxed text-center">
            Brand prompts and guidelines for creating cohesive visual assets
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-gilded-brass/20">
            <CardHeader>
              <CardTitle className="text-3xl font-serif text-iron-black">Editorial Photography Prompt</CardTitle>
              <CardDescription className="text-lg">
                Used Prompt Base - Free Figures in Editorial Settings to help create brand unity for images and video
                assets.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-petal-ivory border border-gilded-brass/30 rounded-lg p-6">
                <h3 className="text-sm font-semibold text-gilded-brass uppercase tracking-wide mb-3">
                  Prompt Template
                </h3>
                <p className="text-iron-black leading-relaxed font-mono text-sm">
                  "A confident [woman/man style: e.g., blonde woman in a red cut-out dress with gold chain details]
                  standing on a [setting: e.g., seaside balcony at sunset, with ocean view and glowing orange sky]
                  during [weather or atmosphere: e.g., golden hour, soft rain, overcast haze, dramatic storm light]. The
                  mood is cinematic and elegant. posing naturally, with gentle shadows and an evocative color palette.
                  The scene is fashion-forward and emotionally ambient. Editorial-style photography with natural light,
                  compositional grace, and emotional depth. --ar 6:7 --v 7 --profile p6y8asw"
                </p>
              </div>

              <div className="space-y-3 pt-4">
                <h4 className="text-lg font-semibold text-iron-black">Key Elements:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-gilded-brass mt-1">•</span>
                    <span>
                      <strong className="text-iron-black">Subject Style:</strong> Describe the model's appearance and
                      outfit with specific details
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gilded-brass mt-1">•</span>
                    <span>
                      <strong className="text-iron-black">Setting:</strong> Define the location and background elements
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gilded-brass mt-1">•</span>
                    <span>
                      <strong className="text-iron-black">Atmosphere:</strong> Specify lighting conditions and weather
                      for mood
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gilded-brass mt-1">•</span>
                    <span>
                      <strong className="text-iron-black">Style Direction:</strong> Cinematic, elegant, fashion-forward
                      with editorial quality
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-12 mt-16">
            <h2 className="text-4xl font-serif font-bold text-iron-black text-center mb-8">
              Prompt Transformation Examples
            </h2>

            {/* Section 1: Floral Embroidery */}
            <Card className="border-gilded-brass/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-iron-black">Floral Embroidery Editorial</CardTitle>
                <CardDescription>
                  Transforming theatrical costume styling into refined editorial fashion photography
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="before" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="before">Before</TabsTrigger>
                    <TabsTrigger value="after">After</TabsTrigger>
                  </TabsList>
                  <TabsContent value="before" className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative aspect-[6/7] w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image
                          src="/prompts/before1.png"
                          alt="Before: Theatrical floral embroidered coat styling"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="prose prose-sm max-w-none md:w-1/2">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-iron-black">Initial Prompt:</strong> Create a photo real image of a model showcasing a steam punk style long coat. The model is a tall, curvy asian woman with spiky red bob cut hair, a mischievous smirk barely tilts her lips on her elegant face. She has steam punk style round sun glasses sitting on top of her head. She is wearing a cream crop top and black puffy short shorts and the long dark steam punk style overcoat that stops at her calves. The coat is dark gray/black leather, with a thin collar. The bottom is heavily embroidered pink to white rose petals. The petal embroidery starts at the collar with ruby red petals falling to the bottom turning pink and then white at the bottom of the cloak like they are losing their color the further they fall. The collar and back should only have a few petals, while bottom is heavily embroidered. The model is also wearing dark rose ankle boots with rose shaped metal buckles and rose shaped heels that. She is posing with grace and confidence, a hand on her hip, with a defiant fun attitude. She is standing in a brightly lit cobbled street looking down to the camera. There are electric wires criss crossing the skies of the street, from poles and buildings. The buildings in a steam punk theme are bright and colorful with gears and mechanical parts built into them. The evening sunlight cuts through steam behind the model to shine up on her, the street and the buildings. Style: steampunk floral. --chaos 5 --v 7 --stylize 150
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="after" className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative aspect-[6/7] w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image
                          src="/prompts/after1.png"
                          alt="After: Refined editorial floral embroidery"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="prose prose-sm max-w-none md:w-1/2">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-iron-black">Refined Prompt:</strong> A confident asian woman with short spiky red hair, wearing a white top, chic black shorts, black rose patterned high heeled ankle boots, and a calf length black steam punk style velvet coat with roses embroidered on it, the petals embroidery starts at the collar of the coat with ruby red petals falling to the bottom turning pink and then white at the bottom of the coat like they are losing their color the further they fall, the standing on a cobbled street with industrial buildings behind her during golden hour with lens flare. The mood is cinematic and elegant. posing naturally looking down at the camera, with gentle shadows and an evocative color palette. The scene is fashion-forward and emotionally ambient. Editorial-style photography with natural light, compositional grace, and emotional depth. --chaos 5 --ar 6:7 --v 7 --stylize 50 --p p6y8asw
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Section 2: Sunflower Collection */}
            <Card className="border-gilded-brass/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-iron-black">Sunflower Gold Collection</CardTitle>
                <CardDescription>
                  Balancing bold prints with editorial sophistication and natural lighting
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="before" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="before">Before</TabsTrigger>
                    <TabsTrigger value="after">After</TabsTrigger>
                  </TabsList>
                  <TabsContent value="before" className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative aspect-[6/7] w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image
                          src="/prompts/before2.png"
                          alt="Before: Sunflower print with harsh lighting"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="prose prose-sm max-w-none md:w-1/2">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-iron-black">Initial Prompt:</strong> Create image of a Indian model showcasing a sunflower themed outfit. The model is around 5'3 height, curvy with an asymmetrical pixie cut black hair, spiked to frame her face. Her back is to the camera at an angle and she is looking over her shoulder down at the camera showing her side and back, her hand in the pockets of her pants. The top is steam punk crop top made with thick rigid fabric, with bright sunflower yellow mesh fabric on the sides. The back of the top is full print of one sunflower zoomed in, the sleeves are white and stop at her elbows. For the bottom she is wearing low hung butt and hip hugging bright yellow shorts that have wide legs and stop cinched just past her knees with black leather buckles. She has brown leather high heeled sandals on her feet and is standing on a cement block railing over looking a steam punk style city. The city view is obscured a little with steam, has layers of red brick building, the sun light is streaming across hitting the model and the buildings. --chaos 5 --v 7 --stylize 150
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="after" className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative aspect-[6/7] w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image
                          src="/prompts/after2.png"
                          alt="After: Refined sunflower editorial with golden hour"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="prose prose-sm max-w-none md:w-1/2">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-iron-black">Refined Prompt:</strong> A confident indian woman with her hair in a pony tails with a shaved undercut, wearing a steam punk style crop top with a big bright sunflower in the center, and white lace fabric on the sides and elbow length sleeves, chic low hip hugging yellow pants that have wide legs and stop cinched just past her knees with black leather buckles, and brown leather heeled sandals, the standing on a cement balcony with industrial buildings behind her during golden hour with lens flare. The mood is cinematic and elegant. posing naturally looking down at the camera, with gentle shadows and an evocative color palette. The scene is fashion-forward and emotionally ambient. Editorial-style photography with natural light, compositional grace, and emotional depth. --chaos 5 --ar 6:7 --v 7 --stylize 50 --p p6y8asw
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Section 3: Victorian Steampunk */}
            <Card className="border-gilded-brass/20">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-iron-black">Victorian Steampunk Elegance</CardTitle>
                <CardDescription>
                  Translating ornate period details into modern luxury fashion storytelling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="before" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="before">Before</TabsTrigger>
                    <TabsTrigger value="after">After</TabsTrigger>
                  </TabsList>
                  <TabsContent value="before" className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative aspect-[6/7] w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image
                          src="/prompts/before3.png"
                          alt="Before: Ornate Victorian costume styling"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="prose prose-sm max-w-none md:w-1/2">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-iron-black">Initial Prompt:</strong> Create image of an african model showcasing a bluebell themed outfit. The model is around 5'5 height, 170lbs, curvy with dreadlocks weaved with bright blue satin ribbon. The camera is facing her, she is looking down with a subtle smile. She is holding white lace parasol, wearing a bluebell blue dress that has a lace high collar, white and blue lace corset, sleeveless. The skirt is puffy and folds inward with folds in steampunk style. She wearing heavy healed blue boots with bluebells on them. She is standing in the middle of a cobbled street with a steam punk industrial buildings on either side, steam rising from behind her. She looks fiercely elegant stepping out of the steam. --chaos 5 --v 7 --stylize 150
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="after" className="space-y-4">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      <div className="relative aspect-[6/7] w-full md:w-1/2 overflow-hidden rounded-lg">
                        <Image
                          src="/prompts/after3.png"
                          alt="After: Modern editorial with Victorian-inspired details"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="prose prose-sm max-w-none md:w-1/2">
                        <p className="text-muted-foreground leading-relaxed">
                          <strong className="text-iron-black">Refined Prompt:</strong> A confident african woman with her hair in shoulder length curls, wearing a chic white lace sleeveless top, with a steam punk style ultramarine blue satin puffy asymmetrical skirt that folds inwards and has bluebells embroidered on it , with blue leather buckled floral shoes, standing on a wooden dock with industrial buildings behind her during golden hour with lens flare. The mood is cinematic and elegant. posing naturally looking down at the camera, with gentle shadows and an evocative color palette. The scene is fashion-forward and emotionally ambient. Editorial-style photography with natural light, compositional grace, and emotional depth. --chaos 5 --ar 6:7 --v 7 --stylize 50 --p p6y8asw
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="bg-iron-black text-petal-ivory py-12 mt-24">
        <div className="container mx-auto px-4 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 border-2 border-gilded-brass rounded-full flex items-center justify-center">
              <span className="text-gilded-brass text-xs font-serif">F</span>
            </div>
            <span className="text-2xl font-serif font-bold">Fleur du Fer</span>
          </div>
          <p className="text-sm text-petal-ivory/70">Fleur du Fer © 2025 • Where Iron Meets Flower</p>
        </div>
      </footer>
    </div>
  )
}
