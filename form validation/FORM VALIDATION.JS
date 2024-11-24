alert("REGISTER AT YOUR OWN RISK")
        function validateForm()
        {
            var x=document.F1.txtFirstName.value;
            var y=document.F1.txtMiddleName.value;
            var z=document.F1.txtLastName.value;
            var a=document.F1.txtAddress.value;
            var p=document.F1.Password.value;
            var n=document.F1.Pincode.value;
            if(x==null||x=="")
            {
                alert("Please enter the First Name");
                document.F1.txtFirstName.focus();
                return false;
            }

            if(y==null||y=="")
            {
                alert("Please enter the Middle Name");
                document.F1.txtMiddleName.focus();
                return false;
            }

            if(z==null||z=="")
            {
                alert("Please enter the Last Name");
                document.F1.txtLastName.focus();
                return false;
            }

            if(a==null||a=="")
            {
                alert("Please enter the Address");
                document.F1.txtAddress.focus();
                return false;
            }

            if(p==null||p=="")
            {
                alert("Please enter the Password");
                document.F1.Password.focus();
                return false;
            }

            if(n==""||isNaN(n)||n.length>6||n.length<6)
            {
                alert("Please Enter Pincode Properly");
                document.F1.Pincode.focus();
                return false;
            }

            if((document.F1.Gender[0].checked==false)&&(document.F1.Gender[1].checked==false))
            {
                alert("Please Choose Your Gender");
                document.F1.Gender[0].focus();
                return false;
            }
        }