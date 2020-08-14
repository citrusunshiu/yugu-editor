//classes
export interface AnimationEditor {
    id: number;
}

interface AnimationScript {
    version: 1;
    nameID: string;
    spritesheetFileName: string;
    animationPatterns: AnimationPattern[];
}

interface AnimationPattern {
    version: 1;
    nameID: string;
    totalFrames: number;
    animationPatternSignals: [
        {
            startFrame: number;
            spriteIndex: number;
        }
    ]
}