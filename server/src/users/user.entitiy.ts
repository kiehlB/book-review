import { Entity, PrimaryGeneratedColumn, Column, Index, CreateDateColumn } from 'typeorm';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index()
  @Column({ unique: true, length: 20 })
  username!: string;

  @Column('text')
  password!: string;

  @Index()
  @Column({ unique: true, length: 20 })
  email!: string | null;

  @Column({ default: false })
  email_verified!: boolean;

  @Index()
  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;
}
