import axios from 'axios'

const mapData = (result) => {
  return {
    pagination: result.pagination,
    data: result?.data?.map(gif => gif.images?.['fixed_height'])
  }
}

export const searchGif = async (searchString) => {
  const GIPHY_API_KEY = 'YsLyN85SDJHuOYnGMdJCJ5NlMwpQYesL'
  const { data } = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${searchString}&api_key=${GIPHY_API_KEY}&limit=10`,
    { headers: { 'Content-Type': 'application/json' } },
  )

  return mapData(data)
}
