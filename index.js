// 1

// const student = {name: "puntsag", age: 15, isStudent: true}
// console.log(student);

// 2

// const fruits = ["Алим", "Банана", "Жүрж"]
// console.log(fruits);

// 3

// const person = { name: "Ану", age: 20 }
// console.log(person.name);

// 4

// const colors = ["Улаан", "Ногоон", "Цэнхэр"]
// console.log(colors[0]);

// 5

// product = { name: "Дэвтэр", price: 2500 }
// console.log(product["price"]);

// 6

// const students = ["Бат", "Ану", "Болд"]
// console.log(students[1]);

// 7

// const person = { name: "Бат", age: 18 }
// const {name, age} = person
// console.log(`${name} ${age} настай.`);

// 8

// const animals = ["Нохой", "Муур", "Туулай", "Морь"]
// console.log(animals.length);

// 9

// const numbers = [10, 20, 30, 40, 50]
// console.log(numbers[numbers.length - 1]);

// 10

// const student = { name: "Сараа", age: 16, grade: 10 }
// const studentGrade = student.grade
// console.log(studentGrade);

// 11

// const fruits = ["Алим", "Банана", "Жүрж"]
// fruits.splice(1, 1, "Усан үзэм")
// console.log(fruits);

// 12

// const person = { name: "Болд", age: 17, isAdult: undefined }
// if (person.age >= 18) {
//     person.isAdult = true
//     console.log(person);
// }else{
//     person.isAdult = false
//     console.log(person);
// }

// 13

// const books = ["Математик", "Англи хэл"]
// books.push("Программчлал")
// console.log(books);

// 14

// const student = { name: "Ану", age: 15 }
// student.grade = 9
// console.log(student);

// 15

// const player = { name: "Тэмүүлэн", score: 100 }
// if (player.score >= 100) {
//     player.score = Number(player.score + 50)
//     console.log(player);
// } else {
//     player.score = Number(player.score + 10)
//     console.log(player);
// }

// 16

// const items = ["Дэвтэр", "Бал", "Баллуур"];
// const removedItem = items.pop();
// console.log(items, removedItem);

// 17

// const queue = ["Бат", "Ану"]
// queue.unshift("Болд")
// console.log(queue);

// 18

// const lamp = { isOn: false}
// if (lamp.isOn === true) {
//     lamp.isOn = false
//     console.log("Гэрлийг унтраалаа", lamp);
// }else{
//     lamp.isOn = true
//     console.log("Гэрлийг асаалаа", lamp);

// }

// 19

// const queue = ["Болд", "Бат", "Ану"]
// const firstPerson = queue.shift()
// console.log(queue, firstPerson);

// 20

// const user = { name: "Бат", isVerified: false, temporaryCode: "ABC123" }
// if (user.isVerified === true) {
//     delete user.temporaryCode
//     console.log(user);
// }else {
//     console.log("Эхлээд бүртгэлээ баталгаажуулна уу");
// }

// 21

// const product = { name: "Дэвтэр", price: 2500, quantity: 4 }
// console.log(Number(product.price * product.quantity));

// 22

// const rectangle = { width: 5, height: 8 }
// rectangle.area = rectangle.width * rectangle.height
// console.log(rectangle);

// 23

// const scores = { math: 80, english: 90, programming: 100 }
// console.log(Number(scores.math + scores.english + scores.programming) / 3);

// 24

// const product = { price: 50000, discountPercent: 20 }
// if (product.discountPercent > 0) {
//     finalPrice = Number(product.price / 100) * Number(100 - product.discountPercent)
//     console.log(finalPrice);
// }else if (product.discountPercent == 0) {
//     finalPrice = product.price
//     console.log(finalPrice);
// }

// 25

// const account = { owner: "Болд", balance: 50000 }
// const withdrawAmount = 60000
// if (account.balance >= withdrawAmount) {
//     console.log("Гүйлгээ амжилттай");
// }else{
//     console.log("Үлдэгдэл хүрэлцэхгүй");
// }

// 26

// const product = { name: "Бал", stock: 0 }
// const urdun = product.stock > 0 ? "Бэлэн байна" : "Дууссан";
// console.log(urdun);

// 27

// const numbers = [15, 25, 10]
// console.log(Number(numbers[0] + numbers[1] + numbers[2]));

// 28

// const scores = [80, 90, 100]
// console.log(Number(scores[0] + scores[1] + scores[2]) / 3);

// 29

// const customer = { money: 10000 }
// const product = { price: 8000, stock: 3 }
// if (customer.money > product.price && product.stock > 0) {
//     console.log("Авч болно");
// }else{
//     console.log("Авч болохгүй");
// }

// 30

// const student = { name: "Сараа", score: 85 }
// if (student.score >= 90) {
//     console.log("Маш сайн");
// }else if (student.score < 60) {
//     console.log("Тэнцээгүй");
// }else{
//     console.log("Тэнцсэн");
// }

// 31

// const student = { name: "Бат", age: 16 }
// console.log("age" in student, "email" in student);

// 32

// const student = { name: "Болд", address: { city: "Улаанбаатар", district: "Хан-Уул" } }
// console.log(student.address.city);

// 33

// const person = { name: "Ану", address: { city: "Улаанбаатар", district: "Баянзүрх" } }
// if (person.address.city === "Улаанбаатар") {
//     console.log(person.address.district);
// }else{
//     console.log("Орон нутгийн оршин суугч");
// }

// 34

// const student = { name: "Бат", scores: { math: 70, english: 80 } }
// if (student.scores.math < 80) {
//     console.log(Number(student.scores.math + 10));
// }else{
//     console.log("Нэмэлт оноо шаардлагагүй");
// }

// 35

// let names = ["Бат", "Ану"];

// let temp = names[0];
// let temp1 = names[1];

// names[1] = temp;
// names[0] = temp1;

// console.log(names);

// 36

// const fruits = ["Алим", "Банана", "Жүрж"]
// if (fruits.includes("Банана")) {
//     console.log("Банана байна");
// }else{
//     console.log("Банана алга");
// }

// 37

// const students = ["Бат", "Ану", "Болд", "Сараа"]
// console.log(students.indexOf("Болд"));

// 38

// const order = { product: { price: 5000, quantity: 3 }, delivery: { fee: 2500 } }
// order.total = Number(order.product.price * order.product.quantity) + order.delivery.fee
// if (Number(order.product.price * order.product.quantity) > 20000) {
//     order.delivery.fee = 0
//     console.log(order.total);
// }else {
//     console.log(order.total);
// }

// 39

// const user1 = { name: "Болд", age: 20 }
// const user2 = { email: "bold@example.com", city: "Улаанбаатар" }
// const newUser = Object.assign(user1, user2)
// console.log(newUser);

// 40

// const cart = []
// if (cart.length == 0) {
//     console.log("Сагс хоосон");
// }else{
//     console.log("Сагсанд бараа байна");
// }

// 41

// const numbers = [35, 20]
// if (numbers[0] > numbers[1]) {
//     console.log(numbers[0]);
// }else if (numbers[1] > numbers[0]){
//     console.log(numbers[1]);
// }else{
//     console.log("Хоёр тоо тэнцүү");
// }

// 42

// const students = ["Бат", "Ану"]
// const newStudent = "Сараа"
// if (students.includes("Сараа")) {
//     console.log("Энэ нэр бүртгэлтэй байна");
// }else{
//     students.push(newStudent)
//     console.log(students);
// }

// 43

// const user1 = { name: "Ану", age: 18 };
// const user2 = { email: "anu@example.com", city: "Улаанбаатар" };
// const newUser = { ...user1, ...user2 };
// console.log(newUser);

// 44

// const groupA = ["Бат", "Ану"]
// const groupB = ["Болд", "Сараа"]
// const allStudents = groupA.concat(groupB)
// console.log(allStudents);

// 45

// const original = [10, 20, 30]
// const copied = [...original]
// copied[0] = 99
// console.log(original, copied);

// 46

// const numbers = [10, 20, 30, 40, 50] 
// const neww = numbers.slice(1, 4)
// console.log(neww);

// 47

// const user = { name: "Сараа", age: 22, email: "saraa@example.com" }
// const {email, ...profile} = user
// profile.name = "Бат"
// console.log(profile.name, user.name);

// 48

// const colors = ["Улаан", "Ногоон", "Цэнхэр", "Шар"]
// colors.splice(1, 1)
// console.log(colors);

// 49

// const days = ["Даваа", "Лхагва"]
// days.splice(1, 0, "Мягмар")
// console.log(days);

// 50

// const words = ["Би", "JavaScript", "сурч", "байна."]
// console.log(words.join(" "));

// 51

// const students = [{ name: "Бат", score: 75 }, { name: "Ану", score: 90 }]
// students[0].score += 10
// if (students[1].score >= 90) {
//     console.log(students[0], "Ану маш сайн");
// }else{
//     console.log(students[0], "Ану хичээгээрэй");
// }

