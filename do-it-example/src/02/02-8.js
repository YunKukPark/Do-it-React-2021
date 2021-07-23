import MyModule from './MyModule.js'; // 1
import { MyModule } from './MyModule.js'; // 2
import { MyModule as MM } from './MyModule.js'; // 3
function Fucn() {
  MyModule();
}

export const CONST_VALUE = 0; // 4
export class MyClass {} // 5
export default new Fucn(); // 6
