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
        console.log(`ваш счет пополнен на: ${amount}`)
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
        else {
            const newTransaction = this.createTransaction(amount, 'withdraw');
            this.transactions.push(newTransaction);
            console.log(`с вашего счета снято средств: ${amount}`)
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
                return /*this.transactions[i];*/ `транзакция id ${this.transactions[i].id} тип ${this.transactions[i].type} сума ${this.transactions[i].amount}`

        return ('транзакции с таким id не существует');

    },

    /*
     * Метод возвращает количество средств
     * определенного типа танзакции изр всей истории транзакций
     */
    getTransactionTotal(type) {
        let transactionTotal = 0;
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].type === type)
                transactionTotal += this.transactions[i].amount;
        }

        return (`Итоговая сумма то операции ${type} составляет ${transactionTotal}`);
    },
};

//---------------------------main-----------

let userChoice;
const variants = ['balance', 'deposit', 'withdraw', 'find ID', 'deposit balance', 'withdraw balance'];

do {
    userChoice = prompt(`что вы хотите сделать?
    1 - проверить баланс
    2 - пополнить счет
    3 - снять со счета
    4 - выбрать транзакцию по id
    5 - количество средств по транзакции пополнения
    6 - количество средств по транзакции пополнения`);
    // console.log(userChoice);



    switch (variants[Number(userChoice) - 1]) {
        case 'balance':
            console.log('баланс ', account.getBalance());
            break;

        case 'deposit':
            account.deposit(Number(prompt('введите суму пополнения')));
            break;

        case 'withdraw':
            account.withdraw(Number(prompt('введите суму которую хотите снять со счета')));
            break;

        case 'find ID':
            console.log(account.getTransactionDetails(Number(prompt('введите id транзакции которую хотите просмотреть'))));
            break;

        case 'deposit balance':
            console.log(account.getTransactionTotal('deposit'));
            break;

        case 'withdraw balance':
            console.log(account.getTransactionTotal('withdraw'));
            break;

        default:
            console.log('выберите из предложенных вариантов!!!!!! чтобы закончить нажмите отмена');

    }

} while (userChoice !== null);