import React from 'react'

import { BackButton, CloseButton, ImageContainer, ImageContent, ModalContainer, ModalContent, NextButton } from './styles'

const Modal = ({ gif, isOpen, onClose, onBack, onNext }) => {
  if (!isOpen) {
    return null
  }

  const handleContentClick = (event) => {
    event.stopPropagation()
  }

  return (
    <ModalContainer onMouseDown={onClose}>
      <ModalContent onMouseDown={handleContentClick}>
        <CloseButton onClick={onClose}>X</CloseButton>

        <ImageContainer>
          <BackButton onClick={onBack}>{'<'}</BackButton>
          <ImageContent><img src={gif} alt="" /></ImageContent>
          <NextButton onClick={onNext}>{'>'}</NextButton>
        </ImageContainer>
      </ModalContent>
    </ModalContainer>
  )
}

export default Modal
