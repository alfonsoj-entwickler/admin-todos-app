
import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: 'Server Todos',
  description: 'SEO Title',
 };
 

export default async function ServerTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <>
      <span className="block text-3xl mb-5">Server Actions</span>
      <div className="w-full px-6 mx-5 mb-5">
        <NewTodo />
      </div>
      
      <TodosGrid todos={ todos } />
    </>
  );
}
