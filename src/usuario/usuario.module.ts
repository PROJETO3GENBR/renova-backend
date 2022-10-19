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
