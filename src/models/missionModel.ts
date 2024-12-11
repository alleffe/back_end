import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { IsEmail, Length } from "class-validator";
import { Mission } from "./missionModel";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(3, 50)
  name: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @Length(6, 20)
  password: string;

  @OneToMany(() => Mission, (mission) => mission.user)
  missions: Mission[];
}
