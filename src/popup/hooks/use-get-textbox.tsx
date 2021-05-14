import { useEffect, useState } from 'react';

export function useGetTextBox() {
  const [element, setElement] = useState<Element>();
  const [text, setText] = useState('');
  const [hasFocus, setHasFocus] = useState(false);

  function getTextBox() {
    const wrapper: HTMLElement | null =
      document.querySelector('[data-placeholder]');
    const isWrapper =
      wrapper &&
      wrapper.dataset.includeNonMembersInAutocomplete &&
      wrapper.dataset.placeholder;

    if (isWrapper && wrapper) {
      const input: HTMLElement | null =
        wrapper.querySelector("[role='textbox']");
      const isInput = !!(input && input.getAttribute('contenteditable'));

      if (isInput && input && input.textContent) {
        setElement(input);
        setText(input.textContent);
      }
    }
  }

  useEffect(() => {
    getTextBox();
  });

  useEffect(() => {
    if (element) {
      element.addEventListener('focus', () => {
        setHasFocus(true);
      });

      element.addEventListener('blur', () => {
        setHasFocus(false);
      });
    }
  }, [element, hasFocus]);

  return [element, text, hasFocus];
}

export default useGetTextBox;
