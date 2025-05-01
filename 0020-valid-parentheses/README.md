<h2><a href="https://leetcode.com/problems/valid-parentheses">20. Valid Parentheses</a></h2><h3>Easy</h3><hr><p>Given a string <code>s</code> containing just the characters <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;{&#39;</code>, <code>&#39;}&#39;</code>, <code>&#39;[&#39;</code> and <code>&#39;]&#39;</code>, determine if the input string is valid.</p>

<p>An input string is valid if:</p>

<ol>
	<li>Open brackets must be closed by the same type of brackets.</li>
	<li>Open brackets must be closed in the correct order.</li>
	<li>Every close bracket has a corresponding open bracket of the same type.</li>
</ol>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;()&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;()[]{}&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;(]&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>
</div>

<p><strong class="example">Example 4:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;([])&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 10<sup>4</sup></code></li>
	<li><code>s</code> consists of parentheses only <code>&#39;()[]{}&#39;</code>.</li>
</ul>
### _Explanation of the Question_

1. Return value of `Valid` 
	- if open brackets close by the same type of brackets.
	- if open brackets close in the correct order
	- if every close bracket has a corresponding open bracket of the same type

### _First Code_
#### _How to Solve_

1. When you encounter an opening bracket, push it to the stack
2. When you encounter a closing bracket
	- if it is same, pop it
	- if it is different, return false

3. Time Complexity O(n)
4. Space Complexity O(n)
```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {

    let openBracket = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{') openBracket.push(s[i]);
        else{
            if(s[i] === ')'){
                if(openBracket[openBracket.length-1] === '(') openBracket.pop();
                else return false;
            }else if(s[i] === ']'){
                if(openBracket[openBracket.length-1] === '[') openBracket.pop();
                else return false;
            }else if(s[i] === '}'){
                if(openBracket[openBracket.length-1] === '{') openBracket.pop();
                else return false;
            }
        }
    }

    if(openBracket.length === 0) return true;
    else return false;
};

let s = "()[]{}";
isValid(s);
```

### _Second Code_
#### _How to Improve_
1. Use a HashMap
2. Create an object with key-value pairs for opening bracket and closing bracket
	- `] : [ `
	- `} : { `
	- `) : (`
3. As you iterate through the string `s`:
	- If `s[i]` is an opening bracket, push it to the stack
	- If `s[i]` is a closing bracket, compare the popped value from the stack with the corresponding value in the mapping object.
		- If they match, continue the logic
		- otherwise, return false
4. Time Complexity O(n)
5. Space Complexity O(n)
```javascript
function isValid(s) {
    const bracketPairs = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    const checkStack = [];

    for(const char of s){
        if(char === '(' || char === '[' || char === '{') checkStack.push(char);
        else{
            if(bracketPairs[char] !== checkStack.pop()) return false;
        }
    }
    return checkStack.length === 0; // case: s = ")",  s = "(";
};

```
