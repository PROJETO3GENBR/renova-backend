"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt_1 = require("../auth/bcrypt/bcrypt");
const usuario_controller_1 = require("./controllers/usuario.controller");
const usuario_entity_1 = require("./entities/usuario.entity");
const usuario_service_1 = require("./services/usuario.service");
let UsuarioModule = class UsuarioModule {
};
UsuarioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([usuario_entity_1.Usuario])],
        providers: [usuario_service_1.UsuarioService, bcrypt_1.Bcrypt],
        controllers: [usuario_controller_1.UsuarioController],
        exports: [usuario_service_1.UsuarioService],
    })
], UsuarioModule);
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map