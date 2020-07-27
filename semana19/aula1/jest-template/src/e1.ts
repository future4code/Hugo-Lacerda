interface User {
    name: string,
    balance: number
}

function performPurchase(user: User, value: number): User | undefined {
    if(user.balance >= value){
        return {
            name: user.name,
            balance: (user.balance - value) 
        };
    }

    return undefined;
}

export { performPurchase, User };