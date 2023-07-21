
import * as readline from 'readline';

    const msg2 = readline.createInterface(
    
    {
        input:process.stdin,
        output:process.stdout

    });
    function sum(num1:string , num2:string){
    
       
            const res = Number(num1) + Number(num2)
            return res;
            
        }
        ;


       function div(num1:string , num2:string){

            if(Number(num2) == 0)
            {
                return 0;
            }
            else{
            const res = Number(num1) / Number(num2)
            return res;
            
            }
        }
     


       function mul(num1:string , num2:string){

            const res = Number(num1) * Number(num2)
            return res;
       
}

       function subt(num1:string,num2:string){
   
            const res = Number(num1) - Number(num2)
            return res;   
}




const dev_name = 'Ihtesham Jahangir';
console.log(`Mini Calculator by ${dev_name} `);
msg2.question('Enter Number1:',(num1:string)=>{
msg2.question('Enter Number2:',(num2:string)=>{


msg2.question('\nChoose Your Operation\n 1:Addition\n 2:Multiplication\n 3:Division \n 4:Subtraction \n',(choose:string)=>
{
    switch(Number(choose))
    {
        case 1: {
        
           const res = sum(num1 , num2);
        console.log(`Res = ${res}`)
        }
        break;
        case 2: {const res =mul(num1 , num2);
        console.log(`Res = ${res}`);
        }
        break;
        case 3: {const res = div(num1 , num2); 
            if(res == 0)
            {console.log('Number2 Must be Greater then 0')}
            else{console.log(`Res = ${res}`)}
        }
        break;
        case 4: {const res = subt(num1 , num2);
        console.log(`Res = ${res}`);
        }
    }
msg2.close();    
});
})

});
