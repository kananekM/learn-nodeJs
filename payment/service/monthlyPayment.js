const individualInformationMap = require('../model/IndividualInfomation');
const MonthlyPayment = require('../model/MonthlyPayment');
const workRecordMap = require('../model/WorkingRecord')

function CreateMonthlyPayment(email){
    let individualInformation = individualInformationMap.get(email);
    let workingRecord = workRecordMap.get(email);

    let transferAmount = individualInformation.dailyRate * workingRecord.workingDays

    const monthlyPayment = new MonthlyPayment(
        individualInformation.fullName,
        individualInformation.nickName,
        email,
        individualInformation.accountNumber,
        individualInformation.telephoneNumber,
        workingRecord.workingDays,
        transferAmount,
        workingRecord.submittedDate,
        workingRecord.remark
    )
    return monthlyPayment;
  }

  module.exports = CreateMonthlyPayment;