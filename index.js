"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const msg2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function sum(num1, num2) {
    const res = Number(num1) + Number(num2);
    return res;
}
;
function div(num1, num2) {
    if (Number(num2) == 0) {
        return 0;
    }
    else {
        const res = Number(num1) / Number(num2);
        return res;
    }
}
function mul(num1, num2) {
    const res = Number(num1) * Number(num2);
    return res;
}
function subt(num1, num2) {
    const res = Number(num1) - Number(num2);
    return res;
}
const dev_name = 'Ihtesham Jahangir';
console.log(`Mini Calculator by ${dev_name} `);
msg2.question('Enter Number1:', (num1) => {
    msg2.question('Enter Number2:', (num2) => {
        msg2.question('\nChoose Your Operation\n 1:Addition\n 2:Multiplication\n 3:Division \n 4:Subtraction \n', (choose) => {
            switch (Number(choose)) {
                case 1:
                    {
                        const res = sum(num1, num2);
                        console.log(`Res = ${res}`);
                    }
                    break;
                case 2:
                    {
                        const res = mul(num1, num2);
                        console.log(`Res = ${res}`);
                    }
                    break;
                case 3:
                    {
                        const res = div(num1, num2);
                        if (res == 0) {
                            console.log('Number2 Must be Greater then 0');
                        }
                        else {
                            console.log(`Res = ${res}`);
                        }
                    }
                    break;
                case 4: {
                    const res = subt(num1, num2);
                    console.log(`Res = ${res}`);
                }
            }
            msg2.close();
        });
    });
});
