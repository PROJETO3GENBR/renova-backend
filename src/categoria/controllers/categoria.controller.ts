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
    //TODO - @Get('/categoria/:categoria')
    // @HttpCode(HttpStatus.OK)
    // findByCategoria(@Param('categoria')categoria: boolean): Promise<Categoria[]> {
    //     return this.categoriaService.findByCategoria(categoria);
    // }

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
