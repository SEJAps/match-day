import { auth } from "@/apis/firebase";
import { signOut } from "firebase/auth";
import { Button } from "../atoms";

const BtnLogout: React.FC = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logout successful");
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Button variant={"destructive"} onClick={handleLogout}>
      Salir
    </Button>
  );
};

export default BtnLogout;
