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
        else if (t.length !==11 || t=='' || t==null)
            {
             document.getElementById("myerror").innerHTML='Please enter your phone number, and be sure that it is all numbers and exactly 11 digits';
            }
            else if (r=="" || r==null || r=="If you have any questions, specific requests, or details you’d like to share, please enter them here.")
                {
                 document.getElementById("myerror").innerHTML='Please enter your message or question, do not leave any filed empty';
                }
    else{
        document.getElementById("myerror").innerHTML='';
        alert('Thanks. Your message is well recived, we will return to you as fast as we can.')

    }

}