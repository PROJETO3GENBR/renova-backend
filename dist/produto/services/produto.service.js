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
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const produto_entity_1 = require("../entities/produto.entity");
let ProdutoService = class ProdutoService {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async create(produto) {
        return await this.produtoRepository.save(produto);
    }
    async findAll() {
        return await this.produtoRepository.find({
            relations: {
                categoria: true,
                usuario: true
            }
        });
    }
    async findById(id) {
        let produto = await this.produtoRepository.findOne({
            where: { id },
            relations: {
                categoria: true,
                usuario: true
            }
        });
        if (!produto)
            throw new common_1.HttpException('Produto não encontrado!', common_1.HttpStatus.NOT_FOUND);
        return produto;
    }
    async findByNome(nome) {
        return await this.produtoRepository.find({
            where: { nome: (0, typeorm_2.ILike)(`%${nome}%`) },
            relations: {
                categoria: true,
                usuario: true
            }
        });
    }
    async update(produto) {
        let buscaProduto = await this.findById(produto.id);
        if (!buscaProduto || !produto.id)
            throw new common_1.HttpException('produto não encontrado', common_1.HttpStatus.NOT_FOUND);
        return await this.produtoRepository.save(produto);
    }
    async delete(id) {
        let buscaProduto = await this.findById(id);
        if (!buscaProduto)
            throw new common_1.HttpException('produto não encontrado', common_1.HttpStatus.NOT_FOUND);
        return await this.produtoRepository.delete(id);
    }
};
ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(produto_entity_1.Produto)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map