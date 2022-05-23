"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeToExtension = void 0;
const model_1 = require("../model");
const typeToExtension = (options) => {
    if (options.fileExtension) {
        return options.fileExtension;
    }
    switch (options.contentType) {
        case model_1.ContentType.TEXT:
            return "txt";
        case model_1.ContentType.XML:
            return "xml";
        case model_1.ContentType.CSV:
            return "csv";
        case model_1.ContentType.TSV:
            return "tsv";
        case model_1.ContentType.CSS:
            return "css";
        case model_1.ContentType.URI:
            return "uri";
        case model_1.ContentType.SVG:
            return "svg";
        case model_1.ContentType.PNG:
            return "png";
        case model_1.ContentType.JSON:
            return "json";
        case model_1.ContentType.ZIP:
            return "ZIP";
        case model_1.ContentType.WEBM:
            return "webm";
        case model_1.ContentType.JPEG:
            return "jpg";
    }
    throw new Error(`Unrecognized extension: ${options.contentType}`);
};
exports.typeToExtension = typeToExtension;
//# sourceMappingURL=utils.js.map