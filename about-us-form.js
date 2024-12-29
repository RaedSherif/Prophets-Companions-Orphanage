function f1()
{
    // alert('hi');
   let x=document.getElementById("firstname").value;
   let y=document.getElementById('lastname').value;
   let z=document.getElementById('email').value;
   let t=document.getElementById('phonenumber').value;
   let r=document.getElementById('text').value;
   if (x=="" || x==null)
   {
    //alert ('you must enter your first name, it cannot be empty')
    document.getElementById("myerror").innerHTML='Please fill the all of the form, do not leave any filed empty';
   }
    else if (y=="" || y==null)
    {
     document.getElementById("myerror").innerHTML='Please fill the all of the form, do not leave any filed empty';
    }
    else if (z=="" || z==null)
        {
         document.getElementById("myerror").innerHTML='Please fill the all of the form, do not leave any filed empty';
        }
        else if (t=="" || t==null)
            {
             document.getElementById("myerror").innerHTML='Please fill the all of the form, do not leave any filed empty';
            }
            else if (r=="" || r==null)
                {
                 document.getElementById("myerror").innerHTML='Please fill the all of the form, do not leave any filed empty';
                }
    else{
        alert('thanks for filling the form')
    }

}