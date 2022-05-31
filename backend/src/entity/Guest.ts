import { Entity, PrimaryGeneratedColumn, Column, Timestamp, CreateDateColumn, UpdateDateColumn, Generated } from "typeorm"

@Entity({name: "guest"})
export class Guest {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    phone: string

    @Column({
        unique: true
    })
    cpf: string

    @Column({ default: true })
    active: Boolean

    @CreateDateColumn()
    created_at: Timestamp

    @UpdateDateColumn()
    updated_at: Timestamp

}
