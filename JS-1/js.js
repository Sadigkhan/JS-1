function Confirm() {
    let text;
    if (confirm("Press a button!") == true) {
      document.body.style.backgroundColor="black"
    } else {
      document.body.style.backgroundColor="white"
    }
   
  }


    let age = prompt("Yasini daxil et ");
    if (age != null) {
        if(age>=18){
            document.getElementById("text1").innerHTML =
            'Yasiniz 18-den yuxari oldugu ucun daxil oldunuz';
        }
        else if(age<0){
          document.getElementById("text1").innerHTML =
          'Yas menfi ola bilmez';
        }
        else if( isNaN(age)===true){
          document.getElementById("text1").innerHTML =
          'Zehmet olmasa reqem daxil edin';
        }
        else if(age.trim() == '' ){
          document.getElementById("text1").innerHTML =
          'Bosluq daxil ede bilmezsiniz';
        }
        else{
              document.getElementById("text1").innerHTML =
            'Yasiniz 18-den az oldugu ucun daxil ola bilmediniz';
        }
       
    }
    else{
        document.getElementById("text1").innerHTML =
        'Yasinizi daxil edin';
    }





class Person{
  constructor(){
    
      
  }
}
let person={
  name:'Sadiqxan',
  surname:'Qayxanov',
  password:21,

  fullname:function(){

   return this.name+' '+this.surname
  }


   


  };
  console.log(person.fullname())
  document.getElementById("text2").innerHTML =person.fullname().toUpperCase().valueOf();
 