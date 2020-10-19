//classes
export interface StatusEditor {
    id: number;
}

interface Status {
    version: 1;
    nameID: string;
    summaryID: string;
    longDescriptionID: string;
    statusFunctionName: string;
}