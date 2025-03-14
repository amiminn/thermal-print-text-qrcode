"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QRCode = exports.textRight = exports.textLeft = exports.textCenter = exports.lineLeft = exports.lineRight = exports.dLine = exports.sLine = exports.enterLine = exports.dotPrint = exports.printerSettings = void 0;
function printerSettings(settings) {
    if (settings === void 0) { settings = {
        dots: 8,
        lineSpacing: 30,
    }; }
    var commands = "";
    commands += "\x1b\x33" + String.fromCharCode(settings.dots);
    commands += "\x1b\x33" + String.fromCharCode(settings.lineSpacing);
    return commands;
}
exports.printerSettings = printerSettings;
function dotPrint(dots) {
    if (dots === void 0) { dots = 8; }
    var commands = "";
    commands += "\x1b\x33" + String.fromCharCode(dots);
    return commands;
}
exports.dotPrint = dotPrint;
function enterLine() {
    return "\n";
}
exports.enterLine = enterLine;
function sLine() {
    return "--------------------------------\n";
}
exports.sLine = sLine;
function dLine() {
    return "================================\n";
}
exports.dLine = dLine;
function lineRight() {
    var commands = "";
    commands += "\x1b\x61\x02";
    commands += "----------------\n";
    commands += "\x1b\x61\x00";
    return commands;
}
exports.lineRight = lineRight;
function lineLeft() {
    var commands = "";
    commands += "\x1b\x61\x00";
    commands += "----------------\n";
    commands += "\x1b\x61\x00";
    return commands;
}
exports.lineLeft = lineLeft;
function textCenter(text) {
    var commands = "";
    commands += "\x1b\x61\x01";
    commands += "".concat(text, "\n");
    commands += "\x1b\x61\x00";
    return commands;
}
exports.textCenter = textCenter;
function textLeft(text) {
    var commands = "";
    commands += "\x1b\x61\x00";
    commands += "".concat(text, "\n");
    commands += "\x1b\x61\x00";
    return commands;
}
exports.textLeft = textLeft;
function textRight(text) {
    var commands = "";
    commands += "\x1b\x61\x02";
    commands += "".concat(text, "\n");
    commands += "\x1b\x61\x00";
    return commands;
}
exports.textRight = textRight;
function QRCode(_a) {
    var text = _a.text, _b = _a.model, model = _b === void 0 ? 2 : _b, _c = _a.size, size = _c === void 0 ? 5 : _c;
    var commands = "";
    var qrCodeModel = model;
    var qrCodeSize = size;
    var qrCodeErrorCorrection = 48 + 3;
    commands += "\x1b\x33\x08";
    commands += "\x1b\x61\x01";
    commands +=
        "\x1d\x28\x6b\x04\x00\x31\x41" + String.fromCharCode(qrCodeModel) + "\x00";
    commands += "\x1d\x28\x6b\x03\x00\x31\x43" + String.fromCharCode(qrCodeSize);
    commands +=
        "\x1d\x28\x6b\x03\x00\x31\x45" + String.fromCharCode(qrCodeErrorCorrection);
    var qrCodeDataLength = text.length + 3;
    var pL = qrCodeDataLength % 256;
    var pH = Math.floor(qrCodeDataLength / 256);
    commands +=
        "\x1d\x28\x6b" + String.fromCharCode(pL, pH) + "\x31\x50\x30" + text;
    commands += "\x1d\x28\x6b\x03\x00\x31\x51\x30";
    commands += "\x1b\x61\x00";
    return commands;
}
exports.QRCode = QRCode;
