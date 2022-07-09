var getDaysInMonth = function(month,year) 
{
 return new Date(year, month, 0).getDate();
};
console.log(getDaysInMonth(8, 2022));
console.log(getDaysInMonth(2, 2022));