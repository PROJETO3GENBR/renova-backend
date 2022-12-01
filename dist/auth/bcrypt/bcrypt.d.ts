export declare class Bcrypt {
    criptografarSenha(senha: string): Promise<string>;
    compararSenhas(senhaBanco: string, senhaDigitada: string): Promise<boolean>;
}
