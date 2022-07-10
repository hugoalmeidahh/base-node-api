import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  passwd: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    precision: 3
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    precision: 3
  })
  updatedAt: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    precision: 3
  })
  deletedDate: Date;
}