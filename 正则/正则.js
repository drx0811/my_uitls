/****************************正则的贪婪和非贪婪模式************************************ */
// 默认的都是贪婪模式, 想要获取非贪婪模式 需要借助 ?
// 非贪婪模式一般 需要紧跟 量词后面 ?? *? +? {m,n}?
var test='aa<div>test1</div>bb<div>test2</div>cc';
var pattern = /<div>.*<\/div>/;// 贪婪模式 会匹配到所有满足的 <div>test1</div>bb<div>test2</div>
let a = test.replace(pattern,'')
console.log(a);

var pattern1 = /<div>.*?<\/div>/;// 非贪婪模式 会匹配最低的 <div>test1</div>
let b = test.replace(pattern1, '')
console.log(b);

/************************** 分支模式 ************************************** */
//  分支模式也是   非贪婪地 !!!!!!!!!!!
var regex = /good|goodbye/g;
var string = "goodbye";
console.log(string.match(regex));// => ["good"]

// 使用分支的时候一定要注意分支的顺序, 因为分支是非贪婪的!!!!!!
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log(string.match(regex)); // => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]

/************************匹配位置**************************************** */
// ^ $ \b \B (?=p) (?!p)
// |标识可以匹配到 一行字符串的开头和结尾
let string1 = ' 1 hello Words ---sadfa---   '
var result1 = string1.replace(/^|$/g, '#');
console.log(result1);//#  1 hello Words-- - sadfa-- -   #

// \b \B代表着单词边界
var result3= "[JS] Lesson_01.mp4".replace(/\b/g, '#');
console.log(result3)// => "[#JS#] #Lesson_01#.#mp4#"

// (?=p) 代表可以匹配到 p之前的一个位置
let reg=/(?=p)/g;
let str = 'hellow wordpppdppdddd2';
let flag = str.replace(reg,'#');
console.log(flag);//hellow word#pppdppdddd2

var str2 = 'abc';
var reg2 = /a(?=b)c/; // (?=b)代表的位置其实是一个''没有宽度, b的前面是a,===> /ac/


// (?!p) 代表可以匹配到 不是p的位置之前的一个位置
var reg = /node(?!js)/; // 代表node 其中的(?!js)并没有宽度
 
 /****************************千分位的匹配************************************ */
let num = '11110000'
// 匹配千分位我们应该从末尾开始
let reg_1 = /(?=\d{3}$)/ //正确 ?= 里面要包含$结尾
let reg_11 = /(?=\d{3})$/ // 错误
// 匹配到所有的千分位
let reg_21 = /(?=(\d{3})+)/ // 粗误
let reg_22 = /(?=(\d{3})+$)/ // 正确 从最后开始进行

/***************************** 括号的作用 *********************************** */
// 分组
let reg1 = /(ab)+/;// 代表ab是一个整体
// 分支
let reg2 = /(a|b)/; // 代表a或者b
// 引用分组 !!!!!!!!!!!!!!!!如果正则是否有修饰符g，match返回的数组格式是不一样的
var regex = /(\d{4})-(\d{2})-(\d{2})/;
var string = "2017-06-12";
console.log(string.match(regex));
// => ["2017-06-12", "2017", "06", "12", index: 0, input: "2017-06-12"]
// 反向引用
var regex = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/;
var string1 = "2017-06-12";
var string2 = "2017/06/12";
var string3 = "2017.06.12";
var string4 = "2016-06/12";
console.log(regex.test(string1)); // true
console.log(regex.test(string2)); // true
console.log(regex.test(string3)); // true
console.log(regex.test(string4)); // true // 这里错误
// 有时候我们希望后面引用前面的分组的值,该如何用呢? 答案是反向引用 /1 /2 /3
var regex = /\d{4}(-|\/|\.)\d{2}\1\d{2}/;// 这里正确
