import { useAppSelector } from '@/store'

export function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo
  })

  return (
    <div className="max-w-md bg-white rounded-md shadow-md p-4">
      <ul className="list-disc pl-6">
        {todos.map((todo) => {
          return (
            <li key={todo} className="mb-2">
              {todo}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
