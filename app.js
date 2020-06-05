const Array = require('./array.js');
const mem = require('./memory.js');

/*function main(){

    Array.SIZE_RATIO = 3;

    // Create an instance of the Array class
    let arr = new Array();

    // Add an item to the array
    arr.push(3);

    console.log(arr);
    arr.push(5);
    arr.push(15);
    arr.push(19);
    arr.push(45);
    arr.push(10);
   // console.log(arr);
    arr.pop();
    arr.pop();
    arr.pop()
   // console.log(arr);

    console.log(arr.get(0));
    arr.pop();  //Q4
    arr.pop();
    arr.pop();
    arr.push('tahuida');
    console.log(arr.get(0));
    console.log(arr);
}*/

//main(); //after first push--> Array { length: 1, _capacity: 3, ptr: 0 }
        //after 5 additional push()--> Array { length: 6, _capacity: 12, ptr: 3 } 
        //The array had to resize for the 4th (arr.push(19)) call and before adding the new value, bringing the capacity up to 12 and setting the ptr equal to the size of 3, then there were 3 more calls bringing the length to 6. Since the length was less than the capacity at this point, no further resizing needed to occur leaving the length at 6, capacity at 12, and ptr at 3
    
//Q3 //Array { length: 3, _capacity: 12, ptr: 3 }  3 elements were removed from the array, so the length changed to 3, the capacity and ptr remained their values.

//Q4 
//print first item console.log(arr.get(0)) //3
//arr.push('tauhida')
//the purpose of the resize function is to change the capacity of the array so that performance can be higher

//5. A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

//Input: tauhida parveen

//Output: tauhida%20parveen

//Input: www.thinkful.com /tauh ida parv een

//Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function removeSpaces(string){
    console.log(string)
    return string.replace(/ /g, "%20");
}

//console.log(removeSpaces('www.thinkful.com /tauh ida parv een'));

function removeSpaces2(string){
    let array = string.split('');
    //console.log(array)
    let newArray=[];
    for (let i=0; i < array.length; i++){
        if(array[i]=== ' ')
        { newArray.push('%20')}
        else 
        {newArray.push(array[i])}
    }
    return newArray.join('');
}
//console.log(removeSpaces2('www.thinkful.com /tauh ida parv een'));

//Q6.Filtering an array
//Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.


function filterArray(array, value){

    let newArray = [];
   
    for(let i=1; i<array.length; i++ ){
    
      if(array[i]>=value){
        newArray.push(array[i])
      }
    }
    return newArray;
}

//console.log(`this is the result ${filterArray([2,3,4,7,10,12],5)}`);

//Q7.Max sum in the array
//You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

//Input: [4, 6, -3, 5, -2, 1]
//Output: 12

function findLargestSum(array){
    const initialArray = [...array];
    let intialArrayLength = array.length;
    let largestSum = array[0];
    let currentArray = [...array];
    let sum = 0;
   
 for (let i =1; i<intialArrayLength; i++){
    while(currentArray.length > 0){
        sum = 0;
        
        for (let j =0; j<currentArray.length; j++){
            sum += currentArray[j]
        }
        if (sum > largestSum){
            largestSum = sum;
        }
        currentArray.splice(-1);
    }//end of while loop
    initialArray.shift();
    currentArray = [...initialArray]
 }//end of outer for loop*/
 return largestSum;
}

//console.log(`this is the result ${findLargestSum([-3, 4, 6, -2, 5, -2, 1])}`);

//Q8. Merge arrays
//Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

//Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
//Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeArrays(array1,array2){
    let finalArray =[];
    let i=0;
    let j=0;

  while( i<array1.length && j<array2.length){ 
       if(array1[i]<array2[j]){
           finalArray.push(array1[i])
           i++;
       }
       else if(array1[i]===array2[j]){
           finalArray.push(array1[i]);
           finalArray.push(array2[j]);
           i++;
           j++;
       }
       else{
           finalArray.push(array2[j])
           j++;
      } 
 }//end of while

 //will add on the remaining values of whichever array still has values
 if (i<array1.length){
     for(k=i; k<array1.length; k++){
         finalArray.push(array1[k])
     }
 }
 if(j<array2.length){
    for(k=j; k<array2.length; k++){
        finalArray.push(array2[k])
    }
 }
 return finalArray;
}

//console.log(`this is the result ${mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10, 14, 16])}`);

//Q9. Remove characters
//Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

//Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
//Output: 'Bttl f th Vwls: Hw vs. Grzny'

function removeCharacters(string, characters){
 

    let finalString = '';
    let match = false;
  
    for (let i=0; i<string.length; i++){
        let currentCharcter = string.charAt(i);
        match=false;
        //look for a match between currentCharacter and any character in characters string
        for(let j=0; j<characters.length;j++){
            if(currentCharcter===characters.charAt(j))
            {match = true}
        }

        if (!match){finalString = finalString + currentCharcter}
    }
   
 return finalString;
}

//console.log(`this is the result ${removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou')}`);

//Q10 Products
//Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

//Input:[1, 3, 9, 4]
//Output:[108, 36, 12, 27]

function productOfEveryoneButYou(array){
    let product=1;
    let productArray =[]

    for(let i = 0; i<array.length; i++){
        for (let j=0; j<(array.length); j++){
         product = product * array[j]
        }
        product = product/array[i];
        productArray.push(product);
        product=1;
    }
    return productArray
}

//console.log(`this is the results ${productOfEveryoneButYou([1, 3, 9, 4])}`)

//Q11.2D array
//Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

/*Input:
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]];*/

function noZeroes(array){
   let cleanedArray=[...array];
   cleanedArray[1][1]=4
   console.log(cleanedArray);
   skipColumn=[array.length];
   let colOk=true;
   for (let i = 0; i<array.length;i++){
       for(let j = 0; j<array[i].length; j++){
            for(let n=0; n<skipColumn.length;n++){
                if(j === skipColumn[n]){
                    colOk = false
                }//end of skipColumn if
             }//end of skipColumn for
            if(colOk){
                if(array[i][j]===0){
                    console.log(`found one at row ${i}column${j}`)
                    for(let k=0; k<array.length;k++){
                        cleanedArray[i][k]=0              
                    }
                    for(let m=0;m<array[i].length;m++){
                        cleanedArray[m][j]=0;
                    }
                    //to go to the next row after find one
                    skipColumn.push(j)
                    console.log(`this is the skipCOl ${skipColumn}`)
                    j=array[i].length
                    console.log(j)
                }
            }//end of colOk if
            //rest colOk
            colOk=true;
           
        }//end of j for loop
    }//outer for loop i
    return cleanedArray;
}//end of function

//needs a skipRow  check

//console.log(`this is the results ${noZeroes([[1,0,1,1,0],[0,1,1,1,0],[1,1,1,1,1],[1,0,1,1,1],[1,1,1,1,1]])}`)

//Q12. String rotation
//Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

/*Input: amazon, azonma

Output: False

Input: amazon, azonam

Output: true*/

//I don't understand what they mean by rotation
function areYouAMirrorString(string1, string2){

    //first check if strings are same size because if they aren't then they are not rotations
    if(string1.length!==string2.length){
        return false
    }

    let match = true;

   for(let i = 0; i<string1.length;i++){
       for(let j=(string2.length-1);j>=0;j--){

       }
    }

    return true
}

console.log(areYouAMirrorString('amazonj', 'azonma'))