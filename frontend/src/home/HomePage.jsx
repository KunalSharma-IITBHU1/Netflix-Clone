import { useAuthStore } from "../store/auth.js";
import Authscreen from "./authscreen";
import Homescreen from "./homescreen";




export default function HomePage() {

  const {user} =useAuthStore();

  return (
    <div>
      {user ? <Homescreen/> : <Authscreen/>}
    </div>
  )
}

