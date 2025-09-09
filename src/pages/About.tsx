import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">
            Nossa <span className="text-luxury-gold">Missão</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Na SecureLux, acreditamos que toda mulher merece se sentir segura e elegante. 
            Criamos bolsas que não apenas complementam seu estilo, mas também protegem o que é mais precioso.
          </p>
        </section>

        {/* Story Section */}
        <section className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Fundada em 2020 por duas empreendedoras visionárias, a SecureLux nasceu da necessidade real 
              de unir segurança e sofisticação em um único produto.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Após experiências pessoais com situações de risco, decidimos criar uma solução que permitisse 
              às mulheres se sentirem protegidas sem abrir mão da elegância que merecem.
            </p>
          </div>
          <div className="bg-gradient-to-br from-luxury-gold/10 to-luxury-gold-dark/10 rounded-lg p-8">
            <div className="text-center">
              <Shield className="h-20 w-20 text-luxury-gold mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Proteção é Elegância</h3>
              <p className="text-muted-foreground">
                Cada bolsa SecureLux é uma declaração de independência e sofisticação.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Segurança</h3>
                <p className="text-muted-foreground">
                  Tecnologia de ponta para proteger você em todas as situações
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Qualidade</h3>
                <p className="text-muted-foreground">
                  Materiais premium e artesanato excepcional em cada detalhe
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Empoderamento</h3>
                <p className="text-muted-foreground">
                  Fortalecendo mulheres através de produtos inovadores
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Heart className="h-12 w-12 text-luxury-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Elegância</h3>
                <p className="text-muted-foreground">
                  Design atemporal que valoriza sua personalidade única
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-gradient-to-r from-luxury-black to-luxury-dark rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">Nossa Promessa</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            "Comprometemo-nos a criar produtos que não apenas atendam às suas expectativas, 
            mas as superem. Cada bolsa SecureLux é uma promessa de segurança, qualidade e 
            elegância que acompanhará você em todos os momentos da sua vida."
          </p>
          <div className="mt-8 pt-8 border-t border-luxury-gold/30">
            <p className="text-lg">
              <span className="text-luxury-gold font-semibold">Marina Costa & Isabella Santos</span><br />
              Fundadoras da SecureLux
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;