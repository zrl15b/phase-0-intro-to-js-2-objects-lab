// Write your solution in this file!
const employee= {
    name: "value1",
    streetAddress: "value2"}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
      ...obj,
      [key]: value,
    }};
function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value) {
obj[key] = value
return employee}

function deleteFromEmployeeByKey(employee,key)
{ const newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee,key)
{ delete employee.name
return employee}