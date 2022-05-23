import { AttachmentOptions, ContentType, FixtureResult, Stage, Status, StatusDetails, StepResult, TestResult } from "./model";
export declare class ExecutableItemWrapper {
    private readonly info;
    constructor(info: FixtureResult | TestResult);
    protected get wrappedItem(): FixtureResult | TestResult;
    set name(name: string);
    set description(description: string | undefined);
    set descriptionHtml(descriptionHtml: string | undefined);
    set status(status: Status | undefined);
    get status(): Status | undefined;
    set statusDetails(details: StatusDetails);
    set detailsMessage(message: string | undefined);
    set detailsTrace(trace: string | undefined);
    set stage(stage: Stage);
    addParameter(name: string, value: string): void;
    addAttachment(name: string, options: ContentType | string | AttachmentOptions, fileName: string): void;
    startStep(name: string, start?: number): AllureStep;
    wrap<T>(fun: (...args: any[]) => T): (...args: any[]) => T;
}
export declare class AllureStep extends ExecutableItemWrapper {
    private readonly stepResult;
    constructor(stepResult: StepResult, start?: number);
    endStep(stop?: number): void;
}
