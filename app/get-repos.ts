import { Repo } from '@/types/Repo'

export async function getData(): Promise<Repo[]> {
  const response = await fetch(
    'https://api.github.com/users/siddharth-nair-2/repos?sort=pushed&direction=desc',
    {
      cache: 'no-store',
    },
  )
  const data = response.json()
  return data
}
