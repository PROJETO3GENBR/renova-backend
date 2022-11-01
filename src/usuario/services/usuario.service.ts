import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";
import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";


@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
    private bcrypt: Bcrypt
  ) { }

  /**
 * @desc Salva um usuario no banco de dados
 * @param categoria 
 * @returns objeto de produto
 */
  async create(usuario: Usuario): Promise<Usuario> {
    return await this.usuarioRepository.save(usuario);
  }

/**
   * @desc Essa função será usada para trazer todos os usuarios cadastrados.
   * @return Retorna um array de obejetos de Usuario
   * @example findAll () Todos as usuarios cadastrados no banco de dados será exibidas.
   */
  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find({
      relations: {
        produto: true
      }
    });
  }
 /**
   * @desc Mostra um usuario pelo id
   * @param id do usuario que será exibido
   * @returns Um objeto de usuario
   * @throws HttpException em caso de Usuario não encontrado
   * @example findById(1) // A usuario com id 1 será exibido
   */
  async findById(id: number): Promise<Usuario> {
    let usuario = await this.usuarioRepository.findOne({ where: { id }, relations: { produto: true } });
    if (!usuario)
      throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

    return usuario;
  }
  async findByUsuario(usuario: string): Promise<Usuario | undefined> {
    return await this.usuarioRepository.findOne({
      where: {
        usuario: usuario
      },
      relations: { produto: true }
    });
  }

   /**
     * @desc Atualiza um usuario no banco de dados
     * @param usuario que será atualizada
     * @returns objeto de usuario
     * @throws HttpException Em caso de usuario recebido não ser encontrado
     * 
     */
  async update(usuario: Usuario): Promise<Usuario> {

    let updateUsuario: Usuario = await this.findById(usuario.id);
    let buscaUsuario = await this.findByUsuario(usuario.usuario);

    if (!updateUsuario)
      throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND)

    

    if (!buscaUsuario && buscaUsuario.id !== usuario.id)
      throw new HttpException('Usuario (e-mail) já cadastrado!', HttpStatus.BAD_REQUEST);

    usuario.senha = await this.bcrypt.criptografarSenha(usuario.senha)
    return await this.usuarioRepository.save(usuario);
  }

}
