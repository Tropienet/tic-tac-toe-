const playerFactory = (name, mark) => {
    const sayHello = () => console.log("hello");
    return {name, mark, sayHello};
}

const tin = playerFactory("tin", "x");

tin.sayHello();