class WorkingRecord {
  constructor(email, workingDays, submittedDate, site, remark) {
    (this.email = email),
      (this.workingDays = workingDays),
      (this.submittedDate = submittedDate),
      (this.site = site),
      (this.remark = remark);
  }
}

const recordTop1 = new WorkingRecord(
  'toptoppy@odds.team',
  35,
  new Date(),
  'PTT',
  'ไม่ทำงานเลย'
)

const recordTop2 = new WorkingRecord(
  'toptoppy@gmail.com',
  21,
  new Date(),
  'PTT',
  'ไม่ทำงานเลย'
)

const recordTop3 = new WorkingRecord(
  'toptoppy@hotmail.com',
  16,
  new Date(),
  'PTT',
  'ไม่ทำงานเลย'
)

const workingRecordMap = new Map()

workingRecordMap.set('toptoppy@odds.team', recordTop1);
workingRecordMap.set('toptoppy@gmail.com', recordTop2);
workingRecordMap.set('toptoppy@hotmail.com', recordTop3);

module.exports = workingRecordMap;
