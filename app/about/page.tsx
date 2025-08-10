import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Us - Mucru | Luxury Jewelry from Azerbaijan',
  description: 'Learn about Mucru\'s mission, values, and the artisanal craftsmanship behind our luxury jewelry.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif text-mucru-primary mb-6">
              About Mucru
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Where tradition meets contemporary elegance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif text-mucru-primary mb-6">Our Story</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Born from the rich cultural heritage of Azerbaijan, Mucru represents the perfect 
                fusion of traditional craftsmanship and modern design sensibilities. Our name 
                reflects our commitment to creating jewelry that transcends time and trends.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Each piece in our collection is meticulously handcrafted by skilled artisans 
                who have inherited centuries-old techniques passed down through generations. 
                We believe that true luxury lies not just in precious materials, but in the 
                passion and expertise that goes into every creation.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder-hk63s.png"
                alt="Mucru craftsmanship"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-mucru-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-serif text-mucru-primary mb-3">Premium Quality</h3>
              <p className="text-slate-600">
                Only the finest materials and gemstones are selected for our collections.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-mucru-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-serif text-mucru-primary mb-3">Heritage</h3>
              <p className="text-slate-600">
                Rooted in Azerbaijani tradition, each piece tells a story of cultural richness.
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-mucru-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-serif text-mucru-primary mb-3">Artisanship</h3>
              <p className="text-slate-600">
                Handcrafted with passion by master jewelers using time-honored techniques.
              </p>
            </div>
          </div>

          <div className="bg-mucru-primary text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-serif mb-4">Made in Azerbaijan</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              We are proud to represent the artistic excellence of Azerbaijan on the global stage, 
              creating jewelry that embodies the spirit and sophistication of our homeland.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
