# @amiminn/print-thermal

Print thermal library

Hasil Sample Build : [Download APK file](https://github.com/amiminn/thermal-print-text-qrcode/releases/download/%23thermalprint/Sample.Thermal.Print.apk)

## Installation

Capacitor print-thermal dengan library dukungan dari
[@kduma-autoid/capacitor-bluetooth-printer](https://github.com/kduma-autoid/capacitor-bluetooth-printer)

```bash
npm i @amiminn/print-thermal
```

## Usage

Import and use the functions as needed:
```bash
import { printerSettings, enterLine, sLine, dLine, lineRight, lineLeft, textCenter, textLeft, textRight, QRCode } from "@amiminn/print-thermal";
```
Configure Printer Settings
```bash
const commands = printerSettings({ dots: 8, lineSpacing: 30 });
console.log(commands);
```
Print New Line
```bash
console.log(enterLine());
```
Print Single and Double Lines
```bash
console.log(sLine());
console.log(dLine());
```
Align Text
```bash
console.log(textCenter("Centered Text"));
console.log(textLeft("Left Aligned Text"));
console.log(textRight("Right Aligned Text"));
```
Print QR Code
```bash
const qrCodeCommand = QRCode({ text: "https://example.com", model: 2, size: 5 });
console.log(qrCodeCommand);
```
## example

```jsx
import { BluetoothPrinter } from "@kduma-autoid/capacitor-bluetooth-printer";
import {
  enterLine,
  printerSettings,
  QRCode,
  textCenter,
} from "@amiminn/print-thermal";

function contextPrint() {
  let text = "";
  text += printerSettings();
  text += enterLine();
  text += textCenter("thermalPrint @amiminn");
  text += enterLine();
  text += QRCode({ text: "https://amiminn.my.id" });
  text += enterLine();
  text += textCenter("React, Typescript, Capacitor");
  return text;
}

const printerCommands = contextPrint();

await BluetoothPrinter.connectAndPrint({
   data: printerCommands,
   address: "66:32:01:0F:7C:4C",
});
```

## output

![alt text](https://github.com/amiminn/thermal-print-text-qrcode/blob/main/output_print.jpeg?raw=true)
