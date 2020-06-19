import { StringDatabaseEditor } from "src/app/features/string-database/string-database";

export type Editor = StringDatabaseEditor;

// classes
interface EditorTab {
    content: Editor;
}

interface EditorTabGroup {
    focus: number;
    editorTabs: EditorTab[];
    //tab group dimensions
}

// state
interface UIState {
    editorTabGroups: EditorTabGroup[]
}