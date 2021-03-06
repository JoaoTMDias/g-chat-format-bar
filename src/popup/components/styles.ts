import styled, { css, createGlobalStyle } from 'styled-components';

const srOnly = css`
  border: 0;
  clip: rect(0 0 0 0);
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  white-space: nowrap;
`;

export const Global = createGlobalStyle`
  :root {
    --color-primary: #2E7D32;
    --color-primary-light: #C8E6C9;
    --color-primary-dark: #1B5E20;
    --color-background: #ffffff;
    --font-family: 'Roboto',Roboto,-apple-system,BlinkMacSystemFont,'Segoe UI', Oxygen,Ubuntu,Cantarell,'Helvetica Neue',sans-serif;
    --focus-ring-color: var(--color-primary);
    --focus-ring: 0 0 0px 2px var(--focus-ring-color);
  }

  * {
    box-sizing: border-box;

    &:not(textarea, input) {
      user-select: none;
    }
  }

  body {
    margin: 0;
    overflow: hidden;
    padding: 0;
    font-family: var(--font-family);
    background-color: var(--color-background);
  }

  .sr-only {
    ${srOnly};
  }

  [data-tooltip] {
    position: relative;

    &::after {
      background-color: hsl(0, 0%, 16%);
      color: #ffffff;
      display: none;
      position: absolute;
      top: 0;
      left: 50%;
      z-index: 999;
      border-radius: 1rem;
      padding: 2px 0.5rem;
      text-align: center;
      content: attr(data-tooltip);
      transform: translate(-50%, calc(-100% - 0.25rem));
      font-size: 0.6875rem;
      opacity: 0;
      transition: opacity 128ms ease-in-out;
      white-space: nowrap;
    }

    &,
    &.is-selected {
      &:hover,
      &:focus {
        &::after {
          display: block;
          opacity: 1;
        }
      }
    }
  }
`;

export const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const Header = styled.header`
  width: 100%;
  height: 2rem;
  border: none;
  text-align: left;
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  align-items: center;

  .title {
    margin: 0;
    padding-inline: 1rem;
  }

  .title,
  .logo {
    height: 1.5rem;
    width: auto;
  }
`;

export const Wrapper = styled.form`
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding: 1rem 1.25rem;
`;

export const Textarea = styled.textarea`
  --focus-ring-color: #e8eaf6;
  --focus-ring: 0 0 0px 2px var(--focus-ring-color);

  width: 100%;
  min-height: 3rem;
  padding: 0.5rem;
  display: flex;
  height: 100%;
  border: none;
  box-shadow: var(--focus-ring);
  caret-color: var(--color-primary-dark);

  &::placeholder {
    color: #b0bec5;
    font-style: italic;
  }

  &:not(:empty) {
    background-color: #f3f5f6;
  }

  &:focus {
    --focus-ring-color: var(--color-primary);

    outline: none;
    background-color: var(--color-background);
  }
`;

export const ToolbarList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  list-style-type: none;
  margin: 0;
  height: 2rem;
  padding: 0;
  gap: 2px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  padding: 0;
  margin: 0;
  border-radius: 0;

  &:first-of-type {
    button {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }
  }

  &:last-child {
    button {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  outline: none;
  transition: box-shadow 64ms ease-in-out;
  font-family: var(--font-family);
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  border-radius: 0;
  cursor: pointer;

  &__icon {
    fill: hsl(0, 0%, 50%);
  }

  &:hover,
  &:focus {
    background-color: var(--color-primary-light);
  }

  &.is-selected:focus {
    --focus-ring-color: #3f51b5;
    box-shadow: var(--focus-ring);
  }

  &:focus:active,
  &:active {
    background-color: var(--color-primary);
    color: var(--color-background);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-primary-dark);

    .g-chat-format-bar__button__icon {
      fill: currentColor;
    }
  }
`;

export const CopyClipboard = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: var(--font-family);
  border: none;
  outline: none;
  transition: box-shadow 64ms ease-in-out;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  border-radius: 4px;
  cursor: pointer;

  .icon {
    display: grid;
    place-items: center;
    width: 1.5rem;
    height: 1.5rem;
    fill: hsl(0, 0%, 50%);
  }

  &:hover,
  &:focus {
    background-color: var(--color-primary-light);
  }

  &.is-selected:focus {
    --focus-ring-color: var(--color-primary-dark);
    box-shadow: var(--focus-ring);
  }

  &:focus:active,
  &:active {
    background-color: var(--color-primary-dark);
    color: var(--color-background);
  }

  &:hover,
  &:focus,
  &:active {
    color: var(--color-primary-dark);

    .icon {
      fill: currentColor;
    }
  }
`;
