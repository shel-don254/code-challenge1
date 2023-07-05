const prompt = require("prompt-sync")({ sigint: true });

// Prompt the user to enter the basic salary and benefits
var basicSalary = prompt("Enter the basic salary:");
var benefits = prompt("Enter the benefits:");

// Convert the inputs to numbers
basicSalary = parseFloat(basicSalary);
benefits = parseFloat(benefits);

// Define the PAYE rates and limits
var payeRates = [
  { limit: 24000, rate: 10 },
  { limit: 32333, rate: 25 },
  { limit: Infinity, rate: 30 },
];

// Define the PAYE parameters
var personalRelief = 2400;
var insuranceRelief = 5000;
var allowablePensionFundContribution = 20000;
var allowableHOSPContribution = 0;
var affordableHousingRelief = 9000;
var allowableOwnerOccupierInterest = 25000;
var disabilityExemption = 150000;

// Define the NHIF rates and deductions
var nhifRates = [
  { minGrossPay: 0, maxGrossPay: 5999, deduction: 150 },
  { minGrossPay: 6000, maxGrossPay: 7999, deduction: 300 },
  { minGrossPay: 8000, maxGrossPay: 11999, deduction: 400 },
  { minGrossPay: 12000, maxGrossPay: 14999, deduction: 500 },
  { minGrossPay: 15000, maxGrossPay: 19999, deduction: 600 },
  { minGrossPay: 20000, maxGrossPay: 24999, deduction: 750 },
  { minGrossPay: 25000, maxGrossPay: 29999, deduction: 850 },
  { minGrossPay: 30000, maxGrossPay: 34999, deduction: 900 },
  { minGrossPay: 35000, maxGrossPay: 39999, deduction: 950 },
  { minGrossPay: 40000, maxGrossPay: 44999, deduction: 1000 },
  { minGrossPay: 45000, maxGrossPay: 49999, deduction: 1100 },
  { minGrossPay: 50000, maxGrossPay: 59999, deduction: 1200 },
  { minGrossPay: 60000, maxGrossPay: 69999, deduction: 1300 },
  { minGrossPay: 70000, maxGrossPay: 79999, deduction: 1400 },
  { minGrossPay: 80000, maxGrossPay: 89999, deduction: 1500 },
  { minGrossPay: 90000, maxGrossPay: 99999, deduction: 1600 },
  { minGrossPay: 100000, maxGrossPay: Infinity, deduction: 1700 },
];

// Define the NSSF contribution rates and limits
var nssfTier1Rate = 0.06;
var nssfTier2Rate = 0.06;
var nssfTier1Limit = 6000;
var nssfTier2Limit = 18000;

// Calculate the gross salary
var grossSalary = basicSalary + benefits;

// Calculate the PAYE tax
var taxablePay =
  grossSalary -
  personalRelief -
  insuranceRelief -
  allowablePensionFundContribution -
  allowableHOSPContribution;
var paye = 0;

for (var i = 0; i < payeRates.length; i++) {
  if (taxablePay <= payeRates[i].limit) {
    paye = taxablePay * (payeRates[i].rate / 100);
    break;
  }
}

// Calculate the NHIF deductions
var nhifDeductions = 0;

for (var i = 0; i < nhifRates.length; i++) {
  if (
    grossSalary >= nhifRates[i].minGrossPay &&
    grossSalary <= nhifRates[i].maxGrossPay
  ) {
    nhifDeductions = nhifRates[i].deduction;
    break;
  }
}

// Calculate the NSSF deductions
var nssfDeductions = 0;

if (grossSalary <= nssfTier1Limit) {
  nssfDeductions = grossSalary * nssfTier1Rate;
} else {
  nssfDeductions =
    nssfTier1Limit * nssfTier1Rate +
    (grossSalary - nssfTier1Limit) * nssfTier2Rate;
}

// Calculate the net salary
var netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

// Output the results
console.log("Gross Salary: " + grossSalary.toFixed(2));
console.log("PAYE: " + paye.toFixed(2));
console.log("NHIF Deductions: " + nhifDeductions.toFixed(2));
console.log("NSSF Deductions: " + nssfDeductions.toFixed(2));
console.log("Net Salary: " + netSalary.toFixed(2));
