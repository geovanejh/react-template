import { httpClient } from '@/lib/httpClient'
import type { User } from '@/types/api'

export const userService = {
  getAll: () => httpClient.get<User[]>('/users'),
  getById: (id: string) => httpClient.get<User>(`/users/${id}`),
}
