import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

export enum UserRole {
    ADMIN = 'admin',
    TRAVELER = 'traveler',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { unique: true })
    username: string;

    @Column('varchar', { unique: true })
    email: string;

    @Column('varchar', { select: false })
    password: string;

    @Column({ type: 'enum', enum: UserRole, default: UserRole.TRAVELER })
    role: UserRole;

    @Column({ nullable: true })
    token: string;

    @CreateDateColumn({ readonly: true, select: false })
    createdAt: Date;

    @UpdateDateColumn({ select: false })
    updatedAt: Date;
}
