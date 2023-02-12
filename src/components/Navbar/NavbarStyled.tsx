import styled from "styled-components";

const NavbarStyled = styled.nav`
  @media (max-width: 768px) {
    .navbar {
      &-list {
        display: flex;
        gap: 3rem;

        &-item i {
          font-size: 3rem;
        }
      }
    }
    .orange {
      color: #cd4631;
    }

    .grey {
      color: #777;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export default NavbarStyled;
