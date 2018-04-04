
function getMonthName(monthNumber) {

    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    if (months[monthNumber-1]) {

        return months[monthNumber-1];
    } 
    else {
        throw "invaild";
    }

}

function displayMonthNameBasedOnNumber() {
    try {
        var monthName = getMonthName(12);
        colsole.log(monthName);
    }
    catch (e) {
        monthName = "unkown";
        console.log(monthName);
        console.log("wrong number");
    }
    finally {
        console.log("aikfaijfija");
    }

}

console.log(displayMonthNameBasedOnNumber());
