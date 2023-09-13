const fs=require("fs")

let opr=process.argv[2]
let filename=process.argv[3]
let data=process.argv[4]
let newfile=process.argv[5]

const write=()=>{
    fs.writeFile(filename,data,(err)=>{
        if(err) throw err
        console.log(`File successfully created : ${filename}`);
    })
}
const read=()=>{
    fs.readFile(filename,'Utf8',(err,data)=>{
        if(err) throw err
        console.log(`File successfully read : ${filename}/n${data}`);
    })
}
const edit=()=>{
    fs.appendFile(filename,data,(err)=>{
        if(err) throw err
        console.log(`File successfully edit : ${filename}`);
    })
}
const delet=()=>{
    fs.unlink(filename,(err)=>{
        if(err) throw err
        console.log(`File successfully delete : ${filename}`);
    })
}
const rename=()=>{
    fs.rename(filename, newfile,(err)=>{
        if(err) throw err
        console.log(`File successfully rename : ${filename}`);
    })
}


if(opr=="create"){
    write()
}
else if(opr=="read"){
    read()
}
else if(opr=="edit"){
    edit()
}
else if(opr=="delete"){
    delet()
}
else if(opr=="rename"){
    rename()
}