const array = [
    {year: "2015", result: "W"},
    {year: "2014", result: "N/A"},
    {year: "2013", result: "L"},
]
function superbowlWin(array, year) {
   for (year of array) {
    if (year.result === "W") {
        return ("2015");
    }
   } 
}
superbowlWin(year, "2015");