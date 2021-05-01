interface Data {
    age: number,
    project_langauges: Array<string>,
}

interface App {
    id: number,
    name: string,
    data: Data,
}



class Main implements App {
    id=Math.ceil(Math.random()*1000)
    name="glaukiol1"
    data: Data = {
        age: 15,
        project_langauges: [
            "typescript",
            "json",
            "sh"
        ]
    }
}

function main_module(amt: number): any {
    for (let i = 0; i < amt; i++) {
        console.log(new Main())
    }
}

export default main_module;