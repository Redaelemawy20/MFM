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
    width: 94%;
    margin: auto;
    justify-content: space-between;
  }
  .info img {
    margin-inline-end: 0.4em;
  }
  .Nav__Container .info {
    color: var(--primary-color);
    gap: 0.5em;
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
    font-size: 1rem;
    font-weight: 500;
    position: relative;
  }
  li a {
    color: var(--accent-color);
    padding: 0.2em 0;
    transition: all ease 0.8s;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
  li a:hover {
    color: var(--secondary-color) !important;
    cursor: pointer;
  }

  .list_btn,
  .exit_btn {
    width: 28px;
    height: 28px;
    display: none;

    border: none;
    outline: none;
    background-color: transparent;
  }

  /*** list in responsive */
  .show {
    display: flex !important;
  }
  /**Active Link */
  .active {
    color: var(--secondary-color);
  }
  .btn_link {
    font-size: 1.1rem;
    color: var(--primary-color);
    background-color: var(--text-color);
    padding: 0.5em 1.2em;
    border-radius: 4px;
  }
  .btn_link:hover {
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  }
  .down_angle {
    font-size: 0.8rem;
    font-weight: 700;
    margin-inline-start: 4px;
  }
  select {
    outline: none;
    border: none;
    background-color: transparent;
    color: var(--primary-color);
    padding: 0.2em 0.5em;
    border-left: 1px solid var(--primary-color);
    border-right: 1px solid var(--primary-color);
  }
  option {
    background-color: rgba(60, 60, 60, 0.9);
  }
  .dropdown_menu {
    position: absolute;
    width: 230px;
    padding: 0.3em !important;
    top: 73px;
    background-color: var(--primary-color);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  .dropdown_menu li {
    margin: 0;

    justify-content: flex-start;
  }
  .dropdown_menu li a {
    padding: 0.4em 0.5em;
    /* margin: 0.2em 0; */
  }
  .dropdown_menu li a:hover {
    background-color: var(--shadow-color);
    transition: background-color 0.2s;
  }

  .dropdown_menu li:has(> .dropdown_sub_menu):hover {
    background-color: transparent; /* or the original background color */
  }
  .dropdown_menu li a {
    font-size: 0.85rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .dropdown_sub_menu {
    position: absolute;
    right: 102.6%;
    top: -6px;
  }
  .toggleFirstRow {
    transform: translateY(-60px);
    transition: all 1s;
  }

  @media (max-width: 1150px) {
    li {
      margin-inline-start: 0;
      font-size: 1.09rem;
    }
    .list_links {
      gap: 1em;
    }
  }
  @media (max-width: 1035px) {
    .Nav__Container {
      width: 92%;
    }
    @media (max-width: 980px) {
      .toggleFirstRow .Nav__Container .navigate_Cont {
        transform: translateY(60px);
      }
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
      .list_btn,
      .exit_btn {
        display: block;
      }
      .exit_btn {
        color: var(--primary-color);
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
        overflow-y: scroll;
      }
      .list_links li {
        font-size: 0.95rem;

        margin: 0.1em 0;
        width: 100%;
      }
      .list_links li a {
        display: flex;
        justify-content: space-between;
        padding: 0.5em 1em;
        width: 100%;
      }
      .dropdown_menu {
        position: static;
        width: 97%;
        box-shadow: none;
        margin-inline-start: 3% !important;
      }
      .dropdown_sub_menu {
        margin-inline-start: 1rem;
      }
    }
    @media (max-width: 580px) {
      /* .first_Row .Nav__Container > :first-child {
        display: none;
      } */
      /* .first_Row .Nav__Container {
        justify-content: center;
      } */
      .first_Row .Nav__Container .btn_link {
        font-size: 1rem;
      }
    }
  }
`;
export default NavStyle;
