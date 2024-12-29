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
    document.getElementById("myerror").innerHTML='Please enter your first name, do not leave any filed empty';
   }
    else if (y=="" || y==null)
    {
     document.getElementById("myerror").innerHTML='Please enter your last name, do not leave any filed empty';
    }
    else if (z=="" || z==null)
        {
         document.getElementById("myerror").innerHTML='Please enter your email, do not leave any filed empty';
        }
        else if (t=="" || t==null)
            {
             document.getElementById("myerror").innerHTML='Please enter your phone number, do not leave any filed empty';
            }
            else if (r=="" || r==null || r=="What information would you like to see added to our About Us page?")
                {
                 document.getElementById("myerror").innerHTML='Please enter your suggestion, do not leave any filed empty';
                }
    else{
        alert('thanks for filling the form')
    }

}