let userName = "";
let kWh_Annual_Usage = 11000;

function unitCost(supplier) {
    let annualUnitCost;
    if (supplier === 'SSE_Electricity') {
        annualUnitCost = kWh_Annual_Usage * 10.91 / 100
    } else if (supplier === 'FloGas') {
        annualUnitCost = kWh_Annual_Usage * 9.95 / 100
    } else if (supplier === 'Electric_Ireland') {
        annualUnitCost = kWh_Annual_Usage * 12.72 / 100
    } else if (supplier === 'PrePay_Power') {
        annualUnitCost = kWh_Annual_Usage * 13.09 / 100
    } else {
        console.log("Something's gone wrong!")
    }
    return annualUnitCost
}

function carbonTax() {
    let totalCarbonTax = kWh_Annual_Usage * 0.877 / 100;
    return totalCarbonTax
}

function VAT(supplier, annualUnitCost, totalCarbonTax) {
    let total_VAT = ''
    if (supplier === 'SSE_Electricity') {
        total_VAT = (139.92 + annualUnitCost + totalCarbonTax) * 0.09
    } else if (supplier === 'FloGas') {
        total_VAT = (154.12 + annualUnitCost + totalCarbonTax) * 0.09
    } else if (supplier === 'Electric_Ireland') {
        total_VAT = (152.19 + annualUnitCost + totalCarbonTax) * 0.09
    } else if (supplier === 'PrePay_Power') {
        total_VAT = (142.81 + annualUnitCost + totalCarbonTax) * 0.09
    } else {
        console.log("Something's gone wrong!")
    }
    return total_VAT
}

function totalCost(supplier, annualUnitCost, totalCarbonTax, total_VAT) {
    let total_Annual_Cost;
    if (supplier === 'SSE_Electricity') {
        total_Annual_Cost = 139.92 + annualUnitCost + totalCarbonTax + total_VAT
    } else if (supplier === 'FloGas') {
        total_Annual_Cost = 154.12 + annualUnitCost + totalCarbonTax + total_VAT
    } else if (supplier === 'Electric_Ireland') {
        total_Annual_Cost = 152.19 + annualUnitCost + totalCarbonTax + total_VAT
    } else if (supplier === 'PrePay_Power') {
        total_Annual_Cost = 142.81 + annualUnitCost + totalCarbonTax + total_VAT
    } else {
        console.log("Something's gone wrong!")
    }
    return total_Annual_Cost
}


function main() {
    
    let totalCarbonTax = carbonTax();
    console.log(totalCarbonTax)
    let annualUnitCost = unitCost('SSE_Electricity');
    console.log(annualUnitCost)
    let totalVAT = VAT('SSE_Electricity', annualUnitCost, totalCarbonTax);
    let total_Annual_Cost = totalCost('SSE_Electricity', annualUnitCost, totalCarbonTax, totalVAT)
    console.log(total_Annual_Cost)
}


main();