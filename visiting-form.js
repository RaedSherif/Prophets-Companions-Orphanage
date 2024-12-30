function f1()
{
    // alert('hi');
   let x=document.getElementById("firstname").value;
   let y=document.getElementById('lastname').value;
   let z=document.getElementById('email').value;
   let t=document.getElementById('phonenumber').value;
   let r=document.getElementById('text').value;
   let u=document.getElementById('visitors').value;
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
            else if (u=="" || u==null)
                {
                 document.getElementById("myerror").innerHTML='Please enter the numbers of visitors, do not leave any filed empty';
                }
                else if (r=="" || r==null || r=="Please provide additional details about your inquiry, visit request, or how you’d like to support")
                    {
                    document.getElementById("myerror").innerHTML='Please enter your inquiry, do not leave any filed empty';
                    }
    else{
        document.getElementById("myerror").innerHTML='';
        alert('Your inquiry is well recived, thanks for filling the form')

    }

}