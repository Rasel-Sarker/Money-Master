function gettingValueFromInputField(inpuFieldId){
    const inputField = document.getElementById(inpuFieldId);
    const inputFieldStringValue = inputField.value;
    const inputFieldValue = parseInt(inputFieldStringValue);
    return inputFieldValue;
}
const income = gettingValueFromInputField('income');
const foodCost = gettingValueFromInputField('food-cost');
const rentCost = gettingValueFromInputField('rent-cost');
const clothCost = gettingValueFromInputField('cloth-cost');
const totalCost = foodCost + rentCost + clothCost;
const remainingBalanceAfterCost = income - totalCost;
const savingPercentage = gettingValueFromInputField('saving-percentage-amount');
const savingAmount = income * (savingPercentage/100);
function settingValueById(value,id){
    const textElement = document.getElementById(id);
    textElement.innerText = value;
}
document.getElementById('calculate-total-cost').addEventListener('click',function(){
    settingValueById(totalCost,'total-expense-amount');
    settingValueById(remainingBalanceAfterCost,'existing-balance-amount');
})
document.getElementById('save-btn').addEventListener('click',function(){
    if(remainingBalanceAfterCost > savingAmount){
        var remainingBalanceAfterCostAndSaving = remainingBalanceAfterCost - savingAmount;
        settingValueById(savingAmount,'saving-amount');
        settingValueById(remainingBalanceAfterCostAndSaving,'remaining-amount');
    }else{
        alert(`You don't have enough balance`);
    }
})

