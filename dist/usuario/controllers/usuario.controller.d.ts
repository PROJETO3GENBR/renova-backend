import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";
export declare class UsuarioController {
    private readonly usuarioService;
    constructor(usuarioService: UsuarioService);
    findAll(): Promise<Usuario[]>;
    create(usuario: Usuario): Promise<Usuario>;
    updade(usuario: Usuario): Promise<Usuario>;
}
