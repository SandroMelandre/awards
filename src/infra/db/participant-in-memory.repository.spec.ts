import { Participant } from "../../domain/entity/Participant";
import { ParticipantInMemory } from "./participant-in-memory..repository";



describe('ParticipantInMemory test', () =>{
    it('should insert na new participant', async ()=>{
        const repository  = new ParticipantInMemory();

        let participantInput = {
            name: "Sandro Rezende",
            email: "sandromelandre",
            phone: '024993032829',
            document_type: 'CPF',
            document_number: '01957346701',
            password: 'xptop',
        }

        const participant = new Participant(participantInput);

        await repository.insert(participant);
        console.log("repository", repository.items);
        expect(repository.items).toHaveLength(1);
        expect(repository.items).toStrictEqual([participant]);
    });


})