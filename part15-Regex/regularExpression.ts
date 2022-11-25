// 1. String (1 + slide)
// series of characters
/*
let str = 'Codegym';
console.log(str);

let otherStr = new String("C09");
console.log(otherStr);
console.log(otherStr.toString());
console.log(otherStr === "C09");
*/

// template syntax ``

// methods (3 + slide)
// charAt ():  Nó trả về ký tự của chỉ mục đã cho.
// concat (): Nó trả về kết quả kết hợp của hai hoặc nhiều chuỗi.
// endWith (): Nó được sử dụng để kiểm tra xem một chuỗi có kết thúc bằng một chuỗi khác hay không.
// include (): Nó kiểm tra xem chuỗi có chứa chuỗi khác hay không.
// indexOf (): Nó trả về chỉ số của lần xuất hiện đầu tiên của chuỗi con được chỉ định từ một chuỗi, nếu không thì trả về -1.
// lastIndexOf (): Nó trả về chỉ số của lần xuất hiện cuối cùng của một giá trị trong chuỗi.
// match (): Nó được sử dụng để so khớp một biểu thức chính quy với chuỗi đã cho.
// Replace (): Nó thay thế chuỗi con phù hợp bằng chuỗi con mới.
// search (): Nó tìm kiếm sự phù hợp giữa một biểu thức chính quy và chuỗi.
// Slice (): Nó trả về một phần của chuỗi.
// split (): Nó chia chuỗi thành các chuỗi con và trả về một mảng.
// substring (): Nó trả về một chuỗi nằm giữa hai chỉ mục đã cho.
// toLowerCase (): Nó chuyển đổi tất cả các ký tự của một chuỗi thành chữ thường.
// toUpperCase (): Nó chuyển đổi tất cả các ký tự của một chuỗi thành chữ hoa.
// trim (): Nó được sử dụng để cắt bớt khoảng trắng từ đầu và cuối của chuỗi.
// trimLeft (): Nó được sử dụng để cắt bớt khoảng trắng từ phía bên trái của chuỗi.
// trimRight (): Nó được sử dụng để cắt bỏ khoảng trắng từ phía bên phải của chuỗi.
// valueOf (): Nó trả về một giá trị nguyên thủy của đối tượng được chỉ định.



// 2. Regular expression
let regExp: RegExp = /xy+z/;

let pattern: RegExp = /codegym/i; // i: modifier, not check case
let tex = "we are Codegymers";
console.log(pattern.test(tex));
let result = tex.match(pattern);
console.log(result);