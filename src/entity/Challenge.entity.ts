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
import Participation from "./Participation.entity";
import User from "./User.entity";

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

  @Column({
    nullable: false,
    default: 0,
  })
  participationCount: number;

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

  @Column()
  @CreateDateColumn()
  createdAt: Date;
}
