'use client'

import { Provider as ReduxProvider } from 'react-redux'

import { store } from '@/store'
import { Player } from '@/components/Player'

export default function Home() {
  return (
    <div>
      <div>
        <ReduxProvider store={store}>
          <Player />
        </ReduxProvider>
      </div>
    </div>
  )
}
