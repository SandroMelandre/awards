import { Participant } from "./Participant";

describe('participant', ()=>{

    it('new participant', ()=>{
        let participant = {
            name: "Sandro Rezende",
            email: "sandromelandre",
            phone: '024993032829',
            document_type: 'CPF',
            document_number: '01957346701',
            password: 'xptop',
            andress: []
            
        }

        let NewParticipant  = new Participant(participant);
        
        expect(NewParticipant).toEqual(expect.not.stringMatching(participant.password))

    });

    it('new participant_andress', () => {
        let participant = {
            name: "Sandro Rezende",
            email: "sandromelandre",
            phone: '024993032829',
            document_type: 'CPF',
            document_number: '01957346701',
            password: 'xptop',
        };

        let andress  =  {  
            clientId: 999,  
            street: 'Rua João Xavier',
            street_number:  '555',
            complement: 'casa B',
            district: 'Duarte da Silveira',
            postal_code: '25635470',
            default_andress: true
        }

        let NewParticipant  = new Participant(participant);

        NewParticipant.addNewAndress(andress);

        expect(NewParticipant.andress).toContain(andress);

    });


    it('validate password hash', () =>{

        let participant = {
            name: "Sandro Rezende",
            email: "sandromelandre",
            phone: '024993032829',
            document_type: 'CPF',
            document_number: '01957346701',
            password: 'xptop',
        };

        let NewParticipant  = new Participant(participant);


        expect(NewParticipant.andress).not.toBe(participant.password);


    })
        
      

    

});