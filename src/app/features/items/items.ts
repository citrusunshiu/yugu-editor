// classes
export interface ItemEditor {
    id: number;
}

interface Item {
    version: 1;
    itemType: string;
    onUseFunctionName: string;
}