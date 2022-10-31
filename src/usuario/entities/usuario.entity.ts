import { IsNotEmpty } from "class-validator";
import { Produto } from "../../produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_usuario'})
export class Usuario {
    
    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    usuario: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty({example: 'email@email.com'})
    email: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty({example: 'password'})
    senha: string

    @Column({length: 255, nullable: false})
    @ApiProperty()
    foto: string
    //produto: any;

    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto
}
