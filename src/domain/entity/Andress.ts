import { AndressInput } from "../types/AndressInput"


export class Andress {
    andressId?: Number
    clientId: Number
    street: String
    street_number: String
    complement: String
    district: String
    postal_code : String
    default_andress: boolean

    constructor(andress: AndressInput) {

        this.andressId = andress.clientId,
        this.clientId = andress.clientId,
        this.street = andress.street,
        this.street_number = andress.street_number
        this.complement = andress.complement,
        this.district = andress.district,
        this.postal_code = andress.postal_code,
        this.default_andress = true
    }

}