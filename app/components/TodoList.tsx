"use client";

import { useTodoStore } from "@/app/lib/store/StoreProvider";
import { TodoItem } from "./TodoItem";
import { filterTodos } from "@/app/lib/logic/todoLogic";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const searchTerm = useTodoStore((state) => state.searchTerm);
  const filteredTodos = filterTodos(todos, searchTerm);

  if (todos.length === 0) {
    return (
      <div className="text-center py-12 text-muted">
        No todos yet. Add one to get started!
      </div>
    );
  }

  if (filteredTodos.length === 0) {
    return (
      <div className="text-center py-12 text-muted">
        No todos match your search.
      </div>
    );
  }

  return (
    <ul className="border border-border rounded overflow-hidden">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
