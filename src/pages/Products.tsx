import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Camera, Wifi, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import bagClassic from "@/assets/bag-classic.jpg";
import bagExecutive from "@/assets/bag-executive.jpg";
import bagElegance from "@/assets/bag-elegance.jpg";
import bagCompact from "@/assets/bag-compact.jpg";
import bagBusiness from "@/assets/bag-business.jpg";
import bagLuxury from "@/assets/bag-luxury.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  features: string[];
  isPopular?: boolean;
}

const Products = () => {
  const { toast } = useToast();
  const [cart, setCart] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "SecureLux Classic",
      price: 2499,
      originalPrice: 2999,
      image: bagClassic,
      features: ["Câmera HD", "GPS", "App Mobile", "Couro Italiano"],
      isPopular: true,
    },
    {
      id: 2,
      name: "SecureLux Executive",
      price: 3499,
      image: bagExecutive,
      features: ["Câmera 4K", "GPS", "Carregamento Wireless", "Couro Premium"],
    },
    {
      id: 3,
      name: "SecureLux Elegance",
      price: 4299,
      image: bagElegance,
      features: ["Câmera 4K Pro", "GPS", "IA Integrada", "Couro Hermès"],
    },
    {
      id: 4,
      name: "SecureLux Compact",
      price: 1899,
      image: bagCompact,
      features: ["Câmera HD", "GPS Básico", "App Mobile", "Couro Sintético"],
    },
    {
      id: 5,
      name: "SecureLux Business",
      price: 3899,
      image: bagBusiness,
      features: ["Câmera 4K", "GPS Avançado", "Compartimento Laptop", "Couro Executive"],
    },
    {
      id: 6,
      name: "SecureLux Luxury Edition",
      price: 5999,
      image: bagLuxury,
      features: ["Câmera 8K", "GPS Premium", "Diamantes", "Crocodilo Legítimo"],
    },
  ];

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
    toast({
      title: "Produto adicionado!",
      description: "Item adicionado ao carrinho com sucesso.",
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Nossa <span className="text-luxury-gold">Coleção</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra a perfeita combinação entre elegância e tecnologia de segurança
          </p>
        </section>

        {/* Products Grid */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-luxury transition-all duration-300">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.isPopular && (
                  <Badge className="absolute top-4 left-4 bg-luxury-gold text-luxury-black">
                    Mais Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2">
                  <Camera className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl font-bold text-luxury-gold">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                <div className="space-y-2 mb-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-luxury-gold rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4" />
                    Garantia 2 anos
                  </div>
                  <div className="flex items-center gap-1">
                    <Wifi className="h-4 w-4" />
                    Conectividade 5G
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="luxury" 
                  className="w-full"
                  onClick={() => addToCart(product.id)}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </CardFooter>
            </Card>
          ))}
        </section>

        {/* Features Section */}
        <section className="mt-20 bg-luxury-light rounded-lg p-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Tecnologia de <span className="text-luxury-gold">Ponta</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <Camera className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Câmera Integrada</h3>
              <p className="text-muted-foreground">
                Gravação em alta definição com ativação por movimento
              </p>
            </div>
            <div>
              <Wifi className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Conectividade 5G</h3>
              <p className="text-muted-foreground">
                Transmissão em tempo real para seu smartphone
              </p>
            </div>
            <div>
              <Shield className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proteção Total</h3>
              <p className="text-muted-foreground">
                Criptografia de dados e armazenamento seguro na nuvem
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;