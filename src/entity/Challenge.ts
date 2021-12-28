import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Participation from "./Participation";
import User from "./User";

@Entity("Challenge")
export default class Challenge extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({
    length: 50,
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  image: string;

  @Column({
    nullable: false,
  })
  category: string;

  @Column({
    nullable: true,
  })
  benefit: string;

  @ManyToOne((type) => User, (user) => user.madeChallenges, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  owner: User;

  @OneToMany(
    (type) => Participation,
    (participations) => participations.challenge,
    { cascade: true }
  )
  participations: Participation[];
}
