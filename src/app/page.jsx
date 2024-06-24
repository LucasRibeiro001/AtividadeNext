import styles from "./page.module.css";
import Link from "next/link"; 


export default function Home() {
  return (
    <div className="container">
      <h1>Home</h1>
      <div>
        
      </div>
      <Link  href={"/login"}>Login</Link> <br/> <br/>
      <Link  href={"/principal"}>Principal</Link> <br/> <br/>
      <Link  href={"/perfil"}>Perfil</Link> <br/> <br/>
      <Link  href={"/desempenho"}>Desempenho</Link> <br/> <br/>
      <Link  href={"/lembretes"}>Lembretes</Link> <br/> <br/>
    </div>
  );
}

