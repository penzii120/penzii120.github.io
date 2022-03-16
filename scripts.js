var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

let btn = document.querySelector(".tryMe");
console.log(btn);
btn.onclick=()=>{
    toastr.success("Uspesno poslato pitanje!");
    let input = document.getElementById("input");
    input.value = "";
}