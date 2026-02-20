function paymentShare(price, member) {
    const memberPayment = price / member;
    return memberPayment;
}
const userPrice = prompt("enter your order price (tooman) :");
const userMembers = prompt("how many are you ?");
const result = paymentShare(userPrice , userMembers);
alert(result);
