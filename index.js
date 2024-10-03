







function Roll()
{
    const dices=document.getElementById("input").value;
    const btn=document.getElementById("btn");
    const outputText=document.getElementById("outputText");
    const outputImage=document.getElementById("outputImage");
    const values=[];
    const images=[];


    
    for(let i =1 ; i<=dices ;i++)
    {
        let result = Math.floor(Math.random() * 6)+1;
        values.push(result);
        outputText.textContent="Dices:"+values;
        images.push(`<img src="Images/${result}.jpeg">`);



    }

    

    outputText.textContent="Dices:"+values.join(",");
    outputImage.innerHTML=images.join(" ");

}