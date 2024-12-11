import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('missions')
export class Mission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  missionName: string;

  @Column()
  targetPlanet: string;

  @Column('float')
  durationYears: number;

  @Column('int')
  crewCount: number;

  @Column('simple-array')
  technologies: string[];
}

// src/models/userModel.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
}