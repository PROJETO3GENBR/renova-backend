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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const class_validator_1 = require("class-validator");
const produto_entity_1 = require("../../produto/entities/produto.entity");
const typeorm_1 = require("typeorm");
let Usuario = class Usuario {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    ApiProperty(),
    __metadata("design:type", Number)
], Usuario.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    ApiProperty(),
    __metadata("design:type", String)
], Usuario.prototype, "usuario", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    ApiProperty({ example: 'email@email.com' }),
    __metadata("design:type", String)
], Usuario.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    ApiProperty({ example: 'password' }),
    __metadata("design:type", String)
], Usuario.prototype, "senha", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    ApiProperty(),
    __metadata("design:type", String)
], Usuario.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => produto_entity_1.Produto, (produto) => produto.usuario),
    __metadata("design:type", produto_entity_1.Produto)
], Usuario.prototype, "produto", void 0);
Usuario = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_usuario' })
], Usuario);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.entity.js.map