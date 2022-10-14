import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "src/categoria/entities/categoria.entity"
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>

    ) { }
    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }
    async findById(id: number): Promise<Categoria> {
        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            }
        });
        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria;

    }
    //  async findByCategoria(categoria_composto: boolean): Promise<Categoria[]>{
    //      return await this.categoriaRepository.find({
    //          where:{
    //              categoria:ILike(`%${categoria_composto}%`)
    //          }
    //      })
    //  }


    async create(categoria: Categoria): Promise<Categoria> {
        return await this.categoriaRepository.save(categoria);
    }
    async update(categoria: Categoria): Promise<Categoria> {
        let buscaCategoria: Categoria = await this.findById(categoria.id);

        console.table(buscaCategoria);

        if (!buscaCategoria || !categoria.id)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.save(categoria);

    }
    async delete(id: number): Promise<DeleteResult>{

        let buscaCategoria = await this.findById(id);

        if (!buscaCategoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return await this.categoriaRepository.delete(id);

    }

}