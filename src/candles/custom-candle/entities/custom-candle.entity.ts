import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, Check} from "typeorm";
import { User } from "../../../accounts/user/entities/user.entity";
import { Fragrance } from "src/fragrance/fragrance/entities/fragrance.entity";
import { Container } from "src/candles/container/entities/container.entity";
import { EmotionalState } from "src/scent_profiles/emotional-state/entities/emotional-state.entity";
import { Min } from "class-validator";

@Entity()
export class CustomCandle {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Container)
    @JoinColumn({ name: 'container_id' })
    container: Container;

    @ManyToOne(() => Fragrance)
    @JoinColumn({ name: 'fragrance_id' })
    fragrance: Fragrance;

    // @ManyToOne(() => EmotionalState)
    // @JoinColumn({ name: 'emotional_state_id' })
    // emotionalState: EmotionalState;

    @Column({ type: 'numeric', precision: 10, scale: 2,  default: 0 })
    @Min(0)
    price: number;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @Column({ type: 'text', nullable: true })
    customImageUrl: string;

    @Column({ type: 'text', nullable: true })
    notes: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    name: string;

    @Column({ type: 'varchar', length: 50, default: 'pending' })
    status: string;

    @Column({ type: 'text', nullable: true })
    qrUrl: string;
}
