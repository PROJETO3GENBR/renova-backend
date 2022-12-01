import { Categoria } from "../../categoria/entities/categoria.entity";
import { DeleteResult, Repository } from "typeorm";
export declare class CategoriaService {
    private categoriaRepository;
    constructor(categoriaRepository: Repository<Categoria>);
    findAll(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria>;
    create(categoria: Categoria): Promise<Categoria>;
    update(categoria: Categoria): Promise<Categoria>;
    delete(id: number): Promise<DeleteResult>;
}
