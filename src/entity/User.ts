import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

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
    nullable: true,
  })
  avatar?: string;

  //   @ManyToOne()
  //   challenge:
}
