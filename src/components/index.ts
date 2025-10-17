/**
 * Components Index - Atomic Design System
 *
 * Sistema de componentes organizado según la metodología Atomic Design:
 * - Atoms: Elementos básicos e indivisibles
 * - Molecules: Combinaciones de átomos con funcionalidad específica
 * - Organisms: Secciones complejas de la interfaz
 * - Templates: Estructuras de página reutilizables
 */

// Atoms
export * from "./atoms";

// Molecules
export * from "./molecules";

// Organisms
export * from "./organisms";

// Templates (cuando sean creados)
export * from "./templates";

// Re-exports for convenience
export { Button, Heading, Text, List, ListItem, Logo } from "./atoms";
export { Card, LogoBrand, ServiceCard } from "./molecules";
export {
  ToastExample,
  ButtonShowcase,
  LogoBrandShowcase,
  ServicesSection,
  ContactSection,
  Picture,
  FeatureList,
} from "./organisms";
