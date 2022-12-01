import { Produto } from "../../produto/entities/produto.entity";
export declare class Categoria {
    id: number;
    categoria_composto: boolean;
    categoria_eletronico: boolean;
    produto: Produto;
}
