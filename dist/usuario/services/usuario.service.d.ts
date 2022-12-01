import { Bcrypt } from "../../auth/bcrypt/bcrypt";
import { Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";
export declare class UsuarioService {
    private usuarioRepository;
    private bcrypt;
    constructor(usuarioRepository: Repository<Usuario>, bcrypt: Bcrypt);
    create(usuario: Usuario): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findById(id: number): Promise<Usuario>;
    findByUsuario(usuario: string): Promise<Usuario | undefined>;
    update(usuario: Usuario): Promise<Usuario>;
}
