const {test , expect}  = require("../playwright.config");

test('first assertion Test', async({page})=>{
    
   expect (125) .toBe(125)
})

