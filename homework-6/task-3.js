const checkOrder = (available, ordered) => {
  if (ordered === 0) {
    console.log("Your order is empty");
    return;
  }

  if(ordered > available){
    console.log("Your order is too large, we don’t have enough goods.")
  } else{
    console.log("Your order is accepted")
  }
};

checkOrder(1,2)