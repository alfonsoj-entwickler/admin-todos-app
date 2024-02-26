
import prisma from "@/lib/prisma";
import { TodosGrid } from "@/todos";


export const metadata = {
  title: 'Listado de Todos',
  description: 'SEO Title',
 };
 

export default async function RestTodos() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });
  return (
    <div>
      <div className="w-full px-3 mx-5 mb-5"> 
      </div>
      
      <TodosGrid todos={ todos } />
    </div>
  );
}
