interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type CustomPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}

type TodoPreview = CustomPick<Todo, 'title'>