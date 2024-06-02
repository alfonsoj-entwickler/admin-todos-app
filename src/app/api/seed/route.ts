import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from table
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: "test@colnet.com",
      password: bcrypt.hashSync("1234567"),
      roles: ["admin", "client", "root"],
      todos: {
        create: [
          { description: "Home", complete: true },
          { description: "Car", complete: false },
          { description: "Cake", complete: false },
          { description: "Surf", complete: false },
        ],
      },
    },
  });

  return NextResponse.json({
    messsage: "Seed Executed",
  });
}
