# 🧬 Atomic Design System - Match Day

## 📋 Índice

- [Introducción](#introducción)
- [Metodología](#metodología)
- [Estructura de Carpetas](#estructura-de-carpetas)
- [Niveles de Componentes](#niveles-de-componentes)
- [Reglas y Convenciones](#reglas-y-convenciones)
- [Implementación Actual](#implementación-actual)
- [Guías de Desarrollo](#guías-de-desarrollo)

## 🎯 Introducción

Este proyecto implementa la metodología **Atomic Design** creada por Brad Frost, que organiza los componentes de UI en una jerarquía clara y escalable, desde los elementos más básicos hasta las páginas completas.

## 🔬 Metodología

El sistema se basa en la analogía de la química, donde los componentes se organizan en cinco niveles:

```
Átomos → Moléculas → Organismos → Plantillas → Páginas
```

### 🔸 Beneficios

- **Consistencia**: Componentes reutilizables y coherentes
- **Escalabilidad**: Fácil mantenimiento y extensión
- **Eficiencia**: Desarrollo más rápido mediante reutilización
- **Testeo**: Aislamiento de componentes para pruebas unitarias
- **Documentación**: Clara jerarquía y responsabilidades

## 📁 Estructura de Carpetas

```
src/
├── components/
│   ├── atoms/           # Elementos básicos (Button, Input, Icon)
│   │   ├── Button.tsx
│   │   ├── button.variants.ts
│   │   └── index.ts
│   ├── molecules/       # Combinación de átomos (SearchBox, Card)
│   ├── organisms/       # Secciones complejas (Header, Footer)
│   ├── templates/       # Layouts sin contenido específico
│   └── pages/          # Páginas completas con contenido real
├── utils/
│   └── cn.ts           # Utilidades para clases CSS
```

## ✅ Estado Actual de Migración

### 🔴 **COMPLETADO** - Componentes Reorganizados

#### ⚛️ **Átomos** (`/atoms/`)

- ✅ **Button** - Componente de botón con múltiples variantes y CVA
- ✅ **Logo** - Componente SVG del logotipo con colores customizables
- ✅ **LogoMD** - Logo con navegación integrada

#### 🧬 **Moléculas** (`/molecules/`)

- ✅ **Card** - Tarjeta con header, contenido, lista y botón

#### 🦠 **Organismos** (`/organisms/`)

- ✅ **ToastExample** - Ejemplo de notificaciones
- ✅ **ButtonShowcase** - Demostración de variantes de botones

#### 🗑️ **Eliminados**

- ❌ **AccesButton** - Reemplazado por Button átomo
- ❌ **Counter** - Componente de ejemplo innecesario

### 🔄 **Archivos Actualizados**

- ✅ **MainHeader.tsx** - Imports actualizados, AccessButton → Button
- ✅ **MatchDay.tsx** - Imports actualizados a estructura atómica
- ✅ **Archivos índice** - Creados para cada nivel de componentes

## 🧩 Niveles de Componentes

### 1. ⚛️ ÁTOMOS

**Elementos básicos indivisibles**

- **Propósito**: Componentes que no pueden dividirse más
- **Ejemplos**: Button, Input, Label, Icon, Avatar
- **Características**:
  - Sin lógica de negocio
  - Altamente reutilizables
  - Props tipadas con TypeScript
  - Múltiples variantes usando CVA

**Implementados**:

- ✅ `Button` - Componente de botón con variantes, tamaños y estados

### 2. 🧬 MOLÉCULAS

**Combinación de átomos con un propósito específico**

- **Propósito**: Agrupación de átomos que funcionan juntos
- **Ejemplos**: SearchBox (Input + Button), FormField (Label + Input + Error)
- **Características**:
  - Lógica mínima de interacción
  - Funcionalidad específica
  - Composición de átomos

### 3. 🦠 ORGANISMOS

**Secciones complejas de la interfaz**

- **Propósito**: Componentes complejos que forman secciones de página
- **Ejemplos**: Header, Footer, Sidebar, PlayerCard
- **Características**:
  - Lógica de negocio
  - Gestión de estado
  - Composición de moléculas y átomos

### 4. 📄 PLANTILLAS (TEMPLATES)

**Layouts sin contenido específico**

- **Propósito**: Estructura de página sin contenido real
- **Ejemplos**: DashboardLayout, AuthLayout, MainLayout
- **Características**:
  - Define estructura y posicionamiento
  - Props para contenido dinámico
  - Sin datos específicos

### 5. 🌐 PÁGINAS

**Instancias específicas de plantillas**

- **Propósito**: Páginas completas con contenido real
- **Ejemplos**: HomePage, LoginPage, PlayerProfilePage
- **Características**:
  - Datos y contenido específico
  - Lógica de página completa
  - Integración con estado global

## 📏 Reglas y Convenciones

### 🎨 Naming Conventions

```typescript
// Átomos: Nombre del elemento
(Button.tsx, Input.tsx, Avatar.tsx);

// Moléculas: Funcionalidad específica
(SearchBox.tsx, FormField.tsx, PlayerCard.tsx);

// Organismos: Sección de página
(MainHeader.tsx, PlayersList.tsx, MatchStatistics.tsx);

// Templates: Layout + "Layout"
(DashboardLayout.tsx, AuthLayout.tsx);

// Páginas: Funcionalidad + "Page"
(HomePage.tsx, PlayersPage.tsx, MatchPage.tsx);
```

### 📝 Estructura de Archivos

```typescript
// Para componentes con variantes complejas
Button/
├── Button.tsx           # Componente principal
├── button.variants.ts   # Definición de variantes CVA
├── Button.test.tsx      # Tests unitarios
├── Button.stories.tsx   # Documentación Storybook
└── index.ts            # Exportaciones

// Para componentes simples
Input.tsx
```

### 🔧 Herramientas Obligatorias

#### Class Variance Authority (CVA)

```typescript
// Para definir variantes tipadas
export const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", primary: "..." },
    size: { sm: "...", lg: "..." },
  },
});
```

#### Utility Function (cn)

```typescript
// Para combinar clases de manera inteligente
className={cn(buttonVariants({ variant, size }), className)}
```

#### TypeScript Estricto

```typescript
// Todas las props deben estar tipadas
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary";
  size?: "sm" | "md" | "lg";
}
```

### 🚫 Reglas de Dependencias

```typescript
// ✅ PERMITIDO
Átomos → Ninguna dependencia de componentes
Moléculas → Pueden usar Átomos
Organismos → Pueden usar Átomos + Moléculas
Templates → Pueden usar todos los anteriores
Páginas → Pueden usar todos los anteriores

// ❌ PROHIBIDO
Átomos → No pueden usar Moléculas/Organismos/Templates
Moléculas → No pueden usar Organismos/Templates
Organismos → No pueden usar Templates/Páginas
```

## 🚀 Implementación Actual

### ✅ Completado

#### Átomos

- **Button** (`/components/atoms/Button.tsx`)
  - 10 variantes (default, primary, destructive, etc.)
  - 5 tamaños (sm, default, lg, xl, icon)
  - Estados: loading, disabled
  - Soporte para iconos izquierda/derecha
  - Completamente tipado con TypeScript

#### Utilidades

- **cn** (`/utils/cn.ts`) - Función para combinar clases CSS
- **buttonVariants** (`/components/atoms/button.variants.ts`) - Variantes CVA

#### Demostración

- **ButtonShowcase** - Componente de demostración completo

### 🔄 En Proceso

- Input (Atom)
- Label (Atom)
- SearchBox (Molecule)

### 📋 Pendiente

- Icon (Atom)
- Avatar (Atom)
- FormField (Molecule)
- Card (Molecule)
- Header (Organism)
- Footer actualizado (Organism)

## 📖 Guías de Desarrollo

### 🆕 Creando un Nuevo Átomo

```typescript
// 1. Crear el archivo del componente
// src/components/atoms/Input.tsx

import { forwardRef } from 'react';
import { cn } from '@/utils/cn';
import { inputVariants } from './input.variants';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  className,
  variant,
  size,
  ...props
}, ref) => {
  return (
    <input
      ref={ref}
      className={cn(inputVariants({ variant, size }), className)}
      {...props}
    />
  );
});

export { Input };
export type { InputProps };
```

### 🔧 Definiendo Variantes

```typescript
// src/components/atoms/input.variants.ts
import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "flex h-10 w-full rounded-md border px-3 py-2",
  {
    variants: {
      variant: {
        default: "border-slate-200 focus:border-slate-900",
        error: "border-red-500 focus:border-red-600",
        success: "border-green-500 focus:border-green-600",
      },
      size: {
        sm: "h-8 px-2 text-sm",
        md: "h-10 px-3",
        lg: "h-12 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
```

### 🧪 Testing

```typescript
// src/components/atoms/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders button with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('applies variant classes correctly', () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByText('Primary')).toHaveClass('bg-blue-600');
  });
});
```

### 📚 Exportaciones

```typescript
// src/components/atoms/index.ts
export { Button } from "./Button";
export { Input } from "./Input";
export type { ButtonProps, InputProps } from "./types";

// src/components/index.ts
export * from "./atoms";
export * from "./molecules";
export * from "./organisms";
```

## 🎯 Match Day Específico

### Contexto de Fútbol

Los componentes deben considerar el contexto del fútbol:

```typescript
// Variantes específicas para Match Day
<Button variant="success" leftIcon="⚽">Marcar Gol</Button>
<Button variant="warning" leftIcon="📋">Tarjeta Amarilla</Button>
<Button variant="destructive" leftIcon="🔴">Tarjeta Roja</Button>
```

### Iconografía

- ⚽ Goles, partidos
- 👤 Jugadores
- 🏆 Competiciones, trofeos
- 📊 Estadísticas
- 🏟️ Estadios
- 📋 Tácticas
- ⏱️ Tiempo de juego

---

## 📞 Contacto y Contribución

Este sistema está en desarrollo activo. Para contribuir:

1. **Sigue las convenciones** establecidas
2. **Tipado completo** con TypeScript
3. **Testing obligatorio** para nuevos componentes
4. **Documentación** en código y README
5. **Review** antes de merge

---

_Última actualización: Octubre 2025_
