// anaToVori problem 1!!
function anaToVori(ana) {
    if (typeof ana != "number") {
    (" sorry enter the caret value");
    }
    const vori = ana / 16;
    return vori;
    }
    const akVori = anaToVori(32);
    console.log(akVori);
    // pandaCost Problem 2!!
    function pandaCost(singara, comuca, jilapi) {
    // error solution
    if (typeof jilapi != "number") {
    return "please enter a valid quantity !!";
    }
    if (jilapi <= 0) {
    return "please enter a valid Number!!";
    } else {
    const perSingara = 7;
    const perComuca = 10;
    const perJilapi = 15;
    const allSingaraPrice = singara * perSingara;
    const allComucaPrice = comuca * perComuca;
    const allJilapiPrice = jilapi * perJilapi;
    const allFoodPrice = allSingaraPrice + allComucaPrice + allJilapiPrice;
    return allFoodPrice;
    }
    }
    const allFoodPrice = pandaCost(3, 3, 3);
    console.log(allFoodPrice);
    // picnicBudget problem 3!!
    function picnicBudget(totalPerson) {
    if (typeof totalPerson != "number") {
    return "please enter valid number";
    }
    let person = 0;
    if (totalPerson <= 100) {
    let spending = totalPerson * 5000;
    } else if (totalPerson <= 200) {
    let firstSpending = 100 * 5000;
    let dueSpending = (totalPerson - 100) * 4000;
    spending = firstSpending + dueSpending;
    } else if (totalPerson > 200) {
    let secondSpending = 100 * 5000;
    let firstSpending = 100 * 4000;
    let dueSpending = (totalPerson - 200) * 3000;
    spending = firstSpending + secondSpending + dueSpending;
    }
    return spending;
    }
    const allPerson = picnicBudget(250);
    console.log(allPerson);
    // // oddFriend Problem 4 !!
    function oddFriend(names) {
    if(typeof names == 'number'){
    return 'please enter valid thing';
    }
    for (var i = 0; i < names.length; i++) {
    var friend = names[i];
    if (friend.length % 2 != 0) {
    return friend;
    }
    }
    }
    var newArray = oddFriend(["Alvin", "Masum", "Arifin", "Mamun"]);
    console.log(newArray);