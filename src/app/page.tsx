'use client'

import { Provider as ReduxProvider } from 'react-redux'

import { AddTodo } from '@/components/AddTodo'
import { TodoList } from '@/components/TodoList'
import { store } from '@/store'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 rounded-md shadow-md p-4">
        <ReduxProvider store={store}>
          <TodoList />
          <AddTodo />
        </ReduxProvider>
      </div>
    </div>
  )
}
