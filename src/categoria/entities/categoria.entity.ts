import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
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
}