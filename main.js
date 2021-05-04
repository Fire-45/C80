var students = [];

function submit(){

for(j=1; j<5; j++){
    var name = document.getElementById("name_of_the_student_"+j).value;
    console.log(name);
    students.push(name);
    console.log(students);
    
}
for(k=0; k<4; k++){
document.getElementById("display_name_with_commas").innerHTML += "<h4> Names "+ students[k] +"<br> </h4>";
}
document.getElementById("submit_button").style.display = "none";
document.getElementById("sort_button").style.display = "inline-block"
}
function sorting(){
students.sort();
for(s=0; s<4; s++){
document.getElementById("display_name_without_commas").innerHTML += "<h4> Names"+ students[s] +"<br> </h4>";



}

}