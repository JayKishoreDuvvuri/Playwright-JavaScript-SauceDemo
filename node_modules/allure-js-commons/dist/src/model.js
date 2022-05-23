"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkType = exports.ContentType = exports.Severity = exports.LabelName = exports.Stage = exports.Status = void 0;
var Status;
(function (Status) {
    Status["FAILED"] = "failed";
    Status["BROKEN"] = "broken";
    Status["PASSED"] = "passed";
    Status["SKIPPED"] = "skipped";
})(Status = exports.Status || (exports.Status = {}));
var Stage;
(function (Stage) {
    Stage["SCHEDULED"] = "scheduled";
    Stage["RUNNING"] = "running";
    Stage["FINISHED"] = "finished";
    Stage["PENDING"] = "pending";
    Stage["INTERRUPTED"] = "interrupted";
})(Stage = exports.Stage || (exports.Stage = {}));
var LabelName;
(function (LabelName) {
    LabelName["AS_ID"] = "AS_ID";
    LabelName["SUITE"] = "suite";
    LabelName["PARENT_SUITE"] = "parentSuite";
    LabelName["SUB_SUITE"] = "subSuite";
    LabelName["EPIC"] = "epic";
    LabelName["FEATURE"] = "feature";
    LabelName["STORY"] = "story";
    LabelName["SEVERITY"] = "severity";
    LabelName["TAG"] = "tag";
    LabelName["OWNER"] = "owner";
    LabelName["LEAD"] = "lead";
    LabelName["HOST"] = "host";
    LabelName["THREAD"] = "thread";
    LabelName["TEST_METHOD"] = "testMethod";
    LabelName["TEST_CLASS"] = "testClass";
    LabelName["PACKAGE"] = "package";
    LabelName["FRAMEWORK"] = "framework";
    LabelName["LANGUAGE"] = "language";
})(LabelName = exports.LabelName || (exports.LabelName = {}));
var Severity;
(function (Severity) {
    Severity["BLOCKER"] = "blocker";
    Severity["CRITICAL"] = "critical";
    Severity["NORMAL"] = "normal";
    Severity["MINOR"] = "minor";
    Severity["TRIVIAL"] = "trivial";
})(Severity = exports.Severity || (exports.Severity = {}));
var ContentType;
(function (ContentType) {
    ContentType["TEXT"] = "text/plain";
    ContentType["XML"] = "application/xml";
    ContentType["CSV"] = "text/csv";
    ContentType["TSV"] = "text/tab-separated-values";
    ContentType["CSS"] = "text/css";
    ContentType["URI"] = "text/uri-list";
    ContentType["SVG"] = "image/svg+xml";
    ContentType["PNG"] = "image/png";
    ContentType["JSON"] = "application/json";
    ContentType["ZIP"] = "application/zip";
    ContentType["WEBM"] = "video/webm";
    ContentType["JPEG"] = "image/jpeg";
})(ContentType = exports.ContentType || (exports.ContentType = {}));
var LinkType;
(function (LinkType) {
    LinkType["ISSUE"] = "issue";
    LinkType["TMS"] = "tms";
})(LinkType = exports.LinkType || (exports.LinkType = {}));
//# sourceMappingURL=model.js.map