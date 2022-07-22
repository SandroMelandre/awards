import { Andress } from "../entity/Andress"


export type ParticipantInput = {
    name: String
    email: String
    phone: String
    document_type: String
    document_number: String
    password: String
    andress?: Andress[]
}