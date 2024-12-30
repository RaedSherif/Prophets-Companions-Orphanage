function f1()
{
    // alert('hi');
   let x=document.getElementById("firstname").value;
   let y=document.getElementById('lastname').value;
   let z=document.getElementById('email').value;
   let t=document.getElementById('phonenumber').value;
   let r=document.getElementById('text').value;
   let u=document.getElementById('years').value;
   let p=document.getElementById('permission');
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
            else if(u==""||u==null)
                {
                    document.getElementById('myerror').innerHTML='Please enter the number of years, do not leave any filed empty';
                }
                else if (r=="" || r==null || r=="Please share any specific memories, milestones, or experiences that illustrate your connection to Prophet's Companions Orphanage.")
                {
                 document.getElementById("myerror").innerHTML='Please enter your story or memory, do not leave any filed empty';
                }
                 else if(!p.checked)
                    {
                     document.getElementById('myerror').innerHTML='Permission is required to share your story, please check the box';
                     }
                
    else{
        document.getElementById("myerror").innerHTML='';
        alert('Your story is well recived, thanks for sharing')

    }

}