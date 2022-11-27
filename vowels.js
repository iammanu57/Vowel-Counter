const text=document.getElementById('text');
const btn=document.getElementById('btn');
const display=document.getElementById('result');

btn.addEventListener('click',(e)=>{
    if(text.value==''){
        display.innerHTML='Enter some text!!!';
        display.style.color='red';
        setTimeout(()=>display.innerHTML='',1000)
        setTimeout(()=>display.style.color='rgb(0,0,58)',1000)
    }
    else{
        const arrayText= Array.from(text.value.toLowerCase())
        console.log(arrayText)
        let vowelCount=0
        let vowels='';
        let a=0;
        let e1=0;
        let i1=0;
        let o1=0;
        let u=0;
        for(i=0;i<arrayText.length;i++){
            digit=arrayText[i]
            if (digit=='a'||digit=='e'||digit=='i'||digit=='o'||digit=='u'){
                vowelCount+=1;
                switch(digit){
                    case 'a' :{
                        a+=1
                        break;
                    }case 'e' :{
                        e1+=1
                        break;
                    }case 'i' :{
                        i1+=1
                    }case 'o' :{
                        o1+=1
                        break;
                    }case 'u' :{
                        u+=1
                        break;
                    }
                }
                vowels+=digit
            }

            

        }
        display.innerHTML=`Text:</br> ${text.value} </br></br>The total number of vowels are ${vowelCount} </br>
        In Detail: </br>
        a=${a}</br>
        e=${e1}</br>
        i=${i1}</br>
        o=${o1}</br>
        u=${u}</br>`
        text.value=''
    }
})