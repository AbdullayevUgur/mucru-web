import ProductsGrid from '@/components/products-grid'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Mucru | Luxury Jewelry from Azerbaijan',
  description: 'Explore our collection of handcrafted premium jewelry made with passion in Azerbaijan.',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-mucru-primary mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each piece is meticulously handcrafted with passion and precision, 
            embodying the rich heritage of Azerbaijani artisanship.
          </p>
        </div>
        <ProductsGrid />
      </div>
    </main>
  )
}
