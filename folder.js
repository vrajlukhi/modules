const fs=require("fs")

let opr=process.argv[2]
let foldername=process.argv[3]


const create=()=>{
    fs.mkdir(foldername,(err)=>{
        if(err) throw err
        console.log(`Folder successfully created : ${foldername}`);
    })
}
const delet=()=>{
    fs.rmdir(foldername,(err)=>{
        if(err) throw err
        console.log(`Folder successfully delete : ${foldername}`);
    })
}

if(ope=="create"){
    create()
}
else if(opr=="delete"){
    delet()
}