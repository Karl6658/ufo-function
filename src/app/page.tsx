import Image from "next/image";
import Link from "next/link"
import { supabase } from '../lib/supabaseClient';
import Login from "../app/components/login/page"
import SignOutButton from "./components/logout/page";

export default function Home() {
  return (
    <div>

      <h1>Welcome to UFO Junction</h1>
      <p>Keeping track of UFO stories and events since 2024!</p>  

      <Login />

      <br></br>    
      <Link href="user">Users</Link>

      <SignOutButton  />

    </div>
  );
}
