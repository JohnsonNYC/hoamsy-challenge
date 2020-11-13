// Reverse the string "Josephine" √
// Reverse the sentence " Josephine likes apples" -> " apples likes Josephine ") √
// Find the minimum value in the list [ 1 3 5 3 7 3 1 1 5 ] √
// Return the distinct values from the list [1 3 5 3 7 3 1 1 5] -> [1 3 5 7]

const reverseString = (name) =>{
    let result = ""
    for(let i = name.length-1; i >= 0 ; i--){
        result += name[i]
    }

    console.log(result)
}

const reverseSentence = (sentence) => {
    let result = sentence.split(" ").reverse().join(' ')
    console.log(result)
}

const minVal = (array) => {
    let min = Infinity
    for(let num of array ){
        min = Math.min(min, num)
    }

    console.log(min)
}

const distinctVal = (array) =>{
    let counter = {};
    let distinctArray = []
    for(let num of array){
        if(!counter[num]){
            counter[num] = 1
            distinctArray.push(num)
        }else{
            counter[num] = counter[num] + 1 ;
        }
    }

    console.log(distinctArray)
}

distinctVal([1, 3, 5, 3, 7, 3, 1, 1, 5])

