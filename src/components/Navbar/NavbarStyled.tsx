import styled from "styled-components";

const NavbarStyled = styled.nav`
  @media (max-width: 768px) {
    .navbar {
      &-list {
        display: flex;
        gap: 3rem;

        &-item i {
          font-size: 3rem;
          color: #cd4631;
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default NavbarStyled;
