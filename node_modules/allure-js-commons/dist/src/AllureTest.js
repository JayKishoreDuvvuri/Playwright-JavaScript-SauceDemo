"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllureTest = void 0;
const constructors_1 = require("./constructors");
const ExecutableItemWrapper_1 = require("./ExecutableItemWrapper");
const model_1 = require("./model");
class AllureTest extends ExecutableItemWrapper_1.ExecutableItemWrapper {
    constructor(runtime, start = Date.now()) {
        super((0, constructors_1.testResult)());
        this.runtime = runtime;
        this.testResult = this.wrappedItem;
        this.testResult.start = start;
    }
    endTest(stop = Date.now()) {
        this.testResult.stop = stop;
        this.runtime.writeResult(this.testResult);
    }
    get uuid() {
        return this.testResult.uuid;
    }
    set historyId(id) {
        this.testResult.historyId = id;
    }
    set fullName(fullName) {
        this.testResult.fullName = fullName;
    }
    addLabel(name, value) {
        this.testResult.labels.push({ name, value });
    }
    addLink(url, name, type) {
        this.testResult.links.push({ name, url, type });
    }
    addIssueLink(url, name) {
        this.addLink(url, name, model_1.LinkType.ISSUE);
    }
    addTmsLink(url, name) {
        this.addLink(url, name, model_1.LinkType.TMS);
    }
}
exports.AllureTest = AllureTest;
//# sourceMappingURL=AllureTest.js.map