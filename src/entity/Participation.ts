import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Challenge from "./Challenge";
import Proof from "./Proof";
import User from "./User";

@Entity("Participation")
export default class Participation extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column({
    nullable: false,
    default: 0,
  })
  dateCount: number;

  @Column({
    nullable: false,
    default: 0,
  })
  successCount: number;

  @Column({
    nullable: false,
    default: 0,
  })
  failCount: number;

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

  @OneToMany((type) => Proof, (proofs) => proofs.participation)
  proofs: Proof[];
}
