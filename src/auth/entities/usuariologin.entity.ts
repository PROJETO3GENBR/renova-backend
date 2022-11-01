import { ApiProperty } from "@nestjs/swagger/dist";

export class UsuarioLogin {
    @ApiProperty()
    public usuario: string
    @ApiProperty()
    public senha: string
}