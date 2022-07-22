import { Participant } from "../../domain/entity/Participant";
import { ParticipantInterfaceRepository } from "../../domain/entity/ParticipantInterfaceRepository";


export class ParticipantInMemory implements ParticipantInterfaceRepository {

    items: Participant[] = [];

    async insert(partisipant: Participant): Promise<void> {
        this.items.push(partisipant);
    }

}