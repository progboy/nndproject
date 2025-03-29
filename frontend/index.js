const create = document.getElementById("create");
const delButton = document.getElementById("delete");

const a_field = document.getElementById("a_field");
const b_field = document.getElementById("b_field");

let aval,bval;

create.onclick = () => {
    console.log("wip");
    aval = Number(a_field.value);
    if(aval==""){
        aval = 0;
    }
    bval = Number(b_field.value);
    console.log(aval,bval);
    fetch(`api/createchannel?aval=${aval}&bval=${bval}`).then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("metrics").innerText = data.output;
    }).catch(err => console.log("error while allocating channel -> ", err));
}

delButton.onclick = () => {
    //wip, implement this
    fetch(`api/closechannel?aval=${aval}&bval=${bval}`);
}

window.addEventListener('beforeunload', function (e) {
    if(this.window.closed){
        this.fetch('/api/closechannel');
    }
});