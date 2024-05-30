import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold underline">Admin ToDo</h1>
    </main>
  );
}
