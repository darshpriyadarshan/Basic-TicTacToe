
var a=[[0,0,0],[0,0,0],[0,0,0]];
a[0][0]=document.getElementById("a00");
a[0][1]=document.getElementById("a01");
a[0][2]=document.getElementById("a02");
a[1][0]=document.getElementById("a10");
a[1][1]=document.getElementById("a11");
a[1][2]=document.getElementById("a12");
a[2][0]=document.getElementById("a20");
a[2][1]=document.getElementById("a21");
a[2][2]=document.getElementById("a22");
var div=document.querySelector("div");
//var reset=document.querySelector("span");
var gokubutton=document.getElementById("gokubutton")
var vegetabutton=document.getElementById("vegetabutton")
var body=document.getElementById("body");
var tobeclickedby=null;
var h1=document.getElementById("h1");
var k=0;
var c=[[0,0,0],[0,0,0],[0,0,0]];
var o=0;


gokubutton.addEventListener("click",function()
{
   div.textContent="Goku Begins"
   body.style.background="red";
   tobeclickedby="Goku";
   //tobeclicked();

});
vegetabutton.addEventListener("click",function()
{
    div.textContent="Vegeta Begins" 
    body.style.background="blue";
    tobeclickedby="Vegeta";
    //tobeclicked();
});

	
        a[0][0].addEventListener("click",function()
		{
			if(k===0&&c[0][0]===0)
         {
         	o++;
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
           div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           check();
           c[0][0]=1;
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
            div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[0][0]=1;
            check();
            return;
          }
        }

    	});
           

        a[0][1].addEventListener("click",function()
		{
			if(k===0&&c[0][1]===0)
         {
         	o++;
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
           div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           c[0][1]=1;
           check();
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
           div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[0][1]=1;
            check();
            return;
          }

         }

    	});


        a[0][2].addEventListener("click",function()
		{
			if(k===0&&c[0][2]===0)
			{
				o++;
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
          div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           c[0][2]=1;
           check();
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
            div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[0][2]=1;
            check();
            return;
          }
      }
           
    	});

        a[1][0].addEventListener("click",function()
		{
			o++;
			if(k===0&&c[1][0]===0)
			{
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
           div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           c[1][0]=1;
           check();
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
            div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[1][0]=1;
            check();
            return;
          }
        }
           
    	});

        a[1][1].addEventListener("click",function()
		{
			o++;
			if(k===0&&c[1][1]===0)
			{
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
          div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           c[1][1]=1;
           check();
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
            div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[1][1]=1;
            check();
            return;
          }
      }
           
    	});

        a[1][2].addEventListener("click",function()
		{
			o++;
			if(k===0&&c[1][2]===0)
			{
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
           div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           c[1][2]=1;
           check();
          return; 
      }
          else
          {
            this.textContent="O";
            this.style.color="blue";
            div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[1][2]=1;
            check();
            return;
          }
      }
           
    	});


        a[2][0].addEventListener("click",function()
		{
			o++;
			if(k===0&&c[2][0]===0)
			{
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
          div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           c[2][0]=1;
           check();
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
            div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[2][0]=1;
            check();
            return;
          }
           
           }
    	});

        a[2][1].addEventListener("click",function()
		{
			o++;
			if(k===0&&c[2][1]===0)
			{
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
         div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
          c[2][1]=1;
           check();
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
            div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[2][1]=1;
            check();
            return;
          }
      }
           
    	});

        a[2][2].addEventListener("click",function()
		{
			o++;
			if(k===0&&c[2][2]===0)
			{
			if (tobeclickedby==="Goku") 
          {
           this.textContent="X";
           this.style.color="red";
           div.textContent="Vegeta's turn";
           body.style.background="blue";
           tobeclickedby="Vegeta";
           c[2][2]=1;
           check();
           return;
          }
          else
          {
            this.textContent="O";
            this.style.color="blue";
          div.textContent="Goku's turn";
            body.style.background="red";
            tobeclickedby="Goku";
            c[2][2]=1;
            check();
            return;
          }
           
           }
    	});

        function check()
        {
    	if((a[0][0].textContent==="X"&&a[0][1].textContent==="X"&&a[0][2].textContent==="X")||(a[1][0].textContent==="X"&&a[1][1].textContent==="X"&&a[1][2].textContent==="X")||(a[2][0].textContent==="X"&&a[2][1].textContent==="X"&&a[2][2].textContent==="X")||(a[0][0].textContent==="X"&&a[1][0].textContent==="X"&&a[2][0].textContent==="X")||(a[0][1].textContent==="X"&&a[1][1].textContent==="X"&&a[2][1].textContent==="X")||(a[0][2].textContent==="X"&&a[1][2].textContent==="X"&&a[2][2].textContent==="X")||(a[0][0].textContent==="X"&&a[1][1].textContent==="X"&&a[2][2].textContent==="X")||(a[0][2].textContent==="X"&&a[1][1].textContent==="X"&&a[2][0].textContent==="X"))
    		{
    			
    			div.textContent=" ";
    			h1.textContent="Goku Wins";
    			 body.style.background="red";
                k=1;
               /* reset.addEventListener("click",function()
                {
                  h1.textContent="Tic-Tac-Toe";
                  div.textContent=divi;


                });*/
            }

         if((a[0][0].textContent==="O"&&a[0][1].textContent==="O"&&a[0][2].textContent==="O")||(a[1][0].textContent==="O"&&a[1][1].textContent==="O"&&a[1][2].textContent==="O")||(a[2][0].textContent==="O"&&a[2][1].textContent==="O"&&a[2][2].textContent==="O")||(a[0][0].textContent==="O"&&a[1][0].textContent==="O"&&a[2][0].textContent==="O")||(a[0][1].textContent==="O"&&a[1][1].textContent==="O"&&a[2][1].textContent==="O")||(a[0][2].textContent==="O"&&a[1][2].textContent==="O"&&a[2][2].textContent==="O")||(a[0][0].textContent==="O"&&a[1][1].textContent==="O"&&a[2][2].textContent==="O")||(a[0][2].textContent==="O"&&a[1][1].textContent==="O"&&a[2][0].textContent==="O"))
    		{
    			
    			div.textContent=" ";
    			h1.textContent="Vegeta Wins";
    			 body.style.background="blue";
                k=1;
            }
            if(o===9&&k!=1)
            {
            		div.textContent=" ";
    			h1.textContent="TIE";
    			 body.style.background="white";
            }

        }
/*function tobeclicked()
{
    if(tobeclickedby==="Goku")
  {
	for (var i=0,x=0; i<3; i++) 
	{
	for (var j=0; j<3; j++) 
		{
		( function()
			{

               	a[i][j].addEventListener("click",function()
			{
              this.textContent="X";
            this.style.color="red";
          div.textContent="Goku clicked";
          tobeclickedby="Vegeta";
           x=1;
	});
			if(x===1)
				return;
			
			}()	);
		
         }
     }
	    
   }

      else if(tobeclickedby==="Vegeta")
   {
        for (var i=0; i<3; i++) 
	  {
		for (var j=0; j<3; j++) 
	    {
		a[i][j].addEventListener("click",function()
		{
             this.textContent="O";
                this.style.color="blue";
                div.textContent="Vegeta clicked";
                tobeclickedby="Goku";
                return;
			});
	    }

	  }

    }

}*/
