import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "../../usuario/services/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";
export declare class AuthService {
    private usuarioService;
    private jwtService;
    private bcrypt;
    constructor(usuarioService: UsuarioService, jwtService: JwtService, bcrypt: Bcrypt);
    validateUser(username: string, password: string): Promise<any>;
    login(usuarioLogin: any): Promise<{
        usuario: any;
        token: string;
    }>;
}
