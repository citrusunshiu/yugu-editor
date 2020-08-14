import { StringDatabaseEditor } from "src/app/features/string-database/string-database";
import { CutsceneEditor } from "src/app/features/cutscenes/cutscenes";
import { UnitEditor } from "src/app/features/units/units";
import { SkillEditor} from "src/app/features/skills/skills";
import { AnimationEditor } from "src/app/features/animations/animations";
import { StatusEditor } from "src/app/features/statuses/statuses";
import { QuestEditor } from "src/app/features/quests/quests";
import { InstanceEditor } from "src/app/features/instances/instances";

export type Editor = 
    StringDatabaseEditor |
    CutsceneEditor |
    UnitEditor |
    SkillEditor |
    AnimationEditor |
    StatusEditor |
    QuestEditor |
    InstanceEditor;

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