import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { Header } from '@/features/layout/components/Header'
import { Footer } from '@/features/layout/components/Footer'
import { PageLoadingSpinner } from '@/shared/components/PageLoadingSpinner'
import { Toaster } from '@/shared/components/ui/sonner'

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-8">
        <Suspense fallback={<PageLoadingSpinner />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors />
    </div>
  )
}
