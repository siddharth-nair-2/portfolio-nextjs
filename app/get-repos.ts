export async function getData() {
  try {
    const res = await fetch(
      'https://api.github.com/users/siddharth-nair-2/repos?sort=pushed&direction=desc',
      {
        cache: 'no-store',
      },
    )
    const data = await res.json()
    return data
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
    else console.log(String(error))
  }
}
