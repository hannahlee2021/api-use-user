const baseURL = "https://ahona-test.onrender.com/"

const playerChoice = document.getElementById("choice");

const submitButton2=document.getElementById("submit");
submitButton2.addEventListener("click", submitButton);
//function when button is clicked
//in that function, get input and then make api call
// and then update HTML 

function submitButton () {
    let input2=document.getElementById("choice").value;
    let result2="";
    let score1="";


    getChoice(input2)

}


const getChoice = async function(input2) {
    try {
        const response=await fetch(`${baseURL}myChoice/${input2}`)
       
        const json = await response.json();

         const index2=json.search("computer");
    result2=json.substring(index2, json.length -1);

    const score=json.search("score");
    score1=json.substring(score,15);

    
    

    if (result2.charAt(10)== "r") {
        console.log("rock")

    } else if (result2.charAt(10)=="p") {
        console.log("paper")
    } else if (result2.charAt(10)=="s") {
        console.log("scissors")
    }
    document.getElementById("result-text").innerHTML = result2;
    document.getElementById("score-text").innerHTML = score1;
        
       
        // console.log(json)

        // const submitButton = () => ({
        //     let input2 = document.getElementById("choice").value
        // })
        
       
    }catch(error) {
        console.log(error)
    }
}


// function subButton() {
    
//     let input = document.getElementById("choice").value;
//     let result = "";
    
//     if (input == "rock") {
//         const json = "The score is -1 {computer: paper | player: rock}"
//    const index =  json.search("computer");
//     // document.getElementById("result-text").innerHTML = json.substring(index);
//     result = json.substring(index)

//     // document.getElementById("result-text").innerHTML = json.search(17);
//    }
//    document.getElementById("result-text").innerHTML = result;
// }



// getChoice(input);

//res.send --> res.json