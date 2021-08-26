class MonthlyPayment {
  constructor(
    fullName,
    nickName,
    email,
    accountNumber,
    telephoneNumber,
    workingDays,
    transferAmount,
    submittedDate,
    remark
  ) {
    (this.fullName = fullName),
    (this.nickName = nickName),
    (this.email = email),
    (this.accountNumber = accountNumber),
    (this.telephoneNumber = telephoneNumber),
    (this.workingDays = workingDays),
    (this.transferAmount = transferAmount),
    (this.submittedDate = submittedDate),
    (this.remark = remark);
  }
}

module.exports = MonthlyPayment;
