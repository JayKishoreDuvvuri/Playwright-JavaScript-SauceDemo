"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Allure = void 0;
const model_1 = require("./model");
const model_2 = require("./model");
class Allure {
    constructor(runtime) {
        this.runtime = runtime;
    }
    epic(epic) {
        this.label(model_2.LabelName.EPIC, epic);
    }
    feature(feature) {
        this.label(model_2.LabelName.FEATURE, feature);
    }
    story(story) {
        this.label(model_2.LabelName.STORY, story);
    }
    suite(name) {
        this.label(model_2.LabelName.SUITE, name);
    }
    parentSuite(name) {
        this.label(model_2.LabelName.PARENT_SUITE, name);
    }
    subSuite(name) {
        this.label(model_2.LabelName.SUB_SUITE, name);
    }
    label(name, value) {
        this.currentTest.addLabel(name, value);
    }
    parameter(name, value) {
        this.currentExecutable.addParameter(name, value);
    }
    link(url, name, type) {
        this.currentTest.addLink(url, name, type);
    }
    issue(name, url) {
        this.link(url, name, model_1.LinkType.ISSUE);
    }
    tms(name, url) {
        this.link(url, name, model_1.LinkType.TMS);
    }
    description(markdown) {
        this.currentExecutable.description = markdown;
    }
    descriptionHtml(html) {
        this.currentExecutable.descriptionHtml = html;
    }
    owner(owner) {
        this.label(model_2.LabelName.OWNER, owner);
    }
    severity(severity) {
        this.label(model_2.LabelName.SEVERITY, severity);
    }
    tag(tag) {
        this.label(model_2.LabelName.TAG, tag);
    }
    writeEnvironmentInfo(info) {
        this.runtime.writeEnvironmentInfo(info);
    }
    writeCategoriesDefinitions(categories) {
        this.runtime.writeCategoriesDefinitions(categories);
    }
    createStep(name, stepFunction) {
        return (...args) => this.step(name, () => stepFunction.apply(this, args));
    }
    createAttachment(name, content, type) {
        if (typeof content === "function") {
            return (...args) => {
                this.attachment(name, content.apply(this, args), type);
            };
        }
        else {
            this.attachment(name, content, type);
        }
    }
}
exports.Allure = Allure;
//# sourceMappingURL=Allure.js.map