import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoController } from "./controllers/produto.controller";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./services/produto.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produto])],
    providers: [ProdutoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]
})
export class ProdutoModule {}