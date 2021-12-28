import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import Challenge from "./Challenge";
import Participation from "./Participation";
import Proof from "./Proof";

@Entity("User")
export default class User extends BaseEntity {
  @PrimaryColumn()
  id: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    length: 50,
    nullable: false,
  })
  name: string;

  @Column({
    length: 50,
    nullable: false,
  })
  school: string;

  @Column({
    default: 0,
  })
  point: number;

  @Column({
    nullable: true,
  })
  avatar?: string;

  @OneToMany((type) => Challenge, (challenges) => challenges.owner, {
    cascade: true,
  })
  madeChallenges: Challenge[];

  @OneToMany(
    (type) => Participation,
    (participations) => participations.participant,
    { cascade: true }
  )
  participations: Participation[];

  @OneToMany((type) => Proof, (proofs) => proofs.user)
  proofs: Proof[];
}
