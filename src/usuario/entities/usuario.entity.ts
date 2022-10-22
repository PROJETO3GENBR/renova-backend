import { IsNotEmpty } from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    email: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    senha: string

    @Column({length: 255, nullable: false})
    foto: string
    //produto: any;

    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto
}
