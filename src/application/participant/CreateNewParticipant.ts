import {ParticipantOutput} from '../../domain/types/ParticipantOutput'
import { Participant } from "../../domain/entity/Participant";
import { ParticipantInterfaceRepository } from "../../domain/entity/ParticipantInterfaceRepository";
import { ParticipantInput } from "../../domain/types/ParticipantInput";


interface output {
    name: String
    email: String
    phone: String
    document_type: String
    document_number: String
  
}

export class CreateNewParticipant {

    constructor(private repository :ParticipantInterfaceRepository ){}
    async execute(input:ParticipantInput): Promise<output> {
        const participant = new Participant(input);
        const output :output = await this.repository.insert(participant);
        return output

    }
}


