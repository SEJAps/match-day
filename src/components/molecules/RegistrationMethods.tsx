import { Button } from "../atoms";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import useNotifications from "@/hooks/useNotifications";
import { auth } from "@/apis/firebase";
import { GoogleIcon } from "../icons/GoogleIcon";
import { FacebookIcon } from "../icons/FacebookIcon";
import { AppleIcon } from "../icons/AppleIcon";

const RegistrationMethods: React.FC = () => {
  const { showSuccess, showError } = useNotifications();

  const handleClickGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        showSuccess(`Bienvenido de nuevo, ${user.displayName || "usuario"}!`);
      })
      .catch((error) => {
        showError(error.message || "Error al iniciar sesión.");
      });
  };
  return (
    <section className="flex flex-col w-full">
      <span className="text-dark text-center mb-4">Iniciar sesión con</span>
      <article className="grid grid-cols-3 gap-4 mt-2">
        <Button
          leftIcon={
            <i className="flex justify-center items-center  w-6 h-6">
              <FacebookIcon />
            </i>
          }
          variant="info"
        >
          <article className="hidden lg:flex items-center  gap-2">
            <span>Facebook</span>
          </article>
        </Button>
        <Button
          leftIcon={
            <i className="flex justify-center items-center w-6 h-6 text-dark">
              <GoogleIcon />
            </i>
          }
          variant="outline"
          onClick={handleClickGoogleSignIn}
        >
          <span className="hidden lg:flex lg:items-center lg:gap-2 lg:text-dark">
            Google
          </span>
        </Button>
        <Button
          leftIcon={
            <i className="flex justify-center items-center w-6 h-6">
              <AppleIcon />
            </i>
          }
          variant="default"
        >
          <article className="hidden lg:flex items-center gap-2">
            <span>Apple</span>
          </article>
        </Button>
      </article>
    </section>
  );
};
export default RegistrationMethods;
