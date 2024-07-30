import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      this.deposit(value)
      console.log('Voce pegou um empréstimo')
    } else {
      console.log('Operação cancelada - valor inválido!')
      return
    }
  }
}
