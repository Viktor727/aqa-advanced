const divide = (numerator, denominator) => {
    if (denominator === 0 || typeof numerator !== 'number' || typeof denominator !== 'number') {
        return "Помилка";
    } else {
        return numerator / denominator;
    }
    
}; 

try{
    console.log(divide(1, 5));
} catch(error){
    console.error("Виникла помилка:", error.message);
} finally{
    console.log("Робота завершена");
}