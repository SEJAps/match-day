import { appFirebase } from "@/apis/firebase";
import { Logo } from "@/components";
import useNotifications from "@/hooks/useNotifications";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth/cordova";

export const useAccountPage = () => {
  const { showSuccess, showError } = useNotifications();
  const auth = getAuth(appFirebase);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    if (!email) {
      showError("Por favor, introduce tu email.");
      return;
    }

    if (!password) {
      showError("Por favor, introduce tu contraseña.");
      return;
    }

    signInWithEmailAndPassword(
      auth,
      (e.currentTarget as HTMLFormElement).email.value,
      (e.currentTarget as HTMLFormElement).password.value,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        showSuccess(`Bienvenido de nuevo, ${user.email || "usuario"}!`);
        <div className="flex flex-col items-center text-center">
          <Logo
            colorPreset="brandLight"
            size={{ x: 96, y: 78 }}
            className="mx-auto mb-2"
          />
          <span className="font-semibold">{user.displayName || "usuario"}</span>
          <span className="text-sm opacity-90">
            Bienvenido de nuevo, ${user.email || user.displayName || "usuario"}!
          </span>
        </div>;
      })
      .catch((error) => {
        showError(error.message || "Error al iniciar sesión.");
      });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const rePassword = String(data.get("rePassword") ?? "");
    const acceptedTerms = data.get("accept") !== null;

    if (!email) {
      showError("Por favor, introduce tu email.");
      return;
    }

    if (!password || !rePassword) {
      showError("Por favor, repite tu contraseña.");
      return;
    }

    if (password !== rePassword) {
      showError("Las contraseñas no coinciden.");
      return;
    }

    if (!acceptedTerms) {
      showError("Debes aceptar los términos y condiciones.");
      return;
    }

    // Notificación con email y breve instrucción

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        showSuccess(
          <div className="flex flex-col items-center text-center">
            <Logo
              colorPreset="brandLight"
              size={{ x: 96, y: 78 }}
              className="mx-auto mb-2"
            />
            <span className="font-semibold">{email}</span>
            <span className="text-sm opacity-90">
              Sigue los siguientes pasos para completar tu registro: revisa tu
              correo y verifica tu cuenta.
            </span>
          </div>,
        );
      })
      .catch((error) => {
        showError(error.message || "Error al iniciar sesión.");
      });
  };

  return {
    handleSubmit,
    handleRegisterSubmit,
    showSuccess,
    showError,
  };
};
