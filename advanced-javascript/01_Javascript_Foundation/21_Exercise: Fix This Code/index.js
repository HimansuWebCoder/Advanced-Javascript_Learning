This recursive function creates a stack overflow. How can you fix this code by still keeping the recursive call around, but only adding something that you have learned in this section to not cause this stack overflow.

//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');
 
function removeItemsFromList() {
    var item = list.pop();
 
    if (item) {
        removeItemsFromList();
    }
};
 
removeItemsFromList();

The solution is provided for you in a Repl attached to this lesson. Please see the resources!

If you have any questions, or you want to discuss the solution, reach out in our private Discord chat community in the #js channel (Link can be found in Lecture 3 on your Udemy course dashboard)!

Resources for this lecture


// solution

// How to prevent stack overflow using recursion?
//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');
function removeItemsFromList() {
    var item = list.pop();

   if (item) {
       removeItemsFromList();
   } else {

   }
};
removeItemsFromList();


// ::ANSWER::
//fill array with 60000 elements
const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

   if (item) {
       setTimeout( removeItemsFromList, 0 );
   } else {
    console.log("End = "+list.length);
   }
};

removeItemsFromList();

console.log("End = "+ list.length);