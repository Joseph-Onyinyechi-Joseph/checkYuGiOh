class checkYuGiOh {


    constructor(n) {

        // if (Number.isNaN(n)) {
        //     console.log(`invalid parameter <br> ${n}`);
        // } else {

        let arr = [];
        for (let i = 1; i <= n; i++) {
            i % 2 == 0 && i % 3 == 0 && i % 5 == 0 ? arr.push("yu-Gi-Oh") :
                i % 2 == 0 && i % 3 == 0 ? arr.push("Yu-Gi") :
                i % 2 == 0 && i % 5 == 0 ? arr.push("Yu-Oh") :
                i % 3 == 0 && i % 5 == 0 ? arr.push("Gi-Oh") :
                i % 2 == 0 ? arr.push("Yu") :
                i % 3 == 0 ? arr.push("Gi") :
                i % 5 == 0 ? arr.push("Oh") :
                arr.push(i);
        }

        return arr;

    }

}

let myArray = new checkYuGiOh(10);

console.log(myArray);