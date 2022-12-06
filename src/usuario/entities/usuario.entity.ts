import { IsEmail, IsNotEmpty } from "class-validator";
import { Produto } from "../../produto/entities/produto.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: 'tb_usuario'})
export class Usuario {
    
    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty()
    public usuario: string

    @IsEmail()
    @Column({length: 100, nullable: false})
    @ApiProperty({example: 'email@email.com'})
    public email: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    @ApiProperty({example: 'password'})
    public senha: string

    @Column({length: 255, nullable: false})
    @ApiProperty()
    public foto: string
    //produto: any;

    @ApiProperty()
    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[]
}
