import { User } from "./user";
import { Vol } from "./vols";

export class Reservation {
    id!: number;
    date_reservation!: Date;
    vol!: Vol;
    classeplace!: string;
    prix!: number;
    user!: User;
}