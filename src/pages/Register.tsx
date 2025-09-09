import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Shield, Mail, User, Lock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erro na senha",
        description: "As senhas não coincidem.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Conta criada!",
      description: "Bem-vinda à família SecureLux. Um e-mail de confirmação foi enviado.",
    });
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-luxury-light to-background">
      <div className="container max-w-md mx-auto">
        <Card className="shadow-luxury">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-4">
              <Shield className="h-12 w-12 text-luxury-gold" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Junte-se à <span className="text-luxury-gold">SecureLux</span>
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              Crie sua conta e descubra o luxo protegido
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Nome</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Seu nome"
                      className="pl-10"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Sobrenome"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Telefone */}
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  required
                />
              </div>

              {/* Senha */}
              <div className="space-y-2">
                <Label htmlFor="password">Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {/* Confirmar Senha */}
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirme sua senha"
                    className="pl-10 pr-10"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" variant="luxury" className="w-full" size="lg">
                Criar Conta SecureLux
              </Button>
            </form>

            <div className="mt-6">
              <Separator />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Já possui uma conta?{" "}
                <a href="#" className="text-luxury-gold hover:underline font-medium">
                  Fazer login
                </a>
              </p>
            </div>

            {/* Benefits */}
            <div className="mt-8 p-4 bg-luxury-light rounded-lg">
              <h4 className="font-semibold mb-3 text-center">Benefícios Exclusivos</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-luxury-gold rounded-full" />
                  Acesso antecipado a novos produtos
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-luxury-gold rounded-full" />
                  Descontos exclusivos de até 20%
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-luxury-gold rounded-full" />
                  Atendimento VIP personalizado
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 bg-luxury-gold rounded-full" />
                  Frete grátis em todas as compras
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="text-center mt-6 text-xs text-muted-foreground">
          <p>🔒 Seus dados estão protegidos com criptografia SSL</p>
          <p>Política de Privacidade • Termos de Uso</p>
        </div>
      </div>
    </div>
  );
};

export default Register;