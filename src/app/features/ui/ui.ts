import { ProgramSettingsEditor } from "src/app/features/program-settings/program-settings";
import { ProjectSettingsEditor } from "src/app/features/project-settings/project-settings";
import { StringDatabaseEditor } from "src/app/features/string-database/string-database";
import { CutsceneEditor } from "src/app/features/cutscenes/cutscenes";
import { UnitEditor } from "src/app/features/units/units";
import { SkillEditor} from "src/app/features/skills/skills";
import { AnimationEditor } from "src/app/features/animations/animations";
import { StatusEditor } from "src/app/features/statuses/statuses";
import { QuestEditor } from "src/app/features/quests/quests";
import { InstanceEditor } from "src/app/features/instances/instances";

export type Editor = 
    ProgramSettingsEditor |
    ProjectSettingsEditor |
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
    /**
     * The ID of the editor tab.
     */
    id: number;
    
    /**
     * The ID of the editor contained in the tab.
     */
    editorId: number;

    /**
     * The name of the file currently being edited.
     */
    fileName: string;

    /**
     * Whether the current editor tab has an input field in focus.
     */
    isSelected: boolean;

    /**
     * Whether the current editor tab is pinned to appear first in the tab order.
     */
    isPinned: boolean;
}

interface EditorTabGroup {
    id: number;
    currentTabFocus: number;
    editorTabs: EditorTab[];
    height: number;
    width: number;
    //tab group dimensions
}

// state
interface UIState {
    editorTabGroups: EditorTabGroup[]
}