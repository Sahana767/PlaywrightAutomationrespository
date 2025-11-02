const {test , expect} = require('@playwright/test')    //import


test ('First Playwright Test' , async function display({page})
{

    console.log("Running First Playwright Test using Traditional Function")
})

test ('First Playwright Test' , async function display({page})

{
    console.log("Running Second Playwright Test using anonymous Function")
})

test('Third Playwright Test' , async ({page})=>{
    

    console.log("Running  Third Playwright Test using arrow Function")
})