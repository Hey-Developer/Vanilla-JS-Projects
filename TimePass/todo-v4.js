// todo v4(with a search option)

let myTodos = [];
myTodos.push({
    title: "Go to Gym",
    isDone: false,
    isSkipped: false,
});
myTodos.push({
    title: "Learn JS Advance",
    isDone: false,
    isSkipped: false,
});
myTodos.push({
    title: "Do some fun stuff",
    isDone: false,
    isSkipped: false,
});
myTodos.push({
    title: "Watch youtube",
    isDone: false,
    isSkipped: false,
});

// Useful array methods to search -->
/* 
$ find and findIndex() Method:
  The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
  const array1 = [5, 12, 8, 130, 44];
  const found = array1.find(element => element > 10);
  console.log(found);
// expected output: 12
  > If you need the index of the found element in the array, use findIndex().
  > If you need to find the index of a value, use Array.prototype.indexOf(). (It’s similar to findIndex(), but checks each element for equality with the value instead of using a testing function.)
  > If you need to find if a value exists in an array, use Array.prototype.includes().
  > If you need to find if any element satisfies the provided testing function, use Array.prototype.some().
*/

// const index = myTodos.findIndex(function(value, index) {
//     return value.title === `Go to Gym`;//return 1 the index of the the second object of the array
// });

// Method_1
const findTodos = function(anyTodos, title) {
    const index = anyTodos.findIndex(function(value, index) {
        return value.title.toLowerCase() === title.toLowerCase(); // to make search case insensitive
    });
    return anyTodos[index];
};

console.log(
    `Hey Siri did i add some task like this-"watch Youtube" in my todo list \n let me check CNU....`
);

var searchresult = findTodos(myTodos, "watch Youtube");
if (searchresult !== undefined) {
    console.log(`Here is what i found CNU `);
    console.log(searchresult);
} else {
    console.log(`Sorry Cnu i couldn't find any task '`);
}

// Method-2
const findTodo = function(anyTodos, title) {
    const result = anyTodos.find(function(value, index) {
        return value.title.toLowerCase() === title.toLowerCase(); // to make search case insensitive
    });
    return result;
};