import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from table

  await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true,
      },
      {
        description: "Piedra del corazon",
      },
      {
        description: "Piedra del leon",
      },
      {
        description: "Piedra del cochinillo",
      },
      {
        description: "Piedra del cerdo",
      },
      {
        description: "Piedra del lobo",
      },
    ],
  });
  return NextResponse.json({
    messsage: "Seed Executed",
  });
}
