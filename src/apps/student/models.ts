import { User } from "../user/models";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Student {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column()
  createAt: string;

}