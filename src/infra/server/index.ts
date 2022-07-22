import express = require('express');
import { ParticipantController } from '../../controllers/ParticipantController';
import { ParticipantInMemory } from '../db/participant-in-memory..repository';

const app: express.Application = express();

app.use(express.json());

const port  = process.env.PORT || 3000;

const repository = new ParticipantInMemory

app.use('/participant', ParticipantController)



app.listen(port, ()=>{
    console.log(`listen at: http://localhost:${port}`);
})