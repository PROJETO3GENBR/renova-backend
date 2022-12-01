import { Produto } from "../entities/produto.entity";
import { ProdutoService } from "../services/produto.service";
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    findAll(): Promise<Produto[]>;
    findById(id: number): Promise<Produto>;
    findByNome(nome: string): Promise<Produto[]>;
    create(produto: Produto): Promise<Produto>;
    update(produto: Produto): Promise<Produto>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
