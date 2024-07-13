import styled from "styled-components";
const NavStyle = styled.nav`
  position: relative;
  .main__Nav {
    position: fixed;
    width: 100%;
    z-index: 9;
    background-color: var(--primary-color);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }
  .first_Row {
    background-color: var(--secondary-color);
  }
  .first_Row .Nav__Container .info {
    margin: 0;
    font-weight: 500;
  }
  .Nav__Container {
    width: 86%;
    margin: auto;
    justify-content: space-between;
  }
  .info img {
    margin-inline-end: 0.4em;
  }
  .Nav__Container .info {
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 600;
    padding: 0.5em 0;
  }
  .Nav__Container .inner__Container {
    justify-content: space-between;
    padding: 0.9em 0;
  }
  .navigate_Cont {
    gap: 1.5em;
  }
  li {
    margin-inline-start: 1.65em;
    font-size: 0.818rem;
    font-weight: 500;
  }
  li a {
    color: var(--accent-color);
    padding: 0.2em 0;
    transition: all ease 0.8s;
    font-weight: 600;
  }
  li a:hover {
    color: var(--secondary-color);
  }
  .list_btn,
  .exit_btn {
    width: 28px;
    height: 28px;
  }
  .list_btn {
    display: none;
  }
  .list_btn img {
    width: 100%;
    height: 100%;
  }
  /*** list in responsive */
  .show {
    display: flex !important;
  }
  /**Active Link */
  .active {
    color: var(--secondary-color);
  }
  @media (max-width: 1035px) {
    .Nav__Container {
      width: 92%;
    }
    @media (max-width: 980px) {
      .navigate_Cont {
        display: none;
        position: absolute;
        height: 100vh;
        top: 0;
        width: 100%;
        left: 0;
        background: rgba(60, 60, 60, 0.9);
        flex-direction: column;
        padding: 1em;
        justify-content: flex-start;
        align-items: end;
        gap: 1em;
        z-index: 9;
      }
      .list_btn {
        display: block;
      }
      .list_links {
        flex-direction: column;
        width: 100%;
        background: var(--primary-color);
        height: 100%;
        justify-content: flex-start;
        padding: 0.5em !important;
        align-items: flex-start;
        border-radius: 8px;
      }
      .list_links li {
        font-size: 0.95rem;

        margin: 0.1em 0;
        width: 100%;
      }
      .list_links li a {
        display: block;
        padding: 0.5em 1em;
        width: 100%;
      }
    }
    @media (max-width: 580px) {
      .first_Row .Nav__Container > :first-child {
        display: none;
      }
      .first_Row .Nav__Container {
        justify-content: center;
      }
    }
  }
`;
export default NavStyle;
