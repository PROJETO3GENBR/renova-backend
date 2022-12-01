"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const usuario_service_1 = require("../../usuario/services/usuario.service");
const bcrypt_1 = require("../bcrypt/bcrypt");
let AuthService = class AuthService {
    constructor(usuarioService, jwtService, bcrypt) {
        this.usuarioService = usuarioService;
        this.jwtService = jwtService;
        this.bcrypt = bcrypt;
    }
    async validateUser(username, password) {
        const buscaUsuario = await this.usuarioService.findByUsuario(username);
        if (!buscaUsuario)
            throw new common_1.HttpException('Usuário não encontrado!', common_1.HttpStatus.NOT_FOUND);
        const match = await this.bcrypt.compararSenhas(buscaUsuario.senha, password);
        if (buscaUsuario && match) {
            const { senha } = buscaUsuario, result = __rest(buscaUsuario, ["senha"]);
            return result;
        }
        return null;
    }
    async login(usuarioLogin) {
        const payload = { username: usuarioLogin.usuario, sub: "renova" };
        return {
            usuario: usuarioLogin.usuario,
            token: `Bearer ${this.jwtService.sign(payload)}`,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
        jwt_1.JwtService,
        bcrypt_1.Bcrypt])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map