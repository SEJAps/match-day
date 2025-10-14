# 🔔 Sistema de Notificaciones - React Hot Toast

## Implementación completada ✅

Se ha implementado **react-hot-toast** globalmente en la aplicación Match Day con las siguientes características:

## 📦 Configuración Global

### Ubicación: `src/main.tsx`

- Toaster configurado globalmente
- Posición: top-right
- Temas personalizados para éxito/error
- Duración configurada por tipo

## 🎯 Hook Personalizado: `useNotifications`

### Ubicación: `src/hooks/useNotifications.ts`

### Métodos disponibles:

#### Básicas

- `showSuccess(message, options?)` - Notificación de éxito
- `showError(message, options?)` - Notificación de error
- `showInfo(message, options?)` - Notificación informativa
- `showWarning(message, options?)` - Notificación de advertencia
- `showLoading(message?)` - Notificación de carga

#### Específicas de Match Day

- `showMatchUpdate(message)` - Actualizaciones de partido ⚽
- `showPlayerNotification(message)` - Notificaciones de jugadores 👤
- `showTeamNotification(message)` - Notificaciones de equipo 🏆

#### Utilidades

- `dismissToast(toastId)` - Cerrar notificación específica
- `dismissAll()` - Cerrar todas las notificaciones

## 🚀 Ejemplo de uso

```tsx
import { useNotifications } from "@/hooks/useNotifications";

const MyComponent = () => {
  const { showSuccess, showMatchUpdate } = useNotifications();

  const handleAction = () => {
    showSuccess("¡Acción completada!");
  };

  const handleGoal = () => {
    showMatchUpdate("¡Gol en el minuto 45! ⚽");
  };

  return (
    <div>
      <button onClick={handleAction}>Acción</button>
      <button onClick={handleGoal}>Gol</button>
    </div>
  );
};
```

## 🎨 Demo en vivo

Visita la página principal (`/`) para ver el componente `ToastExample` con todas las notificaciones disponibles.

## 🎯 Características implementadas

✅ Configuración global automática  
✅ Hook personalizado tipado  
✅ Notificaciones temáticas para fútbol  
✅ Diferentes duraciones según tipo  
✅ Estilos personalizados por categoría  
✅ Componente demo interactivo  
✅ Soporte para notificaciones personalizadas

## 📱 Responsive y accesible

- Posición adaptable en móviles
- Colores accesibles y contrastes adecuados
- Duración apropiada para lectura
- Iconos descriptivos para mejor UX
