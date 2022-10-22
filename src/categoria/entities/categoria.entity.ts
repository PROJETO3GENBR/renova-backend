import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
//import { Categoria } from "src/categoria/entities/categoria.entity";

@Entity({name: 'categoria'})
export class Categoria{
    @PrimaryGeneratedColumn()
    id: number;
    
    @IsNotEmpty()
    @Column({nullable: false})
    categoria_composto: boolean;

    @IsNotEmpty()
    @Column({nullable: false})
    categoria_eletronico: boolean;

    @OneToMany(() => Produto, (produto) => produto.usuario, {onDelete: "CASCADE"})
    produto: Produto
}
