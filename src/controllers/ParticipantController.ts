import {Router, Request, Response} from  'express'
import { CreateNewParticipant } from '../application/participant/CreateNewParticipant';

import { ParticipantRepository } from '../infra/db/ParticipantRepository';

import {db} from '../infra/db/database'
const  router: Router = Router()

router.get('/', async  (req:Request, res:Response)=>{

    const result = await db.query('SELECT * FROM participants')
    console.log(result);


   
return res.json({"message": "olá mundo","data":result});
})

router.post('/',async (req:Request, res:Response)=>{
    let participantInput = req.body
    const repository  = new ParticipantRepository();
    const createNewParticipant  =  new CreateNewParticipant(repository);

    const output =  await createNewParticipant.execute(participantInput);
    
    return res.json(output);

})





export const ParticipantController: Router = router