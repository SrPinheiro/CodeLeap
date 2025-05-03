import styled from "styled-components";

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (orientation: portrait) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`

export default HeaderContent;