const AMT = 15;

interface Data {
    age: number,
    project_langauge: Array<string>,
}

interface App {
    id: number,
    name: string,
    data: object,
}

class Main implements App {
    id=Math.ceil(Math.random()*(AMT*5))
    name="glaukiol1"
    data= {
        age: 15,
        languages: 'typescript'
    }
}

function main_module(amt: number): any {
    for (let i = 0; i < amt; i++) {
        console.log(new Main())
    }
}

main_module(AMT)