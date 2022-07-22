
import { db } from '../database'

export const getParticipant = () =>{
    return db.query('SELECT * FROM award.participants');
}

export const saveParticiant =  async (participant) =>{

   const output = await db.one('INSERT INTO public.participants(participant_name, email, phone, document_type, document_number, participant_password) values($1,$2,$3,$4,$5,$6) returning *',[
    participant.name,
    participant.email,
    participant.phone,
    participant.document_type,
    participant.document_number,
    participant.getPassword()
    ]);
   return output
}


