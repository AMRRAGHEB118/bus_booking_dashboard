import { User } from 'src/users/entity/user.entity';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from 'typeorm';

@Entity()
export class Traveler {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToOne(() => User, {
        eager: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ unique: true })
    userId: string;

    @Column({ unique: true })
    get username(): string {
        return this.user?.username;
    }

    @Column({ unique: true })
    get email(): string {
        return this.user?.email;
    }
}
