class IndividualInformation {
  constructor(
    fullName,
    nickName,
    email,
    accountNumber,
    telephoneNumber,
    dailyRate
  ) {
    this.fullName = fullName,
    this.nickName = nickName,
    this.email = email,
    this.accountNumber = accountNumber,
    this.telephoneNumber = telephoneNumber,
    this.dailyRate = dailyRate
  }
}

const top1 = new IndividualInformation(
  'kananek',
  'mongkolsawat',
  'toptoppy@odds.team',
  '12',
  '0848875510',
  3000
);

const top2 = new IndividualInformation(
  'kananek',
  'mongkolsawat',
  'toptoppy@gmail.com',
  '12',
  '0848875510',
  3000
);

const top3 = new IndividualInformation(
  'kananek',
  'mongkolsawat',
  'toptoppy@hotmail.com',
  '12',
  '0848875510',
  3000
);

const individualInformationMap = new Map()

individualInformationMap.set("toptoppy@odds.team", top1);
individualInformationMap.set("toptoppy@gmail.com", top2);
individualInformationMap.set("toptoppy@hotmail.com", top3);

module.exports = individualInformationMap;
