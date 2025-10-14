import type { FC } from "react";
import { Button } from "@/components/atoms";

/**
 * ButtonShowcase Component
 * Componente de demostración para mostrar todas las variantes del Button
 */
const ButtonShowcase: FC = () => {
  return (
    <div className="py-8 px-8 bg-white rounded-lg shadow-lg">
      <header>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          🔲 Button Component - Atomic Design
        </h2>
        <p className="text-gray-600">
          Demostración de todas las variantes, tamaños y estados del componente
          Button
        </p>
      </header>

      {/* Variantes */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Variantes</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
        </div>
      </section>

      {/* Tamaños */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Tamaños</h3>
        <div className="flex items-end gap-4">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
          <Button size="icon">🏠</Button>
        </div>
      </section>

      {/* Estados */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Estados</h3>
        <div className="flex gap-4">
          <Button>Normal</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Con iconos */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Con Iconos</h3>
        <div className="flex gap-4">
          <Button leftIcon="⚽" variant="primary">
            Match Day
          </Button>
          <Button rightIcon="➡️" variant="outline">
            Siguiente
          </Button>
          <Button leftIcon="📧" rightIcon="📤" variant="secondary">
            Enviar Email
          </Button>
        </div>
      </section>

      {/* Casos de uso específicos para Match Day */}
      <section>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Casos de uso - Match Day
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="success" leftIcon="✅">
            Fichar Jugador
          </Button>
          <Button variant="warning" leftIcon="⚠️">
            Tarjeta Amarilla
          </Button>
          <Button variant="destructive" leftIcon="🚫">
            Expulsar
          </Button>
          <Button variant="info" leftIcon="📊">
            Estadísticas
          </Button>
          <Button variant="primary" leftIcon="⚽">
            Nuevo Partido
          </Button>
          <Button variant="outline" leftIcon="👥">
            Gestionar Equipo
          </Button>
          <Button variant="secondary" leftIcon="🏆">
            Ver Trofeos
          </Button>
          <Button variant="ghost" leftIcon="⚙️">
            Configuración
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ButtonShowcase;
