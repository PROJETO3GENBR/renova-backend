"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bcrypt = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let Bcrypt = class Bcrypt {
    async criptografarSenha(senha) {
        let saltos = 10;
        return await bcrypt.hash(senha, saltos);
    }
    async compararSenhas(senhaBanco, senhaDigitada) {
        return bcrypt.compareSync(senhaDigitada, senhaBanco);
    }
};
Bcrypt = __decorate([
    (0, common_1.Injectable)()
], Bcrypt);
exports.Bcrypt = Bcrypt;
//# sourceMappingURL=bcrypt.js.map