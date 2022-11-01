import { IsNotEmpty } from "class-validator";
import { Produto } from "../../produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";
//import { Categoria } from "src/categoria/entities/categoria.entity";

@Entity({name: 'categoria'})
export class Categoria{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    @IsNotEmpty()
    @Column({nullable: false})
    categoria_composto: boolean;

    @ApiProperty()
    @IsNotEmpty()
    @Column({nullable: false})
    categoria_eletronico: boolean;

    @ApiProperty({type: () => Produto} )
    @OneToMany(() => Produto, (produto) => produto.usuario, {onDelete: "CASCADE"})
    produto: Produto
}
