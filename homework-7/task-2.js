const countDown  = (num) => {
    if(num > 0){
        console.log(num);
        func(num - 1);
    } else {
        return;
    }
}; func(5);