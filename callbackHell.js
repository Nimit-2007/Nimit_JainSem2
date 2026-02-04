//zomato application

const orderdetails={
    name: "Nimit Jain",
    order: ["Pizza", "Burger", "fries"],
    address: "Chandni Chowk",
    amount: 720
}

function orderrecieved(orderdetails,callback){
    console.log("Order recieved");

    setTimeout(()=>{
        console.log("Order has started preparing");
        callback(orderdetails);
    },5000);

}
function orderprepared(orderdetails,callback){
    console.log("Order has been prepared");

    setTimeout(()=>{
        console.log("Order is ready for pickup");
        callback(orderdetails);
    },5000);

}
function delievery(orderdetails){
    console.log("Agent has picked up the order");

    setTimeout(()=>{
        console.log("Agent is on the way to delivery your order at ");
    },5000);

}
orderrecieved(orderdetails,(orderdetails)=>{
    orderprepared(orderdetails,(orderdetails)=>{
        delievery(orderdetails);
    });
});