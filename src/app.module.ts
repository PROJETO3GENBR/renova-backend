import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { Categoria } from './categoria/entities/categoria.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Produto } from './produto/entities/produto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'prjintegrador',
      entities: [Categoria, Usuario, Produto],
      synchronize: true,
    }),
    //   TypeOrmModule.forRoot({
    //   type: 'postgres',
    //     url:  process.env.DATABASE_URL,
    //     logging: false,
    //     dropSchema: false,
    //     ssl: { rejectUnauthorized: false },
    //     synchronize: true,
    //     autoLoadEntities: true
    // }),
    CategoriaModule,
    UsuarioModule,
    ProdutoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
