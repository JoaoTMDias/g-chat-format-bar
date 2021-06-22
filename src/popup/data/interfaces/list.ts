export type IListType =
	| "bold"
	| "italic"
	| "strikethrough"
	| "list"
	| "numbered"
	| "inline-code"
	| "code-block";

export interface IList {
	id: string;
	value: string;
	tooltip: string;
	shortcut: string;
	type: IListType;
	disabled?: boolean;
}

export interface IListProps {
	list: IList[];
}
