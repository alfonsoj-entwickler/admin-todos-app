
import Image from "next/image";
import WidgetItem from "../../components/WidgetItem";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if( !session ) {
    redirect('/api/auth/signin')
  }
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <WidgetItem title={'User connected S-Side'}>
        <div className="flex flex-col items-center gap-6">
          <span className="font-semibold uppercase">{session.user?.name}</span>
          {session.user?.image && (
            <Image
              src={session.user?.image}
              alt=""
              className="w-10 h-10 rounded-full object-cover lg:w-28 lg:h-28"
              width={150}
              height={150}
            />
          )}
          <span>{session.user?.email}</span>
          <span className="capitalize font-semibold">{session.user?.roles?.join(',')}</span>
        </div>
      </WidgetItem>
    </div>
  );
}
