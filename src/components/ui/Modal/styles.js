import { mq } from '~app/styles/media'
import { styled } from '~app/styles/theme'

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1c1c1c60;
`
export const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  overflow: auto;
  position: relative;

  ${mq('md')`
    height: 540px;
    width: 610px;
  `}
`
export const CloseButton = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
  font-size: 20px;
  position: absolute;
  right: 10px;
  top: 10px;
`
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const BackButton = styled.div`
  font-size: 20px;
  margin-left: 10px;
`
export const NextButton = styled.div`
  font-size: 20px;
  margin-right: 10px;
`
