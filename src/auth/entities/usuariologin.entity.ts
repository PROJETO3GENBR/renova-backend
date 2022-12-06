import { ApiProperty } from "@nestjs/swagger";

export class UsuarioLogin {

    @ApiProperty()
    public usuario: string;

    @ApiProperty()
    public senha: string;
}