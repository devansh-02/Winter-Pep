document.getElementById('createAccountBtn').addEventListener('click', createAccount);

function createAccount() {
    const account = {
        accountHolder: "Devansh",
        accountNumber: "1234567890",
    };
    let balance = 0;

    document.getElementById('accountDetails').style.display = 'block';
    updateBalanceDisplay();

    
    document.getElementById('depositBtn').addEventListener('click', () => {
        const amount = parseInt(document.getElementById('amount').value);
        if (amount > 0) {
            balance += amount;
            updateBalanceDisplay();
            alert(`₹${amount} deposited successfully!`);
        } else {
            alert('Enter a valid amount to deposit.');
        }
    });


    document.getElementById('withdrawBtn').addEventListener('click', () => {
        const amount = parseInt(document.getElementById('amount').value);
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            updateBalanceDisplay();
            alert(`₹${amount} withdrawn successfully!`);
        } else {
            alert('Invalid withdrawal amount.');
        }
    });

    function updateBalanceDisplay() {
        document.getElementById('balance').innerText = `Balance: ₹${balance}`;
    }
}
