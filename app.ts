import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { VipAccount} from './class/VipAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(100) // Você depositou!
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100) // Você depositou!
console.log(companyAccount)
companyAccount.getLoan(1000) // Você pegou um empréstimo
companyAccount.getBalance() // 1100
companyAccount.withdraw(500) // Você sacou
companyAccount.getBalance()
companyAccount.deposit(0) // Depósito cancelado - Valor inválido!
companyAccount.withdraw(-10000) // Saque cancelado - Valor inválido!
companyAccount.getBalance() // 600

const vipeAccount = new VipAccount('maxwell', 77)
console.log(vipeAccount)
vipeAccount.deposit(10) // Você depositou!
vipeAccount.getBalance() // 20