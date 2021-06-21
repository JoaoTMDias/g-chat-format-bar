import { IList } from './interfaces/list';

export const IconsList: IList[] = [
  {
    id: 'button-bold',
    value: 'bold',
    shortcut: 'b',
    tooltip: 'Bold',
    type: 'bold',
  },
  {
    id: 'button-italic',
    value: 'italic',
    shortcut: 'i',
    tooltip: 'Italic',
    type: 'italic',
  },
  {
    id: 'button-strikethrough',
    value: 'strikethrough',
    shortcut: 's',
    tooltip: 'Strikethrough',
    type: 'strikethrough',
  },
  {
    id: 'button-list',
    value: 'list',
    shortcut: 't',
    tooltip: 'List',
    type: 'list',
  },
  {
    id: 'button-numbered-list',
    value: 'numbered-list',
    shortcut: 'n',
    tooltip: 'Numbered',
    type: 'numbered',
  },
  {
    id: 'button-inline-code',
    value: 'inline-code',
    shortcut: 'c',
    tooltip: 'Inline code',
    type: 'inline-code',
  },
  {
    id: 'button-code-block',
    value: 'code-block',
    shortcut: 'k',
    tooltip: 'Block code',
    type: 'code-block',
  },
];
