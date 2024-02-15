import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { NextResponse } from "next/server";
import * as yup from "yup";

interface RequestTodo {
  params: {
    id: string;
  };
}

const getTodo = async (id: string): Promise<Todo | undefined> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    return undefined;
  }
  return todo;
};

export async function GET(request: Request, { params }: RequestTodo) {
  const { id } = params;

  const todos = await getTodo(id);

  if (!todos)
    return NextResponse.json({ message: `Error ${id}` }, { status: 400 });

  return NextResponse.json(todos);
}

const putSchema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: RequestTodo) {
  //check id
  const { id } = params;
  const todos = await getTodo(id);

  if (!todos)
    return NextResponse.json({ message: `Error ${id}` }, { status: 404 });

  // update
  try {
    const { description, complete } = await putSchema.validate(
      await request.json()
    );

    const updateTodo = await prisma.todo.update({
      where: { id },
      data: { description, complete },
    });

    return NextResponse.json(updateTodo);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
