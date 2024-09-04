// How would you compare two objects if they are pointing to a different location in memory
// but still have the same properties?

var user1 = { name: "nerd", org: "dev" };
var user2 = { name: "nerd", org: "dev" };
var eq = user1 == user2;
alert(eq); // give false;

// this is actually an interesting one! There is a simple solution, but it comes with a bit of a  catch
// https://stackoverflow.com/questions/1068834/object-comparison-in-javascript
