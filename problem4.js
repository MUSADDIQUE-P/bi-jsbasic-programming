var getDaysInMonth = function(month,year) 
{
 return new Date(year, month, 0).getDate();
};
document.write(getDaysInMonth(8, 2022));
document.write(getDaysInMonth(2, 2022));
