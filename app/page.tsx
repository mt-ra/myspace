import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="h-screen bg-slate-800 text-white px-32 py-4">
      <div className="">
        <h1>Hi</h1>
      </div>
    </main>
  );
}
