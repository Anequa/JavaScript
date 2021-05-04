// const req=new XMLHttpRequest();
// req.onload=function(){
//     const data=JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }
// req.onerror=function(){
//     console.log("Error")
//     console.log(this);
// }
// req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();

// axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res=>{
//         console.log(res.data.ticker.price)
//     })
//     .catch(err=>{
//         console.log("erorr",err)
//     })

// const fetchBitcoinPrice=async()=>{
//     try{
//         const res=await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
//         console.log(res.data.ticker.price)
//     }catch(e){
//         console.log("error",e)
//     }
// }

const place = document.querySelector('#jokes')
const button = document.querySelector('button')


const addNewJoke = async () => {
    const joke = await GetDadJoke();
    console.log(joke)
    const newLi = document.createElement('LI');
    newLi.append(joke);
    place.append(newLi);

}
const GetDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    }catch(e){
        return"no jokes for u"
    }
 
}

button.addEventListener('click', addNewJoke)