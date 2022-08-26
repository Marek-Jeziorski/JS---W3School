//DEMO_4A ----------------------------------------------
import { name, age } from "./person.js";

let text = "My name is " + name + ", I am " + age + ".";

document.getElementById("demo_4a").innerHTML = text;

//DEMO_4B ----------------------------------------------
import message from "./message.js";

document.getElementById("demo_4b").innerHTML = message();
