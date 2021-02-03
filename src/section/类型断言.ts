export default function func() {
    let value: any = "123";
    let length: number = value.length;
    console.log(length);
    /*
     *  类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
     *  它没有运行时的影响，只是在编译阶段起作用。
     *  TypeScript会假设你，程序员，已经进行了必须的检查。
     * */
    // 类型断言有两种形式:
    // 在TypeScript里使用JSX时，只有 as语法断言是被允许的。
    //其一是“尖括号”语法：
    let length1: number = (<string>value).length;
    console.log("(<string>value):", length1);
    //另一个为as语法：
    let length2: number = (value as string).length;
    console.log("value as string:", length2);
}
