import { useState } from 'react'

import Input from '~app/components/ui/Input'
import { searchGif } from '~app/utils/search'
import Modal from '../ui/Modal'
import { CardsContainer, SearchButton, SearchContainer } from './styles'

const Search = () => {
  const [search, setSearch] = useState('')
  const [gifs, setGifs] = useState([])
  const [pagination, setPagination] = useState()
  const [selectedGif, setSelectedGif] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [index, setIndex] = useState(-1)

  const onChange = (name, value) => {
    setSearch(value)
  }

  const onSearchHandler = async () => {
    const result = await searchGif(search)
    setGifs(result.data)
    setPagination(result.pagination)
  }

  const onGifClick = (url, idx) => {
    setSelectedGif(url)
    setIndex(idx)
    setOpenModal(true)
  }

  const onBack = () => {
    const localIndex = index - 1
    const newIndex = localIndex >= 0 ? localIndex : 0
    setSelectedGif(gifs[newIndex].url)
    setIndex(newIndex)
  }

  const onNext = () => {
    const localIndex = index + 1
    const newIndex = localIndex <= gifs.length - 1 ? localIndex : gifs.length - 1
    setSelectedGif(gifs[newIndex].url)
    setIndex(newIndex)
  }

  return (
    <>
      <SearchContainer>
        <Input
          placeholder='Type a Gif'
          onChange={onChange}
        />
        <SearchButton onClick={onSearchHandler}>Search</SearchButton>
      </SearchContainer>

      <CardsContainer>
        {gifs.map((gif, idx) => (
          <div key={idx} onClick={() => onGifClick(gif.url, idx)}>
            <img src={gif.url} alt='' />
          </div>
        ))}
      </CardsContainer>

      {openModal && (
        <Modal
          gif={selectedGif}
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          onBack={onBack}
          onNext={onNext}
        />)}
    </>
  )
}

export default Search
