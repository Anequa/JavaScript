// // console.log("Hello Newbie");
// // let total = 2 + 2;
// // if (total === 4) {
// //     console.log("its working ")
// // }
// // const password = prompt("give me pass");
// // if (password.length >= 6) {
// //     if (password.indexOf(" ") == -1) {
// //         console.log("valid");
// //     } else {
// //         console.log("nie mozesz das spacji");
// //     }
// // } else {
// //     console.log("to short");
// // }
// let List=[1,"ania","tecza"];
// //add last
// List.push("doggo");
// //remove last
// List.pop();
// //remove from start
// List.shift();
// //add at beggining
// List.unshift();
// let friends=["wera","bartek","Claudia"];
// let Bf=["Tomek"];
// //laczenie list
// let MyFriends=friends.concat(Bf);
// //sprawdzanie czy coś jest w liscie
// friends.includes("wiktoria");
// //sprawdzanie gdzie w liscie
// friends.indexOf("wera");
// //obraca liste i zmienia 
// friends.reverse();
// //daje mi fragment listy od do (nie wlicza ostatniego a indeks - daje od tyłu)
// newerFriends=friends.slice(0,2);
// friends.push("wiki");
// //usuwa podana ilośc i dodaje na ich miejsce
// friends.splice(3,1);
// //sortuje literowo, po liczbach nie umie
// friends.sort();
// const dolls=
// {
//     name:["Draculaura","Frankie","cleo"],
//     price:"around 200zl",
//     rarity:"high",
//     doIOwnIt:true,
// }

// console.log(dolls.doIOwnIt);
// dolls["price"];
// let ifRare='rarity';
// console.log(dolls[ifRare]);
// const restaurant = {
//     name: 'Ichiran Ramen',
//     address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//     city: 'Brooklyn',
//     state: 'NY',
//     zipcode: '11206',
// }
// let fullAddress=restaurant.address+restaurant.city+restaurant.state+restaurant.zipcode;
// //or
// // let fullAddress=restaurant["address"]+restaurant["city"]+restaurant["state"]+restaurant["zipcode"];
// let dolls.skinColor=["pink","grey","tanned"];  
// for( let i=25; i<=0; i-=5)
// {
//     console.log(i);
// }
// let imiona=["ania","wera","tomek","bartek"];
// // for(let i=imiona.length-1;i>=0;i--)
// // {
// //  console.log(imiona[i].toUpperCase());
// // }
// for(let imie of imiona)
// {
//     console.log(imie);
// }

// let max=parseInt(prompt("Enter a max num"));
// while(!max){
//     max=parseInt(prompt("Enter a valid max num"));
// }
// let targetnum=(Math.floor(Math.random()*max))+1;
// let guess=prompt("guess a number");
// let attempts=1;
// while(parseInt(guess)!==targetnum)
// {
//     if(guess==='q') break;
    
//     if(guess>targetnum)
//     {
//         guess=prompt("too high");
//     }else{
//         guess=prompt("too low");

//     }
//     attempts++;
// }
// console.log(`u got it after ${attempts} guesses`);
// const List={
//     Ania:"obiad",
//     tomek:"zmywanie",
//     tata:"wyjscie z psami",
//     mama:"telewizja"
// }
// for(let person in List)
// {
//     console.log(`${person} robi ${List[person]}`);
// }
// //prosze o obiad
// //Object.values(List);
// for(let action of Object.values(List))
// {
// console.log()
// }
let word=prompt("choose what u want to do ");
const ListToDo=["eat","play"];

while(word!=='quit')
{
    if(word==='new')
    {
        const zad=prompt("Podaj zadanie");
        ListToDo.push(zad);  
        console.log(`${zad} added`);
    }
    else if(word==='list')
    {
        for(let i=0;i<ListToDo.length;i++)
        {
            console.log(`${i}:${ListToDo[i]}`);
        }
    }
    else if(word==='delete')
    { 
        const num=parseInt(prompt("podej nr indeksu "));
        if(!Number.isNaN(num))
        {

      
        const deleted=ListToDo.splice(num,1);
        console.log(`You deleted ${deleted}`);
        }else{
            console.log("unknown index");
        }
        

    }
    word=prompt("choose what u want to do ");
}
   
console.log("Quitted");