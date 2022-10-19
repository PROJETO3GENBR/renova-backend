import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Delete } from "@nestjs/common/decorators";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";


@Injectable()
export class ProdutoService{
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
        private categoriaService: CategoriaService,
        private usuarioService: UsuarioService
    ) {}
    
    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations: {
                categoria: true
            }
        });
    }
    
    async findById(id: number): Promise<Produto> {
        let produto = await this.produtoRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        });

        if (!produto)
            throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
        
        return produto;
    }

    async findByNome(nome: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where:{
                nome:ILike(`%${nome}%`)
            },
            relations:{
                categoria:true                
            }
        })
    }
    async create (produto:Produto):Promise<Produto>{
        return await this.produtoRepository.save(produto);
    }
    async update (produto:Produto):Promise<Produto>{
        let buscaProduto = await this.findById(produto.id);
        
        if (!buscaProduto || !produto.id)
            throw new HttpException('produto não encontrado',HttpStatus.NOT_FOUND);

        return await this.produtoRepository.save(produto);

    }
    async delete (id:number): Promise<DeleteResult>{

        let buscaProduto = await this.findById(id);

        if (!buscaProduto)
        throw new HttpException('produto não encontrado', HttpStatus.NOT_FOUND);
        
        return  await this.produtoRepository.delete(id);
    }
}