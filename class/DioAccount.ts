export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }
/*
  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }
*/
  getName = (): string => {
    return this.name
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      if(value > 0){
        this.balance += value;
        console.log('Você depositou!')
      } else {
        console.log('Depósito cancelado - Valor inválido!')
        return
      }
    }
  }

  withdraw = (value: number): void => {
    if(value > 0){
      if((this.validateStatus()) && (value < this.balance)){
        this.balance -= value
        console.log('Você sacou!')
      } else {
        console.log('Saque cancelado - Saldo insuficiente!')
        return
      }
    }else{
      console.log('Saque cancelado - Valor inválido!')
      return
    }   
  }

  getBalance = (): Number => {
    console.log(this.balance)
    return this.balance
  }

  setBalance = (value: number): void => {
    this.balance += value
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
