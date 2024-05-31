"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProfilPage() {
    const { data: session  } = useSession();
  useEffect(() => {
    console.log("Client Side");
  }, []);

  return (
    <div>
      <h1>Hello Page Profil</h1>
      <hr />
      <div className="flex flex-col">
        <span>{ session?.user?.name ?? 'No name'}</span>
        <span>{ session?.user?.email ?? 'No Email'}</span>
        <span>{ session?.user?.image ?? 'No image'}</span>
      </div>
    </div>
  );
}
