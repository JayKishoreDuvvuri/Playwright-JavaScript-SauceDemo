"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testResult = exports.stepResult = exports.fixtureResult = exports.testResultContainer = void 0;
const uuid_1 = require("uuid");
const model_1 = require("./model");
const testResultContainer = () => {
    return {
        uuid: (0, uuid_1.v4)(),
        children: [],
        befores: [],
        afters: [],
    };
};
exports.testResultContainer = testResultContainer;
const fixtureResult = () => {
    return {
        status: model_1.Status.BROKEN,
        statusDetails: {},
        stage: model_1.Stage.PENDING,
        steps: [],
        attachments: [],
        parameters: [],
    };
};
exports.fixtureResult = fixtureResult;
const stepResult = () => {
    return {
        status: undefined,
        statusDetails: {},
        stage: model_1.Stage.PENDING,
        steps: [],
        attachments: [],
        parameters: [],
    };
};
exports.stepResult = stepResult;
const testResult = () => {
    return {
        uuid: (0, uuid_1.v4)(),
        historyId: (0, uuid_1.v4)(),
        status: undefined,
        statusDetails: {},
        stage: model_1.Stage.PENDING,
        steps: [],
        attachments: [],
        parameters: [],
        labels: [],
        links: [],
    };
};
exports.testResult = testResult;
//# sourceMappingURL=constructors.js.map