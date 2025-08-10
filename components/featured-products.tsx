'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
  category: string
  hashtags: string[]
}

const FeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const savedProducts = localStorage.getItem('mucru-products')
    if (savedProducts) {
      const allProducts = JSON.parse(savedProducts)
      setProducts(allProducts.slice(0, 3)) // Show first 3 products
    }
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-mucru-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our most beloved pieces, each telling a unique story 
            of Azerbaijani artisanship and timeless elegance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-xl font-serif text-mucru-primary mb-2">{product.name}</h3>
              <p className="text-lg font-medium text-slate-700">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-mucru-primary hover:bg-mucru-primary/90">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
