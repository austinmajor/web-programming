// Put your solution here
function divideArray(nums) {
    // create empty arrays to store even and odd numbers
    var evenNums = [], oddNums = [];
    var i;

    // loop over the nums array
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) // ith element is even, add it to evenNums array
            evenNums.push(nums[i]);
        else               // ith element is odd, add it to oddNums array
            oddNums.push(nums[i]);
    }

    // sort and display the contents of evenNums
    console.log("Even numbers:");
    if (evenNums.length > 0) // non-empty array
    {
        // sort the array in ascendng ordet using a custom comparison function
        evenNums.sort(function (a, b) { return a - b; });
        for (i = 0; i < evenNums.length; i++)
            console.log(evenNums[i]);
    }
    else // empty array
        console.log("None");

    // sort and display the contents of oddNums
    console.log("Odd numbers:");
    if (oddNums.length > 0) // non-empty array
    {
        // sort the array in ascendng ordet using a custom comparison function
        oddNums.sort(function (a, b) { return a - b; });
        for (i = 0; i < oddNums.length; i++)
            console.log(oddNums[i]);
    }
    else // empty array
        console.log("None");
}