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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const enums_1 = require("@nestjs/common/enums");
const pipes_1 = require("@nestjs/common/pipes");
const produto_entity_1 = require("../entities/produto.entity");
const produto_service_1 = require("../services/produto.service");
let ProdutoController = class ProdutoController {
    constructor(produtoService) {
        this.produtoService = produtoService;
    }
    findAll() {
        return this.produtoService.findAll();
    }
    findById(id) {
        return this.produtoService.findById(id);
    }
    findByNome(nome) {
        return this.produtoService.findByNome(nome);
    }
    create(produto) {
        return this.produtoService.create(produto);
    }
    update(produto) {
        return this.produtoService.update(produto);
    }
    delete(id) {
        return this.produtoService.delete(id);
    }
};
__decorate([
    (0, decorators_1.Get)(),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findAll", null);
__decorate([
    (0, decorators_1.Get)('/:id'),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __param(0, (0, decorators_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findById", null);
__decorate([
    (0, decorators_1.Get)('/nome/:nome'),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __param(0, (0, decorators_1.Param)('nome')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "findByNome", null);
__decorate([
    (0, decorators_1.Post)(),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_entity_1.Produto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "create", null);
__decorate([
    (0, decorators_1.Put)(),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.OK),
    __param(0, (0, decorators_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [produto_entity_1.Produto]),
    __metadata("design:returntype", Promise)
], ProdutoController.prototype, "update", null);
__decorate([
    (0, decorators_1.Delete)('/:id'),
    (0, decorators_1.HttpCode)(enums_1.HttpStatus.NO_CONTENT),
    __param(0, (0, decorators_1.Param)('id', pipes_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ProdutoController.prototype, "delete", null);
ProdutoController = __decorate([
    (0, decorators_1.Controller)('/produto'),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ProdutoController);
exports.ProdutoController = ProdutoController;
//# sourceMappingURL=produto.controller.js.map