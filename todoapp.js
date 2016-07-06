


function create()
{
    var br = document.createElement("br");var newform = document.createElement("form");
    newform.id = "main_form";
    newform.style.width = "50%";
    newform.method="post";
    newform.style.height = "500px";
    newform.style.background = "#66c2ff";
    newform.style.textAlign="center";
    document.body.appendChild(newform);

    var lable1 = document.createElement("label");
    var br1 = document.createElement("br");
    lable1.id = "main_label";
    lable1.innerHTML = "MY TO DO APP";
    lable1.style.width="75px";
    lable1.style.marginTop="100";
    lable1.style.height="25px";
    lable1.style.fontSize="25px";
    newform.appendChild(lable1);
    newform.appendChild(br1);

    var newtxt = document.createElement("input");
    newtxt.type = "text";
    newtxt.id = "txtinput";
    newtxt.size = "50";
    newtxt.style.textAlign="center";
    newtxt.placeholder="Enter TO DO Task Here.";

    newform.appendChild(newtxt);

    var newtxttime = document.createElement("input");
    newtxttime.type = "text";
    newtxttime.id = "timeinput";
    newtxttime.size = "4";
    newtxttime.style.textAlign="center";
    newtxttime.placeholder="Time";
    newform.appendChild(newtxttime);


    var newdate = document.createElement("input");
    newdate.type = "date";
    newdate.id = "dateinput";
    newdate.size = "4";
    newdate.style.textAlign="center";
    newdate.placeholder="Date&Time";
    newform.appendChild(newdate);

    var newcolor = document.createElement("input");
    newcolor.type = "color";
    newcolor.id = "colorinput";
    newcolor.size = "4";
    newcolor.style.textAlign="center";
    newcolor.placeholder="Set Priority";
    newform.appendChild(newcolor);

    var newbtn = document.createElement("input");
    newbtn.setAttribute('type','submit');
    newbtn.id ="add";
    newbtn.value= "Add";
    newbtn.style.width="75px";
    newbtn.style.height="25px";
    newbtn.style.textAlign = "center";
    newbtn.style.fontSize="25px";
    newbtn.addEventListener("click",add);
    newform.appendChild(newbtn);




}



