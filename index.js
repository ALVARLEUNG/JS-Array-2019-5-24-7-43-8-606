// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(a instanceof Array);
console.log(b instanceof Array);

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (var i = 0; i < a.length; i++) {
	a[i] = a[i] * 2;
}
console.log(a);


// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var newColors = '';
for (var i = 0; i < colors.length; i++) {
	if (i == (colors.length-1)) {
		newColors =newColors + colors[i]; 
	}else {
		newColors = newColors + colors[i] + ' ';
		}
	}
		console.log(newColors);
// case 2 output: 'Red+Green+White+Black'
var newColors = '';
for (var i = 0; i < colors.length; i++) {
	if (i == (colors.length-1)) {
		newColors =newColors + colors[i]; 
	}else {
		newColors = newColors + colors[i] + '+';
		}
	}
		console.log(newColors);
// case 3 output: 'Red,Green,White,Black'
var newColors = '';
for (var i = 0; i < colors.length; i++) {
	if (i == (colors.length-1)) {
		newColors =newColors + colors[i]; 
	}else {
		newColors = newColors + colors[i] + ',';
		}
	}
		console.log(newColors);

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
for (var i = 0; i < a.length; i++) {
	var temp = '';
	for (var j = 0; j < (a.length-i); j++)
	if (a[j] < a[j+1]) {
		temp = a[j];
		a[j] = a[j+1];
		a[j+1] = temp;
	}
}
console.log(a);
// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var obj = {};
var maxEle = '';
var maxNum = 0;
for (var i = 0; i < a.length; i++) {
	var key = a[i];
	obj[key] === undefined ? obj[key] = 1 : obj[key]++ ;
	if (obj[key] > maxNum) {
		maxNum = obj[key];
		maxEle = key;
	}
}
console.log(maxEle);