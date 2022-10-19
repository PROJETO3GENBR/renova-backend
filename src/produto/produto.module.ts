import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaService } from "src/categoria/services/categoria.service";
import { UsuarioService } from "src/usuario/services/usuario.service";
import { ProdutoController } from "./controllers/produto.controller";
import { Produto } from "./entities/produto.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [CategoriaService, UsuarioService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule {}
