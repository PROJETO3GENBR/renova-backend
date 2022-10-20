import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { UsuarioController } from "./controllers/usuario.controller";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./services/usuario.service";


@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    providers: [ UsuarioService],
    controllers: [UsuarioController],
    exports: [TypeOrmModule]
})
export class UsuarioModule {}
.
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";


@Injectable()
export class UsuarioService {
    constructor (
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>
    ) {}
    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
            relations: {
                // produto: true
            }
        });
    }
    async findById(id: number): Promise<Usuario> {

        let usuario = await this.usuarioRepository.findOne({
            where: {
                id
            },
            relations: {
               produto: true
            }
        });
        if (!usuario)
        throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;
    }
    async findByNome(nome: string): Promise<Usuario[]> {
        return await this.usuarioRepository.find({
            where: {
                nome: ILike(%${nome}%)
            },
            relations:  {
                produto: true
            }
        })
    }
    async create (usuario: Usuario): Promise<Usuario> {
        return await this.usuarioRepository.save(usuario);
    }
    async update(usuario: Usuario): Promise<Usuario> {

        let buscaUsuario = await this.findById(usuario.id);

        if (!buscaUsuario || !usuario.id)
        throw new HttpException('Usuario não encontrado!',HttpStatus.NOT_FOUND);

        return await this.usuarioRepository.save(usuario);
    }
    async delete(id: number): Promise<DeleteResult> {
        let buscaUsuario = await this.findById(id);

        if (!buscaUsuario)
        throw new HttpException('Usuario não encontrado!',HttpStatus.NOT_FOUND);

        return await this.usuarioRepository.delete(id);
    }

}
