const create = document.getElementById("create");

create.onclick = () => {
    console.log("wip");
    fetch('api/createchannel').then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("metrics").innerText = data.output;
    }).catch(err => console.log("error while allocating channel -> ", err));
}

window.addEventListener('beforeunload', function (e) {
    if(this.window.closed){
        this.fetch('/api/closechannel');
    }
});