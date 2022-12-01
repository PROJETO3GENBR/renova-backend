import { DeleteResult, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
export declare class ProdutoService {
    private produtoRepository;
    constructor(produtoRepository: Repository<Produto>);
    create(produto: Produto): Promise<Produto>;
    findAll(): Promise<Produto[]>;
    findById(id: number): Promise<Produto>;
    findByNome(nome: string): Promise<Produto[]>;
    update(produto: Produto): Promise<Produto>;
    delete(id: number): Promise<DeleteResult>;
}
