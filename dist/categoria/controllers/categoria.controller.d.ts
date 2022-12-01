import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../services/categoria.service";
export declare class CategoriaController {
    private categoriaService;
    constructor(categoriaService: CategoriaService);
    create(categoria: Categoria): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria>;
    updade(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
