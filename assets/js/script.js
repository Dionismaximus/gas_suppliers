let userName = "";
let kWh_Annual_Usage = "";

function unitCost(supplier) {
    let unitCost ='';
    if (supplier === 'SSE_Electricity') {
        unitCost = kWh_Annual_Usage * 10.91
    } else if (supplier === 'FloGas') {
        unitCost = kWh_Annual_Usage * 9.95
    } else if (supplier === 'Electric_Ireland') {
        unitCost = kWh_Annual_Usage * 12.72
    } else if (supplier === 'PrePay_Power') {
        unitCost = kWh_Annual_Usage * 13.09
    } else {
        console.log("Something's gone wrong!")
    }
    return unitCost
}
