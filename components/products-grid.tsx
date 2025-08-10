'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
  category: string
  hashtags: string[]
}

export default function ProductsGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [filter, setFilter] = useState('All')
  const [products, setProducts] = useState<Product[]>([])

  // Load products from localStorage
  useEffect(() => {
    const savedProducts = localStorage.getItem('mucru-products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      // Fallback to default products if none in localStorage
      const defaultProducts: Product[] = [
        {
          id: 1,
          name: "Baku Sunset Ring",
          price: "$1,250",
          image: "/placeholder-wkuc6.png",
          description: "Inspired by the golden sunsets over Baku, this exquisite ring features a rare citrine stone set in 18k gold.",
          category: "Rings",
          hashtags: ["#MucruRings", "#LuxuryJewelry", "#BakuSunset"]
        },
        {
          id: 2,
          name: "Caspian Pearl Necklace",
          price: "$2,100",
          image: "/placeholder-zqn10.png",
          description: "A stunning necklace featuring freshwater pearls, each carefully selected for its lustrous beauty.",
          category: "Necklaces",
          hashtags: ["#MucruNecklaces", "#Pearls", "#CaspianSea"]
        },
        {
          id: 3,
          name: "Heritage Earrings",
          price: "$890",
          image: "/placeholder-b6xgm.png",
          description: "Traditional Azerbaijani motifs reimagined in contemporary design, crafted in sterling silver.",
          category: "Earrings",
          hashtags: ["#MucruEarrings", "#Heritage", "#Azerbaijan"]
        }
      ]
      setProducts(defaultProducts)
    }
  }, [])

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))]
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(product => product.category === filter)

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full transition-all duration-200 ${
              filter === category
                ? 'bg-mucru-primary text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => setSelectedProduct(product)}
          >
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg mb-4 bg-white">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-medium">View Details</span>
              </div>
              <Badge className="absolute top-3 left-3 bg-mucru-primary">
                {product.category}
              </Badge>
            </div>
            <div className="p-4 bg-white rounded-b-lg">
              <h3 className="text-xl font-serif text-mucru-primary mb-2">{product.name}</h3>
              <p className="text-lg font-medium text-slate-700 mb-2">{product.price}</p>
              <div className="flex flex-wrap gap-1">
                {product.hashtags.map((tag, index) => (
                  <span key={index} className="text-xs text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProduct && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-serif text-mucru-primary">
                  {selectedProduct.name}
                </DialogTitle>
              </DialogHeader>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="text-2xl font-medium text-slate-700">
                    {selectedProduct.price}
                  </div>
                  <Badge className="bg-mucru-primary">
                    {selectedProduct.category}
                  </Badge>
                  <p className="text-slate-600 leading-relaxed">
                    {selectedProduct.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.hashtags.map((tag, index) => (
                      <span key={index} className="text-sm text-mucru-primary bg-slate-100 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
