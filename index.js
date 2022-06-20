// Write your solution in this file!


const employee = {
    name: "Scripty McScriptFace",
    streetAddress: "1212 Mockingbird Lane",
};

function updateEmployeeWithKeyAndValue(employee,key,value){
    // "This function should not mutate the employee" --Flatiron
    // "Hint: use the spread operator!" --Flatiron
    // Spread would not ALWAYS work as expected if nested objects
    // Unless, I dunno, you first check object is not nested
    // and if it /is/ nested, then spread the nested levels as well
    // https://medium.com/@kevinlai76/the-spread-operator-deep-and-shallow-copies-d193ac9b58bf
    // Flatiron does seem to realize this
    // This function is only meant to pass the Flatiron test
    // The Flatiron test is unlikely to test for nested objects
    // As sexy as this code will no doubt be...
    // As much as you will be itchin' to ctrl-c and ctrl-v...
    // Please do not use this code in a production environment
    const newobj = {...employee};
    newobj[key] = value;
    return newobj;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee,key){
    // see comment for function updateEmployeeWithKeyAndValue
    // Again, do not use this code in a production environment
    const newobj = {...employee};
    delete newobj[key];
    return newobj;
};

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
};