import { ParticipantInput } from "../types/ParticipantInput"
import { AndressInput } from "../types/AndressInput"
import { Andress } from "./Andress"


const crypto = require("crypto");

export class Participant {
        name: String
        email: String
        phone: String
        document_type: String
        document_number: String
private password: String
        andress?: Andress[]

        constructor(participant: ParticipantInput) {
            this.name = participant.name,
            this.email= participant.email
            this.phone = participant.phone
            this.document_type = participant.document_type,
            this.document_number = participant.document_number,
            this.password = this.setPassword(participant.password) 
            this.andress =  participant.andress || []
        }


        setPassword(password){
           const password_hash = crypto.createHmac('sha256',password).update(password).digest("base64");
            return password_hash;
        }

        getPassword(){
            return this.password;
        }

        public addNewAndress(andress: AndressInput ) {
            this.andress.push(andress);
        }

        public toJSON() {
            return {
              
                name: this.name,
                email: this.email,
                phone: this.phone,
                document_type: this.document_type,
                document_number: this.document_number,
                andress: this.andress


            }
        }

}