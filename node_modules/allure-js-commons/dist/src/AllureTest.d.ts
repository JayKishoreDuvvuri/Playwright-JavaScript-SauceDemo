import { AllureRuntime } from "./AllureRuntime";
import { ExecutableItemWrapper } from "./ExecutableItemWrapper";
export declare class AllureTest extends ExecutableItemWrapper {
    private readonly runtime;
    private readonly testResult;
    constructor(runtime: AllureRuntime, start?: number);
    endTest(stop?: number): void;
    get uuid(): string;
    set historyId(id: string);
    set fullName(fullName: string);
    addLabel(name: string, value: string): void;
    addLink(url: string, name?: string, type?: string): void;
    addIssueLink(url: string, name: string): void;
    addTmsLink(url: string, name: string): void;
}
