var count=1;
var edit=0;
var member={
    username:'crystalnyein',
    name:'Nyein',
    team:'FE'
}
var memberString=JSON.stringify(member);
function addLocal(){
    
    if(localStorage.getItem('count')){        
        count=parseInt(localStorage.getItem('count'));
    }
    else{
        localStorage.setItem(''+count,memberString);
        count++;
        member.username='johndoe';
        member.name='John';
        member.team='FE';

        memberString=JSON.stringify(member);
            
        localStorage.setItem(''+count,memberString);    
        count++;     
        localStorage.setItem('count',''+count);
    }
}
function addRow(i){
    member=JSON.parse(localStorage.getItem(''+i));
    console.log(member);        
            // var table=document.querySelector(table);
    var table = document.getElementById("myTable");
    var row=table.insertRow(i);
    var cell1=row.insertCell(0);
    cell1.innerHTML=member.username;
    var cell2=row.insertCell(1);
    cell2.innerHTML=member.name;
    var cell3=row.insertCell(2);
    cell3.innerHTML=member.team;
    var cell4=row.insertCell(3);
    cell4.innerHTML='<button type="button" onclick="onEditMem('+i+')"><i class="fas fa-pencil-alt"></i></button>';
    var cell5=row.insertCell(4);
    cell5.innerHTML='<button type="button" onclick="onDelMem('+i+')"><i class="fas fa-trash"></i></button>';
}

function listMem(){
    
    
    count=parseInt(localStorage.getItem('count'));
    for(i=1;i<count;i++){
        if(localStorage.getItem(''+i)){
            addRow(i);
        }
        else{
            break;
        }
    }
}
function addAndList() {
    addLocal();
    listMem();
}
window.onload=addAndList();

function onAddMem(){
    
    setMem();    
    memberString=JSON.stringify(member);
    if(edit!=0){
        localStorage.setItem(''+edit,memberString);
        var cell=document.getElementById('myTable').rows[edit].cells;
        cell[0].innerHTML=member.username;
        cell[1].innerHTML=member.name;
        cell[2].innerHTML=member.team;
        edit=0;
    }
    else{
        console.log(member);
    
        localStorage.setItem(''+count,memberString);
        count++;
        localStorage.setItem('count',''+count);
        addRow(count);
        
    }
    document.getElementById('username').value='';
    document.getElementById('name').value='';
    document.getElementById('team').value='FE';
        return false;
}

function setMem(){    
    member.username=document.getElementById('username').value;
    member.name=document.getElementById('name').value;
    member.team=document.getElementById('team').value;
}
function onEditMem(i){
    
    member=JSON.parse(localStorage.getItem(''+i));
    document.getElementById('username').value=member.username;
    document.getElementById('name').value=member.name; 
    document.getElementById('team').value=member.team;
    edit=i;
}
function onDelMem(i){
    document.getElementById('myTable').deleteRow(i);
    localStorage.removeItem(i);
    for(j=i;j<count-1;j++){
        localStorage.setItem(''+j,localStorage.getItem(j+1));
    }
    localStorage.removeItem(j);
    count--;
    localStorage.setItem('count',''+count);
}