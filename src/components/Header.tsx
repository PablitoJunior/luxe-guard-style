import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingBag, User, Shield } from "lucide-react";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-luxury-gold" />
          <span className="text-2xl font-bold bg-gradient-to-r from-luxury-gold to-luxury-gold-dark bg-clip-text text-transparent">
            SecureLux
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
              isActive("/") ? "text-luxury-gold" : "text-foreground"
            }`}
          >
            Início
          </Link>
          <Link 
            to="/sobre" 
            className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
              isActive("/sobre") ? "text-luxury-gold" : "text-foreground"
            }`}
          >
            Sobre Nós
          </Link>
          <Link 
            to="/produtos" 
            className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
              isActive("/produtos") ? "text-luxury-gold" : "text-foreground"
            }`}
          >
            Produtos
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/carrinho">
            <Button variant="ghost" size="sm">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cadastro">
            <Button variant="luxury" size="sm">
              <User className="h-4 w-4 mr-2" />
              Conta
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;