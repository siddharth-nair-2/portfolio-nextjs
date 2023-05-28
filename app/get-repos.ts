export async function getData() {
  const res = await fetch(
    'https://api.github.com/users/siddharth-nair-2/repos?sort=pushed&direction=desc',
    { cache: 'no-cache' },
  )
  const data = await res.json()
  return data
}
