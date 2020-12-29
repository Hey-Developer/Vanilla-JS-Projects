// todo v1-->

let todo = [];

console.log(`Hello user, Good Morning Are u ready to plan your day:)`);
console.log(`Yaa! I am ready let me decide the task:`);
console.log(`task 1: learn JS advance`);
console.log(`task 2: So some fun projects`);
console.log(`task 3: Watch youtube`);
console.log(`task 4: sleep before 11 pm`);
console.log(`Okay user let me set these task in your todo list`);
todo.push("Learn Js advance");
todo.push("Do some Js Projects");
todo.push("Watch Youtube");
todo.push("Sleep before 11 pm");
console.log(`Hey! siri show me my todo's list, \n okay Cnu!`);
todo.forEach(function(task, index) {
    console.log(`Task No. ${++index}: ${task}`);
});
console.log(
    `Ok siri thanq now just update the task list as i completed first 3 task, \n okay Cnu!`
);
var taskCompleted = 3;
for (let i = 1; i <= taskCompleted; i++) {
    todo.shift();
}
console.log(`Siri! Now show me my updated task list:`);
todo.forEach(function(task, index) {
    console.log(`Task No. ${++index}: ${task}`);
});
console.log(
    `Okay so only one task is left let me complete the task, i am going to sleep Good Night Siri,\n Okay CNU last task is also completed`
);

taskCompleted = 1;
for (let i = 1; i <= taskCompleted; i++) {
    todo.shift();
}
console.log(
    `---------------------------------------Todo V2---------------------------`
);
// Todo v2
var todaydate = new Date();
var weekday = todaydate.getDay();

function weekDayName(day) {
    var name = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return name[day];
}

let myTodos = {
    day: weekDayName(weekday),
    meetings: 0,
    meetdone: 0,
};

let addMeetings = function(todo, meet = 0) {
    todo.meetings += meet;
    console.log(`${meet} Meeting added -_-`);
};

let meetDone = function(todo, meet = 0) {
    todo.meetdone += meet;
    console.log(`${meet} Meetings Completed -_-`);
};

let resetDays = function(todo) {
    todo.meetings = 0;
    todo.meetdone = 0;
};

let getSummaryOfDay = function(todo) {
    let meetleft = todo.meetings - todo.meetdone;
    console.log(`You Have ${meetleft} Meetings Left for today.`);
};

console.log(
    `Hey Siri, What is todays Day: \n Today's Day is ${weekDayName(weekday)}`
);

console.log(`Ok, set 5 meetings for today: \n Okay CNU :)`);
addMeetings(myTodos, 5);

console.log(
    `Hey Siri, i have completed three meeting just remove it form the Todo list \n okay cnu!`
);
meetDone(myTodos, 3);

console.log(
    `Hey! siri I am very tired How much meetings left for today: \n Let me check CNU-_-`
);
getSummaryOfDay(myTodos);