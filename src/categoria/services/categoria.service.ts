import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity"
import { DeleteResult, Repository } from "typeorm";

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>
	){}

  /**
   * @desc Essa função será usada para trazer todas as categorias cadastradas.
   * @return Retorna um array de obejetos de Categoria
   * @example findAll () Todas as categorias cadastradas no banco de dados será exibidas.
   */
  async findAll(): Promise<Categoria[]> {
    return await this.categoriaRepository.find();
  }

  /**
   * @desc Mostra uma categoria pelo id
   * @param id do produto que será exibido
   * @returns Um objeto de categoria
   * @throws HttpException em caso de Categoria não encontrada
   * @example findById(1) // A categoria com id 1 será exibida
   */
  async findById(id: number): Promise<Categoria> {
    let categoria = await this.categoriaRepository.findOne({where: {id}});
    if (!categoria)
      throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
    return categoria;
  }

  /**
   * @desc Mostra categoria composto no banco de dados  
   * @returns Um array de objeto de categoria.
   */
  async findByComposto(): Promise<Categoria[]>{
      return await this.categoriaRepository.find({
      where:{
        categoria_composto:true 
    }
    })
  }

  /**
   * @desc Mostra categoria eletronico no banco de dados
   * @returns Um array de objeto de categoria.
   */
  async findByEletronico(): Promise<Categoria[]>{
    return await this.categoriaRepository.find({
    where:{
      categoria_eletronico :true 
  }
  })
}

/**
 * @desc Salva uma categoria no banco de dados
 * @param categoria 
 * @returns objeto de categoria
 */
  async create(categoria: Categoria): Promise<Categoria> {
    return await this.categoriaRepository.save(categoria);
    }

    /**
     * @desc Atualiza uma categoria no banco de dados
     * @param categoria que será atualizada
     * @returns objeto de categoria
     * @throws HttpException Em caso da categoria recebida não ser encontrada
     * 
     */
  async update(categoria: Categoria): Promise<Categoria> {
    let buscaCategoria: Categoria = await this.findById(categoria.id);
    if (!buscaCategoria || !categoria.id)
      throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
      return await this.categoriaRepository.save(categoria);
  }


  /**
   * @desc Deleção de uma categoria no banco de dados
   * @param id da categoria que será deletada
   * @returns void
   * @throw HttpException Em caso da categoria recebida não ser encontrada
   * @example  delete(1) //  O produto referenciado pelo id 1 será removido
   */
  async delete(id: number): Promise<DeleteResult>{
    let buscaCategoria = await this.findById(id);
    if (!buscaCategoria)
      throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);
    return await this.categoriaRepository.delete(id);
  }
}