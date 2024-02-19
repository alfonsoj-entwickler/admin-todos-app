import { Todo } from "@prisma/client";

interface Props {
  todo: Todo;
}
export const TodoItem = ({ todo }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl bg-green-600 text-white">
      <div className="text-base font-light">
        <span>{todo.id}</span>
      </div>
      <div className="text-xl font-semibold">
        <span>{todo.description}</span>
      </div>
      <div className="text-base font-light">
        <span>{todo.updateAt}</span>
      </div>
    </>
  )
  ;
};
