import axios from 'axios'

export async function getData() {
  const { data } = await axios.get(
    'https://api.github.com/users/siddharth-nair-2/repos?sort=pushed&direction=desc',
  )
  return data
}
