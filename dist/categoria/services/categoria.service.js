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
exports.CategoriaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const categoria_entity_1 = require("../../categoria/entities/categoria.entity");
const typeorm_2 = require("typeorm");
let CategoriaService = class CategoriaService {
    constructor(categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }
    async findAll() {
        return await this.categoriaRepository.find();
    }
    async findById(id) {
        let categoria = await this.categoriaRepository.findOne({ where: { id } });
        if (!categoria)
            throw new common_1.HttpException('Categoria não encontrada!', common_1.HttpStatus.NOT_FOUND);
        return categoria;
    }
    async create(categoria) {
        return await this.categoriaRepository.save(categoria);
    }
    async update(categoria) {
        let buscaCategoria = await this.findById(categoria.id);
        if (!buscaCategoria || !categoria.id)
            throw new common_1.HttpException('Postagem não encontrada', common_1.HttpStatus.NOT_FOUND);
        return await this.categoriaRepository.save(categoria);
    }
    async delete(id) {
        let buscaCategoria = await this.findById(id);
        if (!buscaCategoria)
            throw new common_1.HttpException('Categoria não encontrada!', common_1.HttpStatus.NOT_FOUND);
        return await this.categoriaRepository.delete(id);
    }
};
CategoriaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(categoria_entity_1.Categoria)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CategoriaService);
exports.CategoriaService = CategoriaService;
//# sourceMappingURL=categoria.service.js.map