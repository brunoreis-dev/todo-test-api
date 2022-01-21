import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('todos')
export class Todo {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  is_complete: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.is_complete = false;
    }
  }
}
