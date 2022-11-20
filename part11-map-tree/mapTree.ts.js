// 1. Cac thuat ngu: 1
// Nút gốc (Root): nút trên cùng của cây được gọi là nút gốc. Một cây sẽ chỉ có một nút gốc và một đường xuất phát từ nút gốc tới bất kỳ nút nào khác.
// Nút cha: một nút mà nối trực tiếp với một nút khác và ở gần nút gốc hơn nút đó.
// Nút con: một nút mà nối trực tiếp với một nút khác và ở xa nút gốc hơn nút đó.
// Tổ tiên: một nút mà có thể duyệt đến được bằng cách liên tục duyệt theo nút cha.
// Hậu duệ: một nút mà có thể duyệt đến được bằng cách liên tục duyệt theo nút con.
// Nút lá: nút không có nút con nào
// Duyệt: duyệt qua các nút theo một thứ tự nào đó.
// Đường: một chuỗi các nút cùng với các đường nối giữa chúng với nhau theo quan hệ hậu duệ.
// Khóa (Key): biểu diễn một giá trị của một nút dựa trên những gì mà một thao tác tìm kiếm thực hiện trên nút.



// 2. Binary search tree 2 + slide
// in order
// pre-order
// pos order



// 3. Map
let map = new Map();
map.set("Item 1", 10);
map.set("Item 2", 20);

for (let key of map.keys()) {
    console.log(key, map.get(key));
}

for (let val of map.values()) {
    console.log(val);
}

for (let entry of map.entries()) {
    console.log(entry);
}

map.forEach((value, key, map) => {
    console.log(value);
    console.log(key);
    console.log(map);
});

