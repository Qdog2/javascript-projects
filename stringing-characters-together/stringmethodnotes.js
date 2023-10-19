//somestring.replace(old,new)

let alpha = "abzde";
alpha = alpha.replace("z", "c");
console.log(alpha);

//arguments are values accepted for each parameter

let happy = "Woohoo!";
let ecstatic = happy.toUpperCase();
console.log(ecstatic);

let str = " hello!     ";
str = str.trim();
str = str.replace(str[0], str[0].toUpperCase());
console.log(str);

let theBoyWhoLived = "   Hairy Plotter   ";
theBoyWhoLived = theBoyWhoLived.trim();
console.log(theBoyWhoLived);
theBoyWhoLived = theBoyWhoLived.replace("i", "r");
console.log(theBoyWhoLived);

let genius = "Albert Einstein";
console.log(genius.includes("b"));
console.log(genius.includes("x"));
console.log(genius.indexOf("e"));

let org = "Launch Code";
let spaceIdx = org.indexOf(" ");
org = org.slice(0, spaceIdx) + org.slice(spaceIdx + 1);
console.log(org);