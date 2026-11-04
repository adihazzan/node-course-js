const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'input');

let result = [];//this is the array we are gonna add the lines to from each file

for(let i=1;i<=10;i++)//a loop taht runs on all ten files
{
    const textIn = fs.readFileSync(`${dirPath}/a${i}.txt`,'utf-8');//read the text from the files one by one
    
    let lines = textIn.split(/\r?\n/);//adds a new line to the texts 

    if(lines [lines.length-1]==='')
    {
        lines.pop();//clean the empty texts
    }

    for(let j = 0; j < i && j<lines.length;j++)//a loop that adds lines from the files to the array according to the number of hte file
        result.push(lines[j]);
}
fs.writeFileSync(`${__dirname}/'output.txt'`,result.join('\n'),'utf-8');//creats a new file named (output.txt) that 
                                                                        //contains all the lines from each file
console.log('Success');