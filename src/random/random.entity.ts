import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Random {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

}