import TopMenu from "../../components/TopMenu";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"; 

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session?.user && <Sidebar name={session.user?.name} image={session.user?.image} roles={session.user.roles} />}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6 bg-white p-2 pb-5 m-2 rounded ">
          {children}
        </div>
      </div>
    </>
  );
}
