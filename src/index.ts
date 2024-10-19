export function dotPrint(dots: number = 8) {
  let commands = "";
  commands += "\x1b\x33" + String.fromCharCode(dots);
  return commands;
}

export function enterLine() {
  return "\n";
}

export function sLine() {
  return "--------------------------------\n";
}

export function dLine() {
  return "================================\n";
}

export function lineRight() {
  let commands = "";
  commands += "\x1b\x61\x02";
  commands += `----------------\n`;
  commands += "\x1b\x61\x00";
  return commands;
}

export function lineLeft() {
  let commands = "";
  commands += "\x1b\x61\x00";
  commands += `----------------\n`;
  commands += "\x1b\x61\x00";
  return commands;
}

export function textCenter(text: string): string {
  let commands = "";
  commands += "\x1b\x61\x01";
  commands += `${text}\n`;
  commands += "\x1b\x61\x00";
  return commands;
}

export function textLeft(text: string): string {
  let commands = "";
  commands += "\x1b\x61\x00";
  commands += `${text}\n`;
  commands += "\x1b\x61\x00";
  return commands;
}

export function textRight(text: string): string {
  let commands = "";
  commands += "\x1b\x61\x02";
  commands += `${text}\n`;
  commands += "\x1b\x61\x00";
  return commands;
}

interface QRCodeOptions {
  text: string;
  model?: number;
  size?: number;
}

export function QRCode({ text, model = 2, size = 5 }: QRCodeOptions): string {
  let commands = "";
  const qrCodeModel = model;
  const qrCodeSize = size;
  const qrCodeErrorCorrection = 48 + 3;
  commands += "\x1b\x33\x08";
  commands += "\x1b\x61\x01";

  commands +=
    "\x1d\x28\x6b\x04\x00\x31\x41" + String.fromCharCode(qrCodeModel) + "\x00";

  commands += "\x1d\x28\x6b\x03\x00\x31\x43" + String.fromCharCode(qrCodeSize);

  commands +=
    "\x1d\x28\x6b\x03\x00\x31\x45" + String.fromCharCode(qrCodeErrorCorrection);

  const qrCodeDataLength = text.length + 3;
  const pL = qrCodeDataLength % 256;
  const pH = Math.floor(qrCodeDataLength / 256);
  commands +=
    "\x1d\x28\x6b" + String.fromCharCode(pL, pH) + "\x31\x50\x30" + text;

  commands += "\x1d\x28\x6b\x03\x00\x31\x51\x30";
  commands += "\x1b\x61\x00";

  return commands;
}
