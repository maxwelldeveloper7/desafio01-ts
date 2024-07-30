import { DioAccount } from "./DioAccount";

export class VipAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    //um método deposit que acresce 10 a mais no valor informado para deposito
    deposit = (value: number): void => {
        const bonus: number = 10
        const totalValue: number = value + bonus

        if(this.validateStatus() && value > 0){
            this.setBalance(totalValue)
            console.log('Você depositou!')
        }else{
            console.log('Depósito cancelado - Valor inválido!')
            return
        }
    }
}