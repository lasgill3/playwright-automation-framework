import { setDefaultTimeout } from "@cucumber/cucumber"; 

//Load env variables from .env file
import {config as loadEnv} from "dotenv";
const env = loadEnv({path: './env/.env'});

const customTime = parseInt(env.parsed?.CUCUMBER_STEP_TIMEOUT || '60000'); // Default to 60 seconds if not set  

setDefaultTimeout(customTime); // Set default step timeout to 60 seconds