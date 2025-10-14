import type { FC } from "react";
import toast from "react-hot-toast";
import { useNotifications } from "../../hooks/useNotifications";

const ToastExample: FC = () => {
  const {
    showSuccess,
    showError,
    showInfo,
    showLoading,
    dismissToast,
    showMatchUpdate,
    showPlayerNotification,
    showTeamNotification,
  } = useNotifications();

  const showSuccessToast = () => {
    showSuccess("¡Operación exitosa! 🎉");
  };

  const showErrorToast = () => {
    showError("¡Algo salió mal! ❌");
  };

  const showInfoToast = () => {
    showInfo("Información importante 📢");
  };

  const showLoadingToast = () => {
    const loadingToast = showLoading("Cargando datos del partido...");

    // Simular una operación asíncrona
    setTimeout(() => {
      dismissToast(loadingToast);
      showMatchUpdate("¡Estadísticas del partido actualizadas!");
    }, 3000);
  };

  const showCustomToast = () => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                  ⚽
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-white">¡Match Day!</p>
                <p className="mt-1 text-sm text-gray-100">
                  Notificación personalizada para eventos del partido
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:bg-black/10 focus:outline-none"
            >
              Cerrar
            </button>
          </div>
        </div>
      ),
      { duration: 6000 },
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        🔔 Demo de Notificaciones
      </h3>
      <p className="text-gray-600 mb-6 text-center">
        Prueba las diferentes tipos de notificaciones implementadas
      </p>

      <div className="grid grid-cols-2 gap-4">
        <button
          onClick={showSuccessToast}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          ✅ Éxito
        </button>

        <button
          onClick={showErrorToast}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          ❌ Error
        </button>

        <button
          onClick={showInfoToast}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          ℹ️ Info
        </button>

        <button
          onClick={showLoadingToast}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
        >
          ⏳ Carga
        </button>
      </div>

      <button
        onClick={showCustomToast}
        className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
      >
        🎨 Personalizada
      </button>

      {/* Notificaciones específicas de Match Day */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500 mb-4 text-center font-medium">
          Notificaciones temáticas de Match Day
        </p>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => showMatchUpdate("¡Gol marcado en el minuto 75! ⚽")}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
          >
            ⚽ Partido
          </button>

          <button
            onClick={() =>
              showPlayerNotification("Nuevo jugador fichado: Lionel Messi")
            }
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
          >
            👤 Jugador
          </button>

          <button
            onClick={() =>
              showTeamNotification("¡El equipo ha ganado la liga! 🏆")
            }
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
          >
            🏆 Equipo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToastExample;
