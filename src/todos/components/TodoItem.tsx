import { Todo } from "@prisma/client";

interface Props {
  todo: Todo;
}
export const TodoItem = ({ todo }: Props) => {
  return (
    <>
      <div>
        {todo.id}
      </div>
      <div>
        {todo.description}
      </div>
      <div>
        {todo.updateAt}
      </div>
    </>
  )
  ;
};
