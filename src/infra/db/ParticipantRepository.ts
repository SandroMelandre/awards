
import { ParticipantInterfaceRepository } from "../../domain/entity/ParticipantInterfaceRepository";
import * as Service from '../db/service/participanService'

export class ParticipantRepository implements ParticipantInterfaceRepository {


    insert(partisipant): Promise<any> {
        
        const output  = Service.saveParticiant(partisipant)

        return output


    }


}