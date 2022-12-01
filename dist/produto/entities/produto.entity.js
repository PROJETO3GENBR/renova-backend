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
exports.Produto = void 0;
const class_validator_1 = require("class-validator");
const categoria_entity_1 = require("../../categoria/entities/categoria.entity");
const usuario_entity_1 = require("../../usuario/entities/usuario.entity");
const typeorm_1 = require("typeorm");
let Produto = class Produto {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Produto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 100, nullable: false }),
    __metadata("design:type", String)
], Produto.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 300, nullable: false }),
    __metadata("design:type", String)
], Produto.prototype, "descricao", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ type: "decimal", precision: 5, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], Produto.prototype, "preco", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, typeorm_1.Column)({ length: 255, nullable: false }),
    __metadata("design:type", String)
], Produto.prototype, "foto", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => categoria_entity_1.Categoria, (categoria) => categoria.produto, { onDelete: "CASCADE" }),
    __metadata("design:type", categoria_entity_1.Categoria)
], Produto.prototype, "categoria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.produto, { onDelete: "CASCADE" }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Produto.prototype, "usuario", void 0);
Produto = __decorate([
    (0, typeorm_1.Entity)({ name: 'tb_produto' })
], Produto);
exports.Produto = Produto;
//# sourceMappingURL=produto.entity.js.map