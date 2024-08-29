//https://www.youtube.com/watch?v=ByhtOgF6uYM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=25
//please do watch the video

/*
execution context means HOW DOES CODE GETS EXECUTED 
    Execution context:
    1. global execution context (GEC) /also known as global environment
        it gets executed first as soon as we write code, referred with 
        THIS keyword
            note: GEC for browser and node is different, 
            value of this for browser is (window) and for node is ({object})
    2. ffunction execution context
    3. eval execution context

how does code gets executed?
phases:
    1. memory creation phase {}
        memory allocation.
    2. execution phase
        code gets executed in this phase.
*/
//explaination: 

let val1 = 10 
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let resutlt1 = addNum(val1, val2)
let resutlt2 = addNum(10, 2)
console.log(resutlt1);
console.log(resutlt2);

/*
step1 /cycle 1: global execution
        this.
step2 /cycle 1: memory creation phase
        1. val 1, val 2 (line no 21, 22) 
        2. at first, both val 1 and val 2 will get assigned as undefined
            val 1--> undefined and 
            val 2--> undefined        
        3. line no 23-26: addNum--> definition
        4. line 7-8 result 2 and result 3 will get undefined too.
    stel 1 and 2 consist of first cycle
step 3/cylce 2: execution phase
        val 1 and val 2 will get assigned to their respective given values.
        and will pass to line 30 where function will be called with default/given parametrs
        val 1 <--10
        val 2 <--5
    for result 1: addNume(calling of function), it will create a (new variable environment + thread).
                    
                REFER TO THE IMAGE 1 & 2

            it will create memory phase and execution context again...
        memory phase:
            val 1 --> undefined
            val 2 --> undefined
            total --> undefined
        execution context:
            num 1 --> 10
            num 2 --> 5
            total --> 15
        now value will go the global context and get printed and new variable environment for 
        intermediate execution phase will get deleted.
    for result 2: all process of intermediate creation of (new variable environment + thread) will be repeated.
*/

/* what is CALL STACK
    it follows LIFO(last in first out)
    watch video for better understanding
    see ref image 3
*/