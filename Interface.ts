//here what ever the methods we implement those methods should implement it in derived class.
interface INotification {
    send(message: string): void;
}

class EmailNotification implements INotification {
    send(message: string): void {
        console.log("Email sent:", message);
    }
}

class SmsNotification implements INotification {
    send(message: string): void {
        console.log("SMS sent:", message);
    }
}

let notification: INotification = new EmailNotification();
notification.send("Welcome!");

notification = new SmsNotification();
notification.send("Your OTP is 1234");