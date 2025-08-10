'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Trash2, Edit, Plus, Eye, EyeOff } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: string
  image: string
  description: string
  category: string
  hashtags: string[]
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  // Load products from localStorage on component mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('mucru-products')
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts))
    } else {
      // Initialize with default products
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
      localStorage.setItem('mucru-products', JSON.stringify(defaultProducts))
    }
  }, [])

  // Save products to localStorage whenever products change
  useEffect(() => {
    if (products.length > 0) {
      localStorage.setItem('mucru-products', JSON.stringify(products))
    }
  }, [products])

  const handleLogin = () => {
    // Simple password check (in production, use proper authentication)
    if (password === 'mucru2024') {
      setIsAuthenticated(true)
    } else {
      alert('Incorrect password')
    }
  }

  const handleAddProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...productData,
      id: Math.max(...products.map(p => p.id), 0) + 1
    }
    setProducts([...products, newProduct])
    setIsAddingProduct(false)
  }

  const handleEditProduct = (productData: Product) => {
    setProducts(products.map(p => p.id === productData.id ? productData : p))
    setEditingProduct(null)
  }

  const handleDeleteProduct = (id: number) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id))
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-serif text-mucru-primary">
              Mucru Admin Panel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
                  placeholder="Enter admin password"
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button onClick={handleLogin} className="w-full bg-mucru-primary hover:bg-mucru-primary/90">
              Login
            </Button>
            <p className="text-sm text-slate-500 text-center">
              Demo password: mucru2024
            </p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif text-mucru-primary">Product Management</h1>
          <div className="flex gap-4">
            <Dialog open={isAddingProduct} onOpenChange={setIsAddingProduct}>
              <DialogTrigger asChild>
                <Button className="bg-mucru-primary hover:bg-mucru-primary/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Product</DialogTitle>
                </DialogHeader>
                <ProductForm onSubmit={handleAddProduct} onCancel={() => setIsAddingProduct(false)} />
              </DialogContent>
            </Dialog>
            <Button 
              variant="outline" 
              onClick={() => setIsAuthenticated(false)}
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-lg text-mucru-primary">{product.name}</h3>
                  <Badge>{product.category}</Badge>
                </div>
                <p className="text-xl font-semibold text-slate-700 mb-2">{product.price}</p>
                <p className="text-sm text-slate-600 mb-3 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => setEditingProduct(product)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>Edit Product</DialogTitle>
                        </DialogHeader>
                        <ProductForm 
                          product={editingProduct} 
                          onSubmit={handleEditProduct} 
                          onCancel={() => setEditingProduct(null)} 
                        />
                      </DialogContent>
                    </Dialog>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => handleDeleteProduct(product.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

interface ProductFormProps {
  product?: Product | null
  onSubmit: (product: any) => void
  onCancel: () => void
}

function ProductForm({ product, onSubmit, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    price: product?.price || '',
    image: product?.image || '',
    description: product?.description || '',
    category: product?.category || 'Rings',
    hashtags: product?.hashtags?.join(', ') || ''
  })

  const categories = ['Rings', 'Necklaces', 'Earrings', 'Bracelets', 'Pendants', 'Sets']

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const productData = {
      ...formData,
      hashtags: formData.hashtags.split(',').map(tag => tag.trim()).filter(tag => tag),
      ...(product && { id: product.id })
    }
    onSubmit(productData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Product Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            placeholder="$1,250"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="image">Image URL</Label>
        <Input
          id="image"
          value={formData.image}
          onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          placeholder="/path/to/image.jpg"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="hashtags">Hashtags (comma separated)</Label>
        <Input
          id="hashtags"
          value={formData.hashtags}
          onChange={(e) => setFormData({ ...formData, hashtags: e.target.value })}
          placeholder="#MucruRings, #LuxuryJewelry, #Handcrafted"
        />
      </div>

      <div className="flex justify-end gap-2 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="bg-mucru-primary hover:bg-mucru-primary/90">
          {product ? 'Update Product' : 'Add Product'}
        </Button>
      </div>
    </form>
  )
}
