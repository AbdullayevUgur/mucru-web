import Image from 'next/image'

export default function BrandStory() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-mucru-primary mb-6">
                Heritage & Craftsmanship
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Every piece of Mucru jewelry is a testament to the rich cultural heritage 
                of Azerbaijan. Our master artisans combine centuries-old techniques with 
                contemporary design sensibilities to create jewelry that transcends time.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                From the initial sketch to the final polish, each creation undergoes 
                meticulous attention to detail, ensuring that every piece meets our 
                uncompromising standards of excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-serif text-mucru-primary mb-2">100%</div>
                  <div className="text-slate-600">Handcrafted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-mucru-primary mb-2">Premium</div>
                  <div className="text-slate-600">Materials</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/gold-ring-crafting.png"
                  alt="Mucru artisan at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mucru-primary rounded-full flex items-center justify-center shadow-xl">
                <span className="text-white text-4xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
