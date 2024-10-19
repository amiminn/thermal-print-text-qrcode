# @amiminn/print-thermal

Print thermal library

## Installation

Capacitor print-thermal dengan library dukungan dari
[@kduma-autoid/capacitor-bluetooth-printer](https://github.com/kduma-autoid/capacitor-bluetooth-printer)

```bash
npm i @amiminn/print-thermal
```

## example

```jsx
import { BluetoothPrinter } from "@kduma-autoid/capacitor-bluetooth-printer";
import {
  dotPrint,
  enterLine,
  sLine,
  dLine,
  QRCode,
  textCenter,
} from "@amiminn/print-thermal";

function contextPrint() {
  let text = "";
  text += dotPrint();
  text += enterLine();
  text += sLine();
  text += textCenter("thermalPrint @amiminn");
  text += dLine();
  text += enterLine();
  text += QRCode({ text: "https://amiminn.my.id" });
  text += enterLine();
  text += textCenter("React, Typescript, Capacitor");
  return text;
}

const printerCommands = contextPrint();

await BluetoothPrinter.print({
  data: printerCommands,
});
```

## output

![alt text](https://github.com/amiminn/thermal-print-text-qrcode/blob/main/output_print.jpeg?raw=true)
