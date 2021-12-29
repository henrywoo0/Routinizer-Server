import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Participation from "./Participation.entity";
import User from "./User.entity";

@Entity("Proof")
export default class Proof extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    nullable: false,
  })
  image: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne((type) => User, (user) => user.proofs, {
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  })
  user: User;

  @ManyToOne((type) => Participation, (participation) => participation.proofs, {
    onUpdate: "RESTRICT",
    onDelete: "RESTRICT",
  })
  participation: Participation;
}
