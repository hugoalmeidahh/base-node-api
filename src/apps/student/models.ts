import { Column, Entity, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Student {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: string;

  @Column()
  createAt: string;

}