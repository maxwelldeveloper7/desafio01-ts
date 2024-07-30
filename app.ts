import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipeAccount } from './class/VipeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
console.log(companyAccount)
companyAccount.getLoan(1000)
companyAccount.getBalance()
companyAccount.withdraw(500)
companyAccount.getBalance()
companyAccount.deposit(0)
companyAccount.withdraw(-10000)
companyAccount.getBalance()

const vipeAccount = new VipeAccount('maxwell', 77)
console.log(vipeAccount)
vipeAccount.deposit(10)
vipeAccount.getBalance()