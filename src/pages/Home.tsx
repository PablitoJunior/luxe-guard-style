import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Shield, Camera, Smartphone, Star } from "lucide-react";
import heroImage from "@/assets/hero-bag.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})` 
          }}
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Elegância com
            <span className="block bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent">
              Segurança Total
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Bolsas luxuosas com tecnologia de câmera integrada para mulheres que valorizam estilo e proteção
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/produtos">
              <Button variant="luxury" size="lg" className="w-full sm:w-auto">
                Descobrir Coleção
              </Button>
            </Link>
            <Link to="/sobre">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white hover:text-luxury-black">
                Nossa Missão
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-luxury-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por que escolher SecureLux?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combinamos o melhor do design italiano com tecnologia de segurança de ponta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Camera className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Câmera Ultra HD</h3>
                <p className="text-muted-foreground">
                  Câmera discreta de alta definição com gravação em 4K e visão noturna
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">App Inteligente</h3>
                <p className="text-muted-foreground">
                  Controle total via smartphone com alertas em tempo real e armazenamento na nuvem
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proteção Premium</h3>
                <p className="text-muted-foreground">
                  Material anti-furto com fechos inteligentes e rastreamento GPS integrado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Confiança de Clientes Exclusivos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-luxury-gold fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">
                  "Finalmente uma bolsa que combina elegância com a segurança que preciso. 
                  A qualidade é excepcional e a tecnologia é impressionante."
                </p>
                <div className="font-semibold">- Marina Silva, Empresária</div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="pt-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-luxury-gold fill-current" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">
                  "A SecureLux redefiniu minha percepção sobre acessórios de luxo. 
                  É muito mais que uma bolsa, é tranquilidade."
                </p>
                <div className="font-semibold">- Ana Carolina, Advogada</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-luxury-black to-luxury-dark text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-4">Pronta para a Revolução?</h2>
          <p className="text-xl mb-8 opacity-90">
            Junte-se às mulheres mais sofisticadas que escolheram segurança sem abrir mão do estilo
          </p>
          <Link to="/produtos">
            <Button variant="luxury" size="lg">
              Explorar Coleção
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;