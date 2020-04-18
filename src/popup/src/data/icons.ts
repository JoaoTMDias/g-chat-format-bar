import { IList } from "./interfaces/list";

export const IconsList: IList[] = [
  {
    id: "button-bold",
    value: "bold",
    label: "Press to make text bold",
    tooltip: "Bold",
    type: "bold"
  },
  {
    id: "button-italic",
    value: "italic",
    label: "Press to make text italicized",
    tooltip: "Italic",
    type: "italic"
  },
  {
    id: "button-strikethrough",
    value: "strikethrough",
    label: "Press to strike through text",
    tooltip: "Strikethrough",
    type: "strikethrough"
  },
  {
    id: "button-list",
    value: "list",
    label: "Press to insert a list",
    tooltip: "List",
    type: "list"
  },
  {
    id: "button-numbered-list",
    value: "numbered-list",
    label: "Press to insert a numbered list",
    tooltip: "Numbered",
    type: "numbered"
  },
  {
    id: "button-inline-code",
    value: "inline-code",
    label: "Press to insert a piece of code inline",
    tooltip: "Inline code",
    type: "inline-code"
  },
  {
    id: "button-code-block",
    value: "code-block",
    label: "Press to insert a block of code",
    tooltip: "Block code",
    type: "code-block"
  }
];
