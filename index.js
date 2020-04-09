const user=['u1','u2','u3','u4']
const game=['rock','paper','sci']
const uc=[]
const points=[]
var count=0



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
            console.log(c1.user+' defeated '+c2.user+' has points '+ c1.count)
            points.push({user:c1.user,points:c1.count})
            xcount=0
            break
        case "scirock":
        case "rockpaper":
        case "papersci":
            c2.count++
            //return c2.count
             console.log(c2.user+' defeated '+c1.user+' has points '+ c2.count)
             points.push({user:c2.user,points:c2.count})
             ycount=0
            break
        case "scisci":
        case "rockrock":
        case "paperpaper":
             console.log(c1.user+" drawed "+c2.user)
             break
    }
    //console.log(c1.user+' has points '+ c1.count+' '+ c2.user+ ' has points '+ c2.count)
}


comp(c1,c2)
comp(c1,c3)
comp(c1,c4)
comp(c2,c3)
comp(c2,c4)
comp(c3,c4)

console.log(points)
points.splice(0,points.length)
uc.splice(0,uc.length)

}

for(i=1;i<5;i++){
     
    start()
}