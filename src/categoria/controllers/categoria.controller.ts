import { HttpStatus } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { HttpCode } from "@nestjs/common/decorators/http/http-code.decorator";
import { Get } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";


@Controller("/categoria")
export class CategoriaController {
    constructor(private categoriaService: CategoriaService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }
}