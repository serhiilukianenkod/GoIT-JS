'use strict';

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Каждая транзакция это объект со свойствами: id, type и amount
   */
  
  const account = {
    // Текущий баланс счета
    balance: 0,
  
    // История транзакций
    transactions: [],
  
    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        return {
            id: this.transactions.length + 1,
            type,
            amount
        }
    },
  
    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        const newTransaction = this.createTransaction(amount, 'deposit');
        this.transactions.push(newTransaction);
        this.balance += amount;
    },
  
    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount > this.balance) 
            console.log('снятие такой суммы не возможно, недостаточно средств.');
        else{
            const newTransaction = this.createTransaction(amount, 'withdraw');
            this.transactions.push(newTransaction);
            this.balance -= amount;
        }
    },
  
    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },
  
    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (let i = 0; i < this.transactions.length; i++)
            if (this.transactions[i].id === id) 
                return this.transactions[i];

        return('транзакции с таким id не существует');

    },
  
    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
     let transactionTotal = 0;
       for (let i = 0; i < this.transactions.length; i++){
        if (this.transactions[i].type === type) 
        transactionTotal += this.transactions[i].amount;
        }
        
        return(`Итоговая сумма то операции ${type} составляет ${transactionTotal}`);
    },
  };

//---------------------------test-----------

console.log(account.deposit(12));
console.log(account.deposit(1562));
console.log(account.withdraw(162));
console.log(account.deposit(1));

console.log(account.withdraw(1235642));

console.log(account.getBalance());


console.log(account.getTransactionDetails(2));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));

console.log(account.transactions);
