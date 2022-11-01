import { Body,Controller,Delete, Get, HttpCode , HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";

@ApiTags('Categoria')
@Controller("/categoria")
//TODO: Verificar funcionalidade
@ApiBearerAuth()
export class CategoriaController {
    constructor(private categoriaService: CategoriaService) { }

    @Post()//CREATE
    @HttpCode(HttpStatus.CREATED)  
    create(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.create(categoria);
    }
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }
    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);

    }

    @Get('/categoria/composto')
    @HttpCode(HttpStatus.OK)
    findByComposto(): Promise<Categoria[]> {
        return this.categoriaService.findByComposto();
    }

    @Get('/categoria/eletronico')
    @HttpCode(HttpStatus.OK)
    findByEletronico(): Promise<Categoria[]> {
        return this.categoriaService.findByEletronico();
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    updade(@Body() categoria: Categoria): Promise<Categoria> {
        return this.categoriaService.update(categoria);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.categoriaService.delete(id);
    }
}
