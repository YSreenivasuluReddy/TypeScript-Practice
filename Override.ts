abstract class Payment {
    abstract pay(amount: number): void;

    receipt(): void {
        console.log("Payment processed");
    }
}

class UpiPayment extends Payment {
    override pay(amount: number): void {
        console.log(`Paid ₹${amount} using UPI`);
    }
}

let payment = new UpiPayment();
payment.pay(1000);
payment.receipt();