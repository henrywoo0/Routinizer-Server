import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import Challenge from "./Challenge.entity";
import Participation from "./Participation.entity";
import Proof from "./Proof.entity";

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
    nullable: false,
    default: 0,
  })
  point: number;

  @Column({
    nullable: true,
  })
  avatar?: string;

  @Column({
    nullable: false,
    default: 0,
  })
  grade: number;
  // -2 히키코모리, -1 게으름뱅이, 0 일반인, 1 성실이, 2 바른생활 루틴이, 3 불붙은 챌린지

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
