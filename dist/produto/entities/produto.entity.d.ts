import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
export declare class Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    foto: string;
    categoria: Categoria;
    usuario: Usuario;
}
