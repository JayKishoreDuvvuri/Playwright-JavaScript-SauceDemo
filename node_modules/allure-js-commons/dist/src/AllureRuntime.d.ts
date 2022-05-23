/// <reference types="node" />
import { PathLike } from "fs";
import { AllureConfig } from "./AllureConfig";
import { AllureGroup } from "./AllureGroup";
import { AttachmentOptions, Category, ContentType, TestResult, TestResultContainer } from "./model";
export declare class AllureRuntime {
    private config;
    private writer;
    constructor(config: AllureConfig);
    startGroup(name?: string): AllureGroup;
    writeResult(result: TestResult): void;
    writeGroup(result: TestResultContainer): void;
    writeAttachment(content: Buffer | string, options: ContentType | string | AttachmentOptions): string;
    writeAttachmentFromPath(fromPath: PathLike, options: ContentType | string | AttachmentOptions): string;
    writeEnvironmentInfo(info?: Record<string, string>): void;
    writeCategoriesDefinitions(categories: Category[]): void;
}
