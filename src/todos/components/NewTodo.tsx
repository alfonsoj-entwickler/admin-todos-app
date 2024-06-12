"use client";

import { FormEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

export const NewTodo = () => {
  const [description, setDescription] = useState("");
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (description.trim().length === 0) return;

    await todosApi.createTodo(description);
     
    setDescription("");
    router.refresh();
  };

  const onDelete = async() => {
    await todosApi.deleteCompletedTodo()
    router.refresh();
  }

  return (
    <form className="flex w-full" onSubmit={onSubmit}>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-green-500 transition-all"
        placeholder="¿Qué necesita ser hecho?"
      />

      <button
        type="submit"
        className="flex items-center justify-center rounded ml-2 bg-green-500 p-2 text-white hover:bg-green-700 transition-all"
      >
        Create
      </button>

      <span className="flex flex-1"></span>

      <button
        onClick={onDelete}
        type="button"
        className="flex items-center justify-center gap-2 rounded ml-2 bg-red-700 p-2 text-white hover:bg-red-900 transition-all"
      >
        <IoTrashOutline />
        Delete
      </button>
    </form>
  );
};
