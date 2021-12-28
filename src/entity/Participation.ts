import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Challenge from "./Challenge";
import User from "./User";

@Entity("Participation")
export default class Participation extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne((type) => Challenge, (challenge) => challenge.participations, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  challenge: Challenge;

  @ManyToOne((type) => User, (user) => user.participations, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  participant: User;

  @Column({
    default: 0,
  })
  dateCount: number;

  @Column({
    default: 0,
  })
  successCount: number;

  @Column({
    default: 0,
  })
  failCount: number;
}
