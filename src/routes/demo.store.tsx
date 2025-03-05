import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'

import { fullName, store } from '../lib/demo-store'

export const Route = createFileRoute('/demo/store')({
  component: DemoStore,
})

function FirstName() {
  const firstName = useStore(store, (state) => state.firstName)
  return (
    <input
      type="text"
      value={firstName}
      onChange={(e) =>
        store.setState((state) => ({ ...state, firstName: e.target.value }))
      }
      className="px-4 py-2 transition-colors duration-200 border rounded-lg outline-none bg-white/10 border-white/20 hover:border-white/40 focus:border-white/60 placeholder-white/40"
    />
  )
}

function LastName() {
  const lastName = useStore(store, (state) => state.lastName)
  return (
    <input
      type="text"
      value={lastName}
      onChange={(e) =>
        store.setState((state) => ({ ...state, lastName: e.target.value }))
      }
      className="px-4 py-2 transition-colors duration-200 border rounded-lg outline-none bg-white/10 border-white/20 hover:border-white/40 focus:border-white/60 placeholder-white/40"
    />
  )
}

function FullName() {
  const fName = useStore(fullName)
  return (
    <div className="px-4 py-2 rounded-lg outline-none bg-white/10 ">
      {fName}
    </div>
  )
}

function DemoStore() {
  return (
    <div
      className="min-h-[calc(100vh-32px)] text-white p-8 flex items-center justify-center w-full h-full"
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 80% 80%, #f4a460 0%, #8b4513 70%, #1a0f0a 100%)',
      }}
    >
      <div className="flex flex-col gap-4 p-8 text-3xl shadow-lg bg-white/10 backdrop-blur-lg rounded-xl min-w-1/2">
        <h1 className="mb-5">Store Example</h1>
        <FirstName />
        <LastName />
        <FullName />
      </div>
    </div>
  )
}
