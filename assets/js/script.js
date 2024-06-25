let userName = "";
let kWh_Annual_Usage = 11000;

function unitCost(supplier) {
    let annualUnitCost;
    if (supplier === 'SSE_Electricity') {
        annualUnitCost = kWh_Annual_Usage * 10.91 / 100

        let unitCost_SSE_El = document.getElementById('unitCost_SSE_El');
        unitCost_SSE_El.innerHTML = annualUnitCost.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'FloGas') {
        annualUnitCost = kWh_Annual_Usage * 9.95 / 100

        let unitCost_FloGas = document.getElementById('unitCost_FloGas');
        unitCost_FloGas.innerHTML = annualUnitCost.toLocaleString("en-US", {style:"currency", currency:"EUR"})
    
    } else if (supplier === 'Electric_Ireland') {
        annualUnitCost = kWh_Annual_Usage * 12.72 / 100

        let unitCost_El_IE = document.getElementById('unitCost_El_IE');
        unitCost_El_IE.innerHTML = annualUnitCost.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'PrePay_Power') {
        annualUnitCost = kWh_Annual_Usage * 13.09 / 100

        let unitCost_PrePay_P = document.getElementById('unitCost_PrePay_P');
        unitCost_PrePay_P.innerHTML = annualUnitCost.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else {
        console.log("Something's gone wrong!")
    }
    return annualUnitCost
}

function carbonTax() {
    let totalCarbonTax = kWh_Annual_Usage * 0.877 / 100;

    let carbon_Tax = document.getElementsByClassName('carbon_Tax');
    for (item of carbon_Tax) {
        item.innerHTML = totalCarbonTax.toLocaleString("en-US", {style:"currency", currency:"EUR"})
    }

    return totalCarbonTax
}

function VAT(supplier, annualUnitCost, totalCarbonTax) {
    let total_VAT = ''
    if (supplier === 'SSE_Electricity') {
        total_VAT = (139.92 + annualUnitCost + totalCarbonTax) * 0.09

        let SSE_El_VAT = document.getElementById('SSE_El_VAT');
        SSE_El_VAT.innerHTML = total_VAT.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'FloGas') {
        total_VAT = (154.12 + annualUnitCost + totalCarbonTax) * 0.09

        let FloGas_VAT = document.getElementById('FloGas_VAT');
        FloGas_VAT.innerHTML = total_VAT.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'Electric_Ireland') {
        total_VAT = (152.19 + annualUnitCost + totalCarbonTax) * 0.09

        let El_IE_VAT = document.getElementById('El_IE_VAT');
        El_IE_VAT.innerHTML = total_VAT.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'PrePay_Power') {
        total_VAT = (142.81 + annualUnitCost + totalCarbonTax) * 0.09

        let PrePay_P_VAT = document.getElementById('PrePay_P_VAT');
        PrePay_P_VAT.innerHTML = total_VAT.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else {
        console.log("Something's gone wrong!")
    }
    return total_VAT
}

function totalCost(supplier, annualUnitCost, totalCarbonTax, total_VAT) {
    let total_Annual_Cost;
    if (supplier === 'SSE_Electricity') {
        total_Annual_Cost = 139.92 + annualUnitCost + totalCarbonTax + total_VAT

        let SSE_El_Total_Cost = document.getElementById('SSE_El_Total_Cost');
        SSE_El_Total_Cost.innerHTML = total_Annual_Cost.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'FloGas') {
        total_Annual_Cost = 154.12 + annualUnitCost + totalCarbonTax + total_VAT

        let FloGas_Total_Cost = document.getElementById('FloGas_Total_Cost');
        FloGas_Total_Cost.innerHTML = total_Annual_Cost.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'Electric_Ireland') {
        total_Annual_Cost = 152.19 + annualUnitCost + totalCarbonTax + total_VAT

        let El_IE_Total_Cost = document.getElementById('El_IE_Total_Cost');
        El_IE_Total_Cost.innerHTML = total_Annual_Cost.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else if (supplier === 'PrePay_Power') {
        total_Annual_Cost = 142.81 + annualUnitCost + totalCarbonTax + total_VAT

        let PrePay_P_Total_Cost = document.getElementById('PrePay_P_Total_Cost');
        PrePay_P_Total_Cost.innerHTML = total_Annual_Cost.toLocaleString("en-US", {style:"currency", currency:"EUR"})

    } else {
        console.log("Something's gone wrong!")
    }
    return total_Annual_Cost
}


function main(supplier) {
    
    let totalCarbonTax = carbonTax();

    let annualUnitCost = unitCost(supplier);

    let totalVAT = VAT(supplier, annualUnitCost, totalCarbonTax);
    let total_Annual_Cost = totalCost(supplier, annualUnitCost, totalCarbonTax, totalVAT)
    console.log(total_Annual_Cost)
}

// toLocaleString("en-US", {style:"currency", currency:"EUR"})

main('SSE_Electricity');
main('FloGas');
main('Electric_Ireland');
main('PrePay_Power');