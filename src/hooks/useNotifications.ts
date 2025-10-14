import toast, { type ToastOptions } from "react-hot-toast";

export const useNotifications = () => {
  const showSuccess = (message: string, options?: ToastOptions) => {
    return toast.success(message, {
      duration: 3000,
      ...options,
    });
  };

  const showError = (message: string, options?: ToastOptions) => {
    return toast.error(message, {
      duration: 5000,
      ...options,
    });
  };

  const showInfo = (message: string, options?: ToastOptions) => {
    return toast(message, {
      icon: "ℹ️",
      duration: 4000,
      ...options,
    });
  };

  const showWarning = (message: string, options?: ToastOptions) => {
    return toast(message, {
      icon: "⚠️",
      duration: 4000,
      style: {
        background: "#f59e0b",
        color: "#fff",
      },
      ...options,
    });
  };

  const showLoading = (message: string = "Cargando...") => {
    return toast.loading(message);
  };

  const dismissToast = (toastId: string) => {
    toast.dismiss(toastId);
  };

  const dismissAll = () => {
    toast.dismiss();
  };

  // Notificaciones específicas para Match Day
  const showMatchUpdate = (message: string) => {
    return toast.success(message, {
      icon: "⚽",
      duration: 4000,
      style: {
        background: "#10b981",
        color: "#fff",
      },
    });
  };

  const showPlayerNotification = (message: string) => {
    return toast(message, {
      icon: "👤",
      duration: 3000,
      style: {
        background: "#3b82f6",
        color: "#fff",
      },
    });
  };

  const showTeamNotification = (message: string) => {
    return toast(message, {
      icon: "🏆",
      duration: 3000,
      style: {
        background: "#8b5cf6",
        color: "#fff",
      },
    });
  };

  return {
    showSuccess,
    showError,
    showInfo,
    showWarning,
    showLoading,
    dismissToast,
    dismissAll,
    showMatchUpdate,
    showPlayerNotification,
    showTeamNotification,
  };
};

export default useNotifications;
