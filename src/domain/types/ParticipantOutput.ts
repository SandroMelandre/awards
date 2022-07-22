import { Andress } from "../entity/Andress"

export type ParticipantOutput = {
    
    name: String
    email: String
    phone: String
    document_type: String
    document_number: String
    andress?: Andress[]
}