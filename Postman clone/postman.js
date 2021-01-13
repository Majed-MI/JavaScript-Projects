console.log("Hello");

// Utility function to get Dom element from string;
function getElementFromString(string){
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

//initializing no. of parameters
let addedParams = 0;

//hiding parameters box initially
let parametesBox = document.getElementById('parametersBox');
parametersBox.style.display = 'none';

// if the user clicks on params parametersBox.hide the jsonbox
let params = document. getElementById('params');
params.addEventListener('click',()=>{
    document.getElementById('jsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

// if the user clicks on json jsonBox.hide the parametersBox
let json = document. getElementById('json');
json.addEventListener('click',()=>{
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('jsonBox').style.display = 'block';
})

// if the user clicks + button then parameter more will be added
let addParams = document.getElementById('addParams');
addParams.addEventListener('click',()=>{
    let param = document.getElementById('param');
    let string = `<div class="form-row my-2">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Enter Parameter${addedParams+2} :</label>
                    <div class=" col-md-4">
                        <input type="text" class="form-control" id="parameterKey${addedParams+2}" placeholder="Enter Parameter ${addedParams+2} Key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${addedParams+2}" placeholder="Enter Parameter ${addedParams+2} value">
                    </div>
                    <div class="btn btn-primary subtractParams"> - </div>
                </div>`
    //convert the element string to dom mode
    let paramElement = getElementFromString(string);
    param.appendChild(paramElement);
    
    //adding an eventlistener to delete when clicking - button
    let subtractParams = document.getElementsByClassName('subtractParams');
    for(item of subtractParams){
        item.addEventListener('click',(e)=>{
            e.target.parentElement.remove();
            alert("Do you want to delete this?");
        })
    }
    addedParams++;
})

//If the click is on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    //Show please wait in the response box
    // document.getElementById('responseText').value = "Please Wait... Fetching Response...";
    document.getElementById('prismBox').value = "Please Wait... Fetching Response...";


    //Fetch all the values 
    let url = document.getElementById('urlField').value;
    let requestRadios = document.querySelector('input[name = "requestRadios"]:checked').value;
    let contentRadios = document.querySelector('input[name = "contentRadios"]:checked').value;
    // console.log(url,requestRadios,contentRadios);

    //if user has used params instead of json,then
     if(contentRadios == "params"){
         data = {};
         for(let i=0;i<addedParams+1;i++){
             if(document.getElementById('parameterKey' +(i+1)) != undefined ){
            let key = document.getElementById('parameterKey' + (i+1)).value;
            let value = document.getElementById('parameterValue' +(i+1)).value;
            data[key]= value;
             }
         }
         data = JSON.stringify(data);
     }
     else{
        data = document.getElementById('jsonText').value;
     }

    //  console.log(url,requestRadios,contentRadios,data)

    //ifthe request type is post fetch to create a post request
    if(requestRadios == 'GET'){
        fetch(url,{
            method: 'GET',
        }).then(response => response.text())
        .then((text)=>{
            // document.getElementById('responseText').value = text;
            document.getElementById('prismBox').innerHTML = text;

        })
    }

    //ifthe request type is post fetch to create a post request
    else{
        fetch(url,{
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.text())
        .then((text)=>{
            // document.getElementById('responseText').value = text;
            document.getElementById('prismBox').innerHTML = text;

        })
    }
})