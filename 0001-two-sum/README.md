<h2><a href="https://leetcode.com/problems/two-sum">1. Two Sum</a></h2><h3>Easy</h3><hr><p>Given an array of integers <code>nums</code>&nbsp;and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>

<p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p>

<p>You can return the answer in any order.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= nums.length &lt;= 10<sup>4</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></code></li>
	<li><code>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></code></li>
	<li><strong>Only one valid answer exists.</strong></li>
</ul>

<p>&nbsp;</p>
<strong>Follow-up:&nbsp;</strong>Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code><font face="monospace">&nbsp;</font>time complexity?


[Question 1. Two Sum](https://leetcode.com/problems/two-sum/description/)

### _Explanation of the Question_

1. Return indices of the two numbers that **they add up to target**
	**Input:** nums = [2,7,11,15], target = 9
	**Output:** [0,1]
2. Each input would have **exactly one solution**
3. You may not use the same element twice
### _How to Solve_

1. The variable `i` iterates over all indices of the array second-to-last element
2. For each index `i`, the variable `j` stars from i + 1 and iterates through the remaining elements of the array.

### _First Code_

```javascript
function letterCasePermutation(value){

    let allCombination = [];

    function backTrack(path, index){

        if(index === value.length){
            allCombination.push(path);
            return;
        }

        let singleString = value[index];

        if(isNaN(singleString)){// if it is a character
            backTrack(path + singleString.toLowerCase(), index + 1);
            backTrack(path + singleString.toUpperCase(), index + 1);
        }else{//if it is a number
            backTrack(path + singleString, index + 1);
        }
    }

    backTrack('', 0);

    return allCombination;
}
```
