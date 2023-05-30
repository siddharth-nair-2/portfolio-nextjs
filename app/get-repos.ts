import { Repo } from '@/types/Repo'

export async function getData(): Promise<Repo[]> {
  const response = await fetch(
    'https://api.github.com/users/siddharth-nair-2/repos?sort=pushed&direction=desc',
    {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    },
  )
  const data = response.json()
  return data
}
