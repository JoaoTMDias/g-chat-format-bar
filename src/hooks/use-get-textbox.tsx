import { useEffect, useState } from "react";

export function useGetTextBox() {
  const [element, setElement] = useState<Element>(null);
  const [text, setText] = useState<string>(null);

  function getTextBox() {
    const wrapper: HTMLElement = document.querySelector("[data-placeholder]");
    const isWrapper =
      wrapper &&
      wrapper.dataset.includeNonMembersInAutocomplete &&
      wrapper.dataset.placeholder;

    if (isWrapper) {
      const input = wrapper.querySelector("[role='textbox']");
      const isInput = input && input.getAttribute("contenteditable");

      if (isInput) {
        setElement(input);
        setText(input.textContent);
      }
    }
  }

  useEffect(() => {
    getTextBox();
  });

  return [element, text];
}

export default useGetTextBox;
