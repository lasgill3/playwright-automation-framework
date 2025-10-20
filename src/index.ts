import { exec } from 'child_process';

//Define a common command string for running cucumber test
const common = `src/features/*.feature \
--require-module ts-node/register \ 
--require src/step-definitions/**/**/*.ts \ 
--require src/utils/cucumber-timeout.ts`;

//Define an interface for the profiels objectgs
//It defines an interface where wach key is a string and its value is also a string 
interface ProfileCommnands{
    [key: string]: string;
}   

//Define a commnad strings for different test profiles
const profiles: ProfileCommnands = {
    smoke: `${common} --tags "@smoke"`,
    regression: `${common} --tags "@regression"`,
    login: `${common} --tags "@login"`,
    contactUs: `${common} --tags "@contqact-us"`,
};  

//Get the 3rd command line argument and assign it to the profile
//i.e. smoke, regression, etc
const profile = process.argv[2];

//Construct the command string based on the selected profile
//commnad is the full command to run the tests for the selected profile
let command = `npx cucumber-js ${profiles[profile as 'smoke' | 'regression' | 'login' | 'contactUs']}`;

//print the contructed command
// console.log(`Running tests with command: ${command}`);

//Execute the command 
exec(command, { encoding: 'utf-8'}, (error: Error | null, stdout: string) => {
    //Log the ouotput of the commnad
    console.log(stdout);

    //check if there was an error
    if (error) {
        //throw a new error with a simple message
        throw new Error(`Some automation test(s) have Fiale! - Please review: ${error.message}`);
    }
})