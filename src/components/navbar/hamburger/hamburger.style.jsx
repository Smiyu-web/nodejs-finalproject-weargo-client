import styled from "styled-components";

export const HamburgerContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40vh;
  width: 50%;
  min-width: 400px;
  height: 60px;
  margin: 0 auto;

  h1 {
    font-weight: 300;
    color: #ecf0f1;
  }

  p {
    font-weight: 100;
    color: #ecf0f1;
    letter-spacing: 0.1em;
  }
`;

export const MenuToggle = styled.div`
  display: block;
  position: fixed;
  top: 2rem;
  left: 2rem;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

  input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }

  span {
    display: block;
    width: 26px;
    height: 2px;
    margin-bottom: 5px;
    position: relative;
    background: #333333;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 3px 0px;
    transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  span:first-child {
    transform-origin: 0% 0%;
  }

  span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  /* input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #e74c3c;
  }
  input:checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  input:checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
  }

  input:checked ~ ul {
    transform: scale(1, 1);
    opacity: 1;
  } */
  .checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #e74c3c;
  }
  .checked ~ span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  .checked ~ span:nth-last-child(2) {
    opacity: 1;
    transform: rotate(-45deg) translate(0, -1px);
  }

  .checked ~ ul {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

export const HamburgerMenu = styled.ul`
  position: absolute;
  width: 90vw;
  height: 110vh;
  margin: -100px 0 0 -50px;
  padding: 50px;
  padding-top: 125px;
  background: red;
  list-style-type: none;
  transform-origin: 0 0;
  transform: translate(-100%, 0);
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  text-align: center;

  li {
    padding: 15px 0;
    color: #000000;
    list-style-type: none;
    font-size: 2em;
    font-weight: 300;
  }

  li a {
    color: #e74c3c;
    text-decoration: none;
    text-transformation: uppercase;
  }

  li a:hover {
    color: #2c3e50;
    text-decoration: none;
  }
  ul {
    transform: scale(1, 1);
    opacity: 1;
  }
`;
