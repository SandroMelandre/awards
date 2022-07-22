import { Participant } from "./Participant";


export interface ParticipantInterfaceRepository {

    insert(partisipant : Participant) : Promise<any>;
}