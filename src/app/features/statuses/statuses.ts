//classes
export interface StatusEditor {
    id: number;
}

interface Status {
    version: 1;
    nameID: string;
    summaryID: string;
    descriptionID: string;
    statusType: string;
    statusID: string;
    isStackable: boolean;
    statusFunctionName: string;
}