import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>Welcome to UFO Junction</h1>
      <p>Keeping track of UFO stories and events since 2024!</p>  
      <br></br>    
      <Link href="user">Users</Link>
    </div>
  );
}
