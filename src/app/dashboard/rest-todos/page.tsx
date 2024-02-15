"use client";

import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";

export default async function RestTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold underline">Dashboard</h1>
      <TodosGrid 
        todos={todos}
      />
    </main>
  );
}
