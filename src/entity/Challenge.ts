import {
  BaseEntity,
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
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

  @ManyToOne((type) => User)
  owner: User;

  @ManyToMany((type) => User)
  participants: User[];
}
