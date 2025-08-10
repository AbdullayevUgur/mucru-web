import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder-bmrcn.png"
          alt="Mucru luxury jewelry collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
          Timeless Elegance
          <span className="block text-3xl md:text-4xl font-light mt-2 text-slate-200">
            Crafted in Azerbaijan
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
          Handcrafted premium jewelry made with passion, 
          where traditional artisanship meets contemporary design
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-mucru-primary hover:bg-mucru-primary/90 text-white px-8 py-3 text-lg"
          >
            <Link href="/products">Explore Our Collection</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-mucru-primary px-8 py-3 text-lg"
          >
            <Link href="/about">Our Story</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
