import { useCounterStore } from '@/features/counter/stores/counterStore'
import { Button } from '@/shared/components/ui/Button'

export function HomePage() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          React Template
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          A production-ready React + TypeScript template with best practices.
        </p>
      </section>

      <section className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Counter Example
        </h2>
        <p className="mb-4 text-3xl font-mono text-gray-900 dark:text-white">
          {count}
        </p>
        <div className="flex justify-center gap-2">
          <Button variant="secondary" onClick={decrement}>
            -1
          </Button>
          <Button onClick={increment}>+1</Button>
          <Button variant="ghost" onClick={reset}>
            Reset
          </Button>
        </div>
      </section>
    </div>
  )
}
