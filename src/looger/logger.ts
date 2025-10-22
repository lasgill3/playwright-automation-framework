import * as winston from 'winston';
import colors from '@colors/colors'; 

//Define the custom format
const myFormat = winston.format.printf(({ level, message, timestamp }) => {
    let colorizedMessage = message;
    switch(level) {
        case 'error':
            colorizedMessage = colors.red(message); 
            break; 
        case 'warn':
            colorizedMessage = colors.yellow(message); 
            break;  
        case 'info':
            colorizedMessage = colors.green(message); 
            break;  
    }
    return `${timestamp} [${level.toUpperCase()}]: ${colorizedMessage}`;
});    
