const user=['u1','u2','u3','u4']
const game=['rock','paper','sci']
const uc=[]

var count=0


comp=(c1,c2)=>{
    switch(c1+c2){
        case "rocksci":
        case "paperrock":
        case "scipaper":
            console.log(user[0])
            break;
        case "scirock":
        case "rockpaper":
        case "papersci":
            console.log(user[1])
            break
        case "scisci":
        case "rockrock":
        case "paperpaper":
            console.log("draw")
            break
    }
}



const fun=()=>{
    const num=Math.floor(Math.random()*3)
    const output=game[num]
    return output
}

start=()=>{  

user.filter((u)=>{
    const out=fun()
    uc.push({user:u,out:out,count:count})   
})

c1=uc[0]
c2=uc[1]
c3=uc[2]
c4=uc[3]
console.log(uc)

comp=(c1,c2)=>{
    k=c1.out
    l=c2.out
    switch(k+l){
        case "rocksci":
        case "paperrock":
        case "scipaper": 
            c1.count++
            //return c1.count
            return console.log(c1.user+' defeated '+c2.user+' has points '+ c1.count)
            //break
        case "scirock":
        case "rockpaper":
        case "papersci":
            c2.count++
            //return c2.count
            return console.log(c2.user+' defeated '+c1.user+' has points '+ c2.count)
            //break
        case "scisci":
        case "rockrock":
        case "paperpaper":
            return console.log(c1.user+" drawed "+c2.user)
           // break
    }
    //console.log(c1.user+' has points '+ c1.count+' '+ c2.user+ ' has points '+ c2.count)
}

comp(c1,c2)
comp(c1,c3)
comp(c1,c4)
comp(c2,c3)
comp(c2,c4)
comp(c3,c4)



}

for(i=1;i<5;i++){
     
    start()
}