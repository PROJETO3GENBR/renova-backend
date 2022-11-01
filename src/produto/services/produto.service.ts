import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>
  ){}

  /**
 * @desc Salva uma produto no banco de dados
 * @param Produto
 * @returns objeto de produto
 */
  async create(produto: Produto): Promise<Produto> { 
    return await this.produtoRepository.save(produto);
  }

  /**
   * @desc Essa função será usada para trazer todos os produtos cadastrados.
   * @return Retorna um array de obejetos de produto
   * @example findAll () Todos os produtos cadastrados no banco de dados serão exibidos.
   */
  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find({
      relations: {
        categoria: true,
        usuario: true
      }
    });
  }

  /**
   * @desc Mostra um produto pelo id
   * @param id do produto que será exibido
   * @returns Um objeto de produto
   * @throws HttpException em caso de produto não encontrado
   * @example findById(1) // O produto com id 1 será exibido
   */
  async findById(id: number): Promise<Produto> {
    let produto = await this.produtoRepository.findOne({
      where: {id},
      relations: {
        categoria: true,
        usuario: true
      }
    });
    if(!produto)
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    return produto;
  }

  /**
   * @desc Mostra os produtos pelo nom  
   * @returns Um array de um objeto produto.
   */
  async findByNome(nome: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {nome: ILike(`%${nome}%`)},
      relations:{
        categoria: true,
        usuario: true
      }
    })
  }

  /**
     * @desc Atualiza um produto no banco de dados
     * @param produto que será atualizado
     * @returns objeto de um produto
     * @throws HttpException Em caso do produto recebido não ser encontrado
     */
  async update(produto: Produto): Promise<Produto> {
    let buscaProduto = await this.findById(produto.id);
    if (!buscaProduto || !produto.id)
      throw new HttpException('produto não encontrado', HttpStatus.NOT_FOUND);
    return await this.produtoRepository.save(produto);

  }

  /**
   * @desc Deleção de um produto no banco de dados
   * @param id de um produto que será deletado
   * @returns void
   * @throw HttpException Em caso de um produto recebido não ser encontrado
   * @example  delete(1) //  O produto referenciado pelo id 1 será removido
   */
  async delete(id: number): Promise<DeleteResult> {
    let buscaProduto = await this.findById(id);
    if (!buscaProduto)
      throw new HttpException('produto não encontrado', HttpStatus.NOT_FOUND);
    return await this.produtoRepository.delete(id);
  }
}