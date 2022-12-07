import { mq } from '~app/styles/media'
import { styled } from '~app/styles/theme'

export const NavBarSection = styled.nav`
  height: ${({ theme }) => theme.heights.navbar}px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.black};
  z-index: ${({ theme }) => theme.zIndex.navBar};
  position: absolute;
  left: 0;
  top: 0;
`
export const NavBarContainer = styled.nav`
  padding: 0 20px;
`
export const NavBarContent = styled.div`
  height: ${({ theme }) => theme.heights.navbar}px;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.white};
  position: relative;
`
export const NavBarLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 24px;
  cursor: pointer;

  svg {
    height: 32px;
    margin-right: 12px;
  }

  ${({ theme }) => mq('md')`
    height: ${theme.heights.navbar}px;
    font-size: 28px;

    svg {
      height: 36px;
    }
  `}
`
