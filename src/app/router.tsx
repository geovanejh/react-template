import { createBrowserRouter } from 'react-router'
import { RootLayout } from '@/features/layout/components/RootLayout'
import { RouteErrorPage } from '@/shared/components/RouteErrorPage'
import { lazyRoute } from '@/shared/lib/lazyLoad'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        lazy: lazyRoute(
          () => import('@/features/home/pages/HomePage'),
          'HomePage',
        ),
      },
      {
        path: 'about',
        lazy: lazyRoute(
          () => import('@/features/about/pages/AboutPage'),
          'AboutPage',
        ),
      },
      {
        path: '*',
        lazy: lazyRoute(
          () => import('@/shared/components/NotFoundPage'),
          'NotFoundPage',
        ),
      },
    ],
  },
])
