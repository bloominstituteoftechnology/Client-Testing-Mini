#Arrange => setup 
// setting up the information you need and defining the test values locally
    const expectedValue  = 6;
    const firstValue = 4; 
    const SecondValue = 2; 

#Act => execute 
// the unit you are testing with the actual valu you are recieving
    const actualValue = addNums(firstValue, SecondValue)

#Assert 
// The actual assertion 
    assert(actualValue).to.be.equal(expectedValue);

#Other
// Make the test fail to see if the test is actually testing for what you are looking for