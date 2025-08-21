// Example: Private Fields and Methods in Classes

class BankAccount {
  // Private field
  #balance;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  // Public method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction("Deposit", amount);
    }
  }

  // Public method
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      this.#logTransaction("Withdraw", amount);
    } else {
      console.log("Insufficient balance!");
    }
  }

  // Public method to check balance
  getBalance() {
    return `Current balance: $${this.#balance}`;
  }

  // Private method
  #logTransaction(type, amount) {
    console.log(`${type} of $${amount} successful. Remaining balance: $${this.#balance}`);
  }
}

const account = new BankAccount("Alice", 1000);

account.deposit(500);   
account.withdraw(300); 
console.log(account.getBalance()); 




