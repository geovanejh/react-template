import { createBrowserRouter } from 'react-router'
import { RootLayout } from '@/features/layout/components/RootLayout'
import { HomePage } from '@/features/home/pages/HomePage'
import { AboutPage } from '@/features/about/pages/AboutPage'
import { NotFoundPage } from '@/shared/components/NotFoundPage'
import { RouteErrorPage } from '@/shared/components/RouteErrorPage'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
