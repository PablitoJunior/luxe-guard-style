import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Trash2, Plus, Minus, ShoppingBag, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import bagClassic from "@/assets/bag-classic.jpg";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Cart = () => {
  const { toast } = useToast();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "SecureLux Classic",
      price: 2499,
      image: bagClassic,
      quantity: 1,
    },
    {
      id: 2,
      name: "SecureLux Executive",
      price: 3499,
      image: bagClassic, 
      quantity: 1,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removido",
      description: "Produto removido do carrinho.",
    });
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "luxo10") {
      toast({
        title: "Cupom aplicado!",
        description: "Desconto de 10% aplicado com sucesso.",
      });
    } else {
      toast({
        title: "Cupom inválido",
        description: "Código de desconto não encontrado.",
        variant: "destructive",
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 150; // Frete grátis acima de R$ 5000
  const discount = couponCode.toLowerCase() === "luxo10" ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handleCheckout = () => {
    toast({
      title: "Redirecionando...",
      description: "Você será redirecionado para o pagamento seguro.",
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-20">
        <div className="container">
          <div className="text-center">
            <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-muted-foreground mb-8">
              Adicione alguns produtos à sua coleção SecureLux
            </p>
            <Button variant="luxury" size="lg">
              Explorar Produtos
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">
          Meu <span className="text-luxury-gold">Carrinho</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                      <p className="text-luxury-gold font-bold text-xl">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button 
                        variant="outline" 
                        size="icon"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frete</span>
                    <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                      {shipping === 0 ? "GRÁTIS" : formatPrice(shipping)}
                    </span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-luxury-gold">{formatPrice(total)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coupon Code */}
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Código de Desconto</h3>
                <div className="flex gap-2">
                  <Input 
                    placeholder="Digite seu cupom"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                  />
                  <Button variant="outline" onClick={applyCoupon}>
                    Aplicar
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Experimente: LUXO10 para 10% de desconto
                </p>
              </CardContent>
            </Card>

            {/* Checkout Button */}
            <Button 
              variant="luxury" 
              size="lg" 
              className="w-full"
              onClick={handleCheckout}
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Finalizar Compra
            </Button>

            {/* Security Info */}
            <div className="text-center text-xs text-muted-foreground">
              <p>🔒 Pagamento 100% seguro</p>
              <p>Aceitamos cartões de crédito e PIX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;