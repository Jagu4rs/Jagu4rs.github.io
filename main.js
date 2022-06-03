
const cookieContainer = document.querySelector(".cookie-container");
const AcceptCookies = document.querySelector(".Accept-btn");
const Customise = document.querySelector(".Customise-btn");
const GearButton = document.querySelector(".GearButton");
const modal_container = document.getElementById('modal_container');
const additional_modal_container = document.getElementById('modal_container2');
const Functional = document.getElementsByClassName("DropdownN2");
const Accept_selected = document.getElementById('Accept_selected');
const Accept_all = document.getElementById('Accept_all');
const close_main_modal = document.querySelector(".close-button");
const close_additional_modal = document.querySelector(".close-button2");
const accordionTitles = document.querySelectorAll(".accordion");
const additional_modal_savebtn = document.getElementById('additional_modal_savebtn');
const Disable_all_btn = document.querySelector(".Disable_all_btn");
const Clear_local_storage = document.querySelector(".Clear_local_storage");
const switch_state = document.getElementById('switch_state');








if (document.body.clientWidth < 1982) {
  viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=device-width, initial-scale=0.67, user-scalable=0');
}



if (!localStorage.getItem("Necessary")){
localStorage.setItem("CookieBannerNotAccepted", "True")
}
Clear_local_storage.addEventListener("click", () =>{
  window.localStorage.clear()
});

AcceptCookies.addEventListener("click", () =>{
  // Storing all cookies with the value "ON" if Accept cookies button (from the Cookie contanier at the bottom) is clicked.
  localStorage.setItem("Necessary", "ON")
  localStorage.setItem("Functional", "ON")
  localStorage.setItem("Analytics", "ON")
  localStorage.setItem("Marketing", "ON")
  localStorage.setItem("Personalisation", "ON")
  localStorage.setItem("Personalisation", "ON")
  localStorage.setItem("Functional Cookie #1", "ON")
  localStorage.setItem("Functional Cookie #2", "ON")
  localStorage.setItem("Functional Cookie #3", "ON")
  localStorage.setItem("Functional Cookie #4", "ON")
  localStorage.setItem("Functional Cookie #5", "ON")
cookieContainer.classList.remove("active");
localStorage.setItem("CookieBannerAccepted", "True")
localStorage.removeItem("CookieBannerNotAccepted", "True")
// code to change the position of all toggle switches to "ON" position if Accept all button is clicked.
document.getElementById("switch2").checked = true;
document.getElementById("switch3").checked = true;
document.getElementById("switch4").checked = true;
document.getElementById("switch5").checked = true;
document.getElementById("switch6").checked = true;
document.getElementById("switch7").checked = true;
document.getElementById("switch8").checked = true;
document.getElementById("switch9").checked = true;
document.getElementById("switch10").checked = true;
document.body.style.overflow = 'visible';
// Code to change background color of the indicator
switch_state.style.color = "#56c939";
switch_state.style.transitionDuration = "0.5s";
localStorage.setItem("Functional Cookies Indicator Green", "ON")
});

Customise.addEventListener('click', () => {
    cookieContainer.classList.remove("active");
    modal_container.classList.add('show');
    document.body.style.overflow = 'hidden';
    localStorage.setItem("CookieBannerNotAccepted", "True")
    localStorage.removeItem("CookieBannerAccepted", "True")
    
  
    });

    Accept_selected.addEventListener('click', () => {
      modal_container.classList.remove('show');
      document.body.style.overflow = 'visible';
      localStorage.setItem("Additional Modal", "InActive");
      localStorage.setItem("Necessary", "ON");
      localStorage.setItem("CookieBannerAccepted", "True")
      localStorage.removeItem("CookieBannerNotAccepted", "True")
      //(START)code to close all open accordions on click including additional modal
      additional_modal_container.classList.remove("show")
      accordion[0].classList.remove("active");
    accordion[1].classList.remove("active");
    accordion[2].classList.remove("active");
    accordion[3].classList.remove("active");
    accordion[4].classList.remove("active");
    accordion2[0].classList.remove("active");
    accordion2[1].classList.remove("active");
    accordion2[2].classList.remove("active");
    accordion2[3].classList.remove("active");
    accordion2[4].classList.remove("active");
    //(END)code to close all open accordions on click including additional modal
      // Condition to get the toggle switch postion and store the right position of the toggle switch to a local storage and delete if accepted first and then rejected
      if (document.getElementById("switch2").checked) {
        localStorage.setItem("Functional", "ON");
    } else {
      localStorage.removeItem("Functional");
    }
    if (document.getElementById("switch6").checked) {
      localStorage.setItem("Functional Cookie #1", "ON");
      localStorage.setItem("Functional", "ON");
    } else {
      localStorage.removeItem("Functional Cookie #1");
    }
    if (document.getElementById("switch7").checked) {
      localStorage.setItem("Functional Cookie #2", "ON");
      localStorage.setItem("Functional", "ON");
    } else {
      localStorage.removeItem("Functional Cookie #2");
    }
    if (document.getElementById("switch8").checked) {
      localStorage.setItem("Functional Cookie #3", "ON");
      localStorage.setItem("Functional", "ON");
    } else {
      localStorage.removeItem("Functional Cookie #3");
    }
    if (document.getElementById("switch9").checked) {
      localStorage.setItem("Functional Cookie #4", "ON");
      localStorage.setItem("Functional", "ON");
    } else {
      localStorage.removeItem("Functional Cookie #4");
    }
    if (document.getElementById("switch10").checked) {
      localStorage.setItem("Functional Cookie #5", "ON");
      localStorage.setItem("Functional", "ON");
    } else {
      localStorage.removeItem("Functional Cookie #5");
    }
      if (document.getElementById("switch3").checked) {
      localStorage.setItem("Analytics", "ON");
    } else {
    localStorage.removeItem("Analytics");
    }
      if (document.getElementById("switch4").checked) {
    localStorage.setItem("Marketing", "ON");
    } else {
    localStorage.removeItem("Marketing");
    } 
      if (document.getElementById("switch5").checked) {
    localStorage.setItem("Personalisation", "ON");
    } else {
    localStorage.removeItem("Personalisation");
    }
      });


    Accept_all.addEventListener('click', () =>   {
    modal_container.classList.remove("show");
    localStorage.removeItem("CookieBannerNotAccepted", "True")
    document.body.style.overflow = 'visible';
    localStorage.setItem("Additional Modal", "InActive");
    // Storing all cookies with the value "ON" if Accept all button is clicked.
    localStorage.setItem("Necessary", "ON")
     localStorage.setItem("Functional", "ON")
     localStorage.setItem("Analytics", "ON")
     localStorage.setItem("Marketing", "ON")
     localStorage.setItem("Personalisation", "ON")
     localStorage.setItem("Functional Cookie #1", "ON")
     localStorage.setItem("Functional Cookie #2", "ON")
     localStorage.setItem("Functional Cookie #3", "ON")
     localStorage.setItem("Functional Cookie #4", "ON")
     localStorage.setItem("Functional Cookie #5", "ON")
    //storing the "CookieBannerAccepted" with the "true" value so that the Cookie container will not show up again after page is refreshed.
     
    cookieContainer.classList.remove("active");
    localStorage.setItem("CookieBannerAccepted", "True")
    
    // code to change the position of all toggle switches to "ON" position if Accept all button is clicked.
    document.getElementById("switch2").checked = true;
    document.getElementById("switch3").checked = true;
    document.getElementById("switch4").checked = true;
    document.getElementById("switch5").checked = true;
    document.getElementById("switch6").checked = true;
    document.getElementById("switch7").checked = true;
    document.getElementById("switch8").checked = true;
    document.getElementById("switch9").checked = true;
    document.getElementById("switch10").checked = true;
    //(START)code to close all open accordions on click including additional modal
    additional_modal_container.classList.remove("show")
    accordion[0].classList.remove("active");
    accordion[1].classList.remove("active");
    accordion[2].classList.remove("active");
    accordion[3].classList.remove("active");
    accordion[4].classList.remove("active");
    accordion2[0].classList.remove("active");
    accordion2[1].classList.remove("active");
    accordion2[2].classList.remove("active");
    accordion2[3].classList.remove("active");
    accordion2[4].classList.remove("active");
    //(END)code to close all open accordions on click including additional modal
    switch_state.style.color = "#56c939";
    switch_state.style.transitionDuration = "0.5s";
    localStorage.setItem("Functional Cookies Indicator Green", "ON")
    localStorage.removeItem("Functional Cookies Indicator Gray")
    localStorage.removeItem("Functional Cookies Indicator Orange")
});



GearButton.addEventListener('click', () => {
    
    modal_container.classList.add('show');
    document.body.style.overflow = 'hidden';
    
    
    });

  
    //Code to remember the toggle switch position so that it stays in the same state even after pager refresh.
    if(localStorage.getItem("Functional"))
    document.getElementById("switch2").checked = true;
    if(localStorage.getItem("Analytics"))
    document.getElementById("switch3").checked = true;
    if(localStorage.getItem("Marketing"))
    document.getElementById("switch4").checked = true;
    if(localStorage.getItem("Personalisation"))
    document.getElementById("switch5").checked = true;

    if(localStorage.getItem("Functional Cookie #1"))
    document.getElementById("switch6").checked = true;
    if(localStorage.getItem("Functional Cookie #2"))
    document.getElementById("switch7").checked = true;
    if(localStorage.getItem("Functional Cookie #3"))
    document.getElementById("switch8").checked = true;
    if(localStorage.getItem("Functional Cookie #4"))
    document.getElementById("switch9").checked = true;
    if(localStorage.getItem("Functional Cookie #5"))
    document.getElementById("switch10").checked = true;

    

      //START Code for the Functional to drop down and open additional pop-up
      let accordion = document.getElementsByClassName('accordion');
      let accordion2 = document.getElementsByClassName('accordion2'); 
      localStorage.setItem("Additional Modal", "InActive")
       
        
         
          accordion[1].addEventListener("click", () => { 
          if (!accordion[1].classList.contains("active")) {
            additional_modal_container.classList.add('show');
            localStorage.setItem("Additional Modal", "Active")
            
          } 
          else {
            additional_modal_container.classList.remove('show');
            localStorage.setItem("Additional Modal", "InActive")
            accordion2[0].classList.remove("active");
            accordion2[1].classList.remove("active");
            accordion2[2].classList.remove("active");
            accordion2[3].classList.remove("active");
            accordion2[4].classList.remove("active");
            
          }
        });
//END Code for the Functional to drop down and open additional pop-up

          //START Code for the all accordions besides Functional to close the additional modal on click
         
         
          for (var i = 0; i < accordion.length; i++) {  
            accordion[0].addEventListener('click',function(){ 
               if (localStorage.getItem("Additional Modal")){
                additional_modal_container.classList.remove('show');
                localStorage.setItem("Additional Modal", "InActive");
               }
               document.body.style.overflow = 'hidden';
              });
             }  

             for (var i = 2; i < accordion.length; i++) {  
              accordion[2].addEventListener('click',function(){ 
                 if (localStorage.getItem("Additional Modal")){
                  additional_modal_container.classList.remove('show');
                  localStorage.setItem("Additional Modal", "InActive");
                 }
                 document.body.style.overflow = 'hidden';
                });
               }  
  
               for (var i = 3; i < accordion.length; i++) {  
                accordion[3].addEventListener('click',function(){ 
                   if (localStorage.getItem("Additional Modal")){
                    additional_modal_container.classList.remove('show');
                    localStorage.setItem("Additional Modal", "InActive");
                   }
                   document.body.style.overflow = 'hidden';
                  });
                 }  
    
                 for (var i = 4; i < accordion.length; i++) {  
                  accordion[4].addEventListener('click',function(){ 
                     if (localStorage.getItem("Additional Modal")){
                      additional_modal_container.classList.remove('show');
                      localStorage.setItem("Additional Modal", "InActive");
                     }
                     document.body.style.overflow = 'hidden';
                    });
                   }  
      
                  
         //END Code for the all accordions besides Functional to close the additional modal on click



 //Start Code for main accordion to drop down
        for (var i = 0; i < accordion.length; i++) { 
           accordion[i].addEventListener('click',function(){
            this.classList.toggle("active");  
             document.body.style.overflow = 'hidden';
             

              });
            }
     //END Code for main accordion to drop down     
            
//Start Code for main accordion to only allow 1 extended accordion at the same time.(If 1 is open, and 2 is clicked, 2 will open, and 1 will close)   
            

            accordionTitles.forEach((accordion) => {
                accordion.addEventListener("click", () => {
                  accordion.classList.toggle("active");  
                if (accordion.classList.contains("active")) {
                    accordion.classList.remove("active");
                } else {
                  const accordionTitlesWithActive = document.querySelectorAll(".active");
                  accordionTitlesWithActive.forEach((accordionTitleWithActive) => {
                    accordionTitleWithActive.classList.remove("active");
                  });
                  accordion.classList.add("active");
                  
                }
              });
            });

           
      
      //Code for the accordion2 to drop-down
       
      for (var i = 0; i < accordion2.length; i++) {  
           accordion2[i].addEventListener('click',function(){
            this.classList.toggle('active');   
          })  
        }

        //Start Code for the additional accordion to only allow 1 extended accordion at the same time.(If 1 is open, and 2 is clicked, 2 will open, and 1 will close)   
const accordionTitles2 = document.querySelectorAll(".accordion2");

accordionTitles2.forEach((accordion2) => {
    accordion2.addEventListener("click", () => {
      accordion2.classList.toggle("active");  
    if (accordion2.classList.contains("active")) {
        accordion2.classList.remove("active");
         
        
    } 
    else {
      const accordionTitlesWithActive2 = document.querySelectorAll(".active");
      accordionTitlesWithActive2.forEach((accordionTitleWithActive2) => {
        accordionTitleWithActive2.classList.remove("active");
        
      });
      accordion2.classList.add("active");
      accordion[1].classList.add("active");
      
    }
  });
});
//END Code for the additional accordion to only allow 1 extended accordion at the same time.(If 1 is open, and 2 is clicked, 2 will open, and 1 will close)


//(START) CODE TO STOP ACCORDION BUBBLING WHEN DISABLED SWITCH IS PRESSED!!!  
      let MyBTN2 = document.getElementsByClassName('Disabled_Button');  
    for (var i = 0; i < MyBTN2.length; i++) {  
         MyBTN2[i].addEventListener('click',function(){
          this.classList.toggle('active');  
          event.stopPropagation(); 
        })  
      }  
//(END) CODE TO STOP ACCORDION BUBBLING WHEN DISABLED SWITCH IS PRESSED!!!



//(START) CODE TO STOP switches in the main modal from BUBBLING. PROBLEM: if 1 of the accordions is extended, and the toggle switch from another accordion is toggled, the extended accordiong would minimise by itself.
      let switch_bubbling2 = document.getElementsByClassName('switch_bubbling2');  
      for (var i = 0; i < switch_bubbling2.length; i++) {  
        switch_bubbling2[i].addEventListener('click',function(){
            this.classList.toggle('active');  
            event.stopPropagation(); 
          })  
        }  
//(END) CODE TO STOP switches in the main modal from BUBBLING. PROBLEM: if 1 of the accordions is extended, and the toggle switch from another accordion is toggled, the extended accordiong would minimise by itself.
      


//(START) CODE TO STOP switches in the additional modal from BUBBLING. PROBLEM: if 1 of the accordions is extended, and the toggle switch from another accordion is toggled, the extended accordiong would minimise by itself.
      let switch_bubbling6 = document.getElementsByClassName('switch_bubbling6');  
      for (var i = 0; i < switch_bubbling6.length; i++) {  
        switch_bubbling6[i].addEventListener('click',function(){
            this.classList.toggle('active');  
            event.stopPropagation(); 
          })  
        }  
//(END) CODE TO STOP switches in the additional modal from BUBBLING. PROBLEM: if 1 of the accordions is extended, and the toggle switch from another accordion is toggled, the extended accordiong would minimise by itself.




//(START) CODE TO STOP Functional toggle switch BUBBLING WHEN IT IS PRESSED!!!
      let MyBTN3 = document.getElementsByClassName('switch_functional');  
    for (var i = 0; i < MyBTN3.length; i++) {  
         MyBTN3[i].addEventListener('click',function(){
          this.classList.toggle('active');  
          event.stopPropagation(); 
        })  
      }  



//(END) Code to make the background color of the main page dark, if no action was made with the Cookie banner from the bottom(if "CookieBannerAccepted" key is not stored in the local storage)

//(START) Code to show cookie banner(from the bottom) if "CookieBannerAccepted" is not stored in Local storage + darkening the body
setTimeout(() => {
    
  if(!localStorage.getItem("CookieBannerAccepted"))
  cookieContainer.classList.add("active");

}, 200);
 


// Code to turn all switches in additional modal section on or off if switch responsible for "Functional" is toggled

  switch2.addEventListener('change',function(){
      if(this.checked) {
          document.getElementById("switch6").checked = true;
          document.getElementById("switch7").checked = true;
          document.getElementById("switch8").checked = true;
          document.getElementById("switch9").checked = true;
          document.getElementById("switch10").checked = true;
          switch_state.style.color = "#56c939";
          switch_state.style.transitionDuration = "0.5s";
          localStorage.setItem("Functional Cookies Indicator Green", "ON")
          localStorage.removeItem("Functional Cookies Indicator Gray")
          localStorage.removeItem("Functional Cookies Indicator Orange")

              
            } 
            
      else {
          document.getElementById("switch6").checked = false;
          document.getElementById("switch7").checked = false;
          document.getElementById("switch8").checked = false;
          document.getElementById("switch9").checked = false;
          document.getElementById("switch10").checked = false;
          switch_state.style.color = "rgb(116, 116, 116)";
          switch_state.style.transitionDuration = "0.5s";
          localStorage.setItem("Functional Cookies Indicator Gray","ON")
          localStorage.removeItem("Functional Cookies Indicator Green")
          localStorage.removeItem("Functional Cookies Indicator Orange")
            }
        });


   // (Start) Code for the Functional Cookies Indicator and storage of the current state of an Indicator   
        switch6.addEventListener('change',function(){
          if(this.checked &&
           
            document.getElementById("switch7").checked == true &&
            document.getElementById("switch8").checked == true &&
            document.getElementById("switch9").checked == true &&
            document.getElementById("switch10").checked == true ) {
             
              switch_state.style.color = "#56c939";
              switch_state.style.transitionDuration = "0.5s";
              localStorage.setItem("Functional Cookies Indicator Green","ON")
              localStorage.removeItem("Functional Cookies Indicator Gray")
              localStorage.removeItem("Functional Cookies Indicator Orange")
                }
               
                else if(!this.checked &&
           
            document.getElementById("switch7").checked == false &&
            document.getElementById("switch8").checked == false &&
            document.getElementById("switch9").checked == false &&
            document.getElementById("switch10").checked == false ) {
             
              switch_state.style.color = "#56c939";
              switch_state.style.transitionDuration = "0.5s";
              localStorage.setItem("Functional Cookies Indicator Gray","ON")
              localStorage.removeItem("Functional Cookies Indicator Green")
              localStorage.removeItem("Functional Cookies Indicator Orange")
            }
            
                else if (this.checked)
                { switch_state.style.color = "orange";
                switch_state.style.transitionDuration = "0.5s";
                localStorage.setItem("Functional Cookies Indicator Orange","ON")
                localStorage.removeItem("Functional Cookies Indicator Gray")
                localStorage.removeItem("Functional Cookies Indicator Green")
              } 
                
                else if (!this.checked)
                { switch_state.style.color = "orange";
                  switch_state.style.transitionDuration = "0.5s";
                  localStorage.setItem("Functional Cookies Indicator Orange","ON")
                  localStorage.removeItem("Functional Cookies Indicator Green") 
                  localStorage.removeItem("Functional Cookies Indicator Gray")}
            });
                switch7.addEventListener('change',function(){
                  if(this.checked &&
                    document.getElementById("switch6").checked == true &&
                    
                    document.getElementById("switch8").checked == true &&
                    document.getElementById("switch9").checked == true &&
                    document.getElementById("switch10").checked == true ) {
                     
                      switch_state.style.color = "#56c939";
                      switch_state.style.transitionDuration = "0.5s";
                      localStorage.setItem("Functional Cookies Indicator Green","ON")
                      localStorage.removeItem("Functional Cookies Indicator Gray")
                      localStorage.removeItem("Functional Cookies Indicator Orange")
                        }
                        else if(!this.checked &&
           
                          document.getElementById("switch6").checked == false &&
                          document.getElementById("switch8").checked == false &&
                          document.getElementById("switch9").checked == false &&
                          document.getElementById("switch10").checked == false ) {
                           
                            switch_state.style.color = "#56c939";
                            switch_state.style.transitionDuration = "0.5s";
                            localStorage.setItem("Functional Cookies Indicator Gray","ON")
                            localStorage.removeItem("Functional Cookies Indicator Green")
                            localStorage.removeItem("Functional Cookies Indicator Orange")
                          }
                        else if (this.checked)
                       { switch_state.style.color = "orange";
                         switch_state.style.transitionDuration = "0.5s";
                         localStorage.setItem("Functional Cookies Indicator Orange","ON")
                         localStorage.removeItem("Functional Cookies Indicator Gray")
                         localStorage.removeItem("Functional Cookies Indicator Green")}  
                        else if (!this.checked)
                        { switch_state.style.color = "orange";
                         switch_state.style.transitionDuration = "0.5s";
                         localStorage.setItem("Functional Cookies Indicator Orange","ON")
                         localStorage.removeItem("Functional Cookies Indicator Gray")
                         localStorage.removeItem("Functional Cookies Indicator Green")} 
                       });
                      
                      
                       switch8.addEventListener('change',function(){
                          if(this.checked &&
                            document.getElementById("switch6").checked == true &&
                            document.getElementById("switch7").checked == true &&
                           
                            document.getElementById("switch9").checked == true &&
                            document.getElementById("switch10").checked == true ) {
                             
                              switch_state.style.color = "#56c939";
                              switch_state.style.transitionDuration = "0.5s";
                              localStorage.setItem("Functional Cookies Indicator Green","ON")
                              localStorage.removeItem("Functional Cookies Indicator Gray")
                              localStorage.removeItem("Functional Cookies Indicator Orange")
                                }
                                else if(!this.checked &&
           
                                  document.getElementById("switch7").checked == false &&
                                  document.getElementById("switch6").checked == false &&
                                  document.getElementById("switch9").checked == false &&
                                  document.getElementById("switch10").checked == false ) {
                                   
                                    switch_state.style.color = "#56c939";
                                    switch_state.style.transitionDuration = "0.5s";
                                    localStorage.setItem("Functional Cookies Indicator Gray","ON")
                                    localStorage.removeItem("Functional Cookies Indicator Green")
                                    localStorage.removeItem("Functional Cookies Indicator Orange")
                                  }
                                else if (this.checked)
                                { switch_state.style.color = "orange";
                                switch_state.style.transitionDuration = "0.5s";
                                localStorage.setItem("Functional Cookies Indicator Orange","ON")
                                localStorage.removeItem("Functional Cookies Indicator Gray")
                                localStorage.removeItem("Functional Cookies Indicator Green")} 
                                else if (!this.checked)
                                { switch_state.style.color = "orange";
                                 switch_state.style.transitionDuration = "0.5s";
                                 localStorage.setItem("Functional Cookies Indicator Orange","ON")
                                 localStorage.removeItem("Functional Cookies Indicator Gray")
                                 localStorage.removeItem("Functional Cookies Indicator Green")} 
                               });
                              
                              
                               switch9.addEventListener('change',function(){
                                  if(this.checked &&
                                    document.getElementById("switch6").checked == true &&
                                    document.getElementById("switch7").checked == true &&
                                    document.getElementById("switch8").checked == true &&
                                    
                                    document.getElementById("switch10").checked == true ) {
                                     
                                      switch_state.style.color = "#56c939";
                                      switch_state.style.transitionDuration = "0.5s";
                                      localStorage.setItem("Functional Cookies Indicator Green","ON")
                                      localStorage.removeItem("Functional Cookies Indicator Gray")
                                      localStorage.removeItem("Functional Cookies Indicator Orange")
                                        } 
                                        else if(!this.checked &&
           
                                          document.getElementById("switch7").checked == false &&
                                          document.getElementById("switch8").checked == false &&
                                          document.getElementById("switch6").checked == false &&
                                          document.getElementById("switch10").checked == false ) {
                                           
                                            switch_state.style.color = "#56c939";
                                            switch_state.style.transitionDuration = "0.5s";
                                            localStorage.setItem("Functional Cookies Indicator Gray","ON")
                                            localStorage.removeItem("Functional Cookies Indicator Green")
                                            localStorage.removeItem("Functional Cookies Indicator Orange")
                                          }
                                        else if (this.checked)
                                       { switch_state.style.color = "orange";
                                        switch_state.style.transitionDuration = "0.5s";
                                        localStorage.setItem("Functional Cookies Indicator Orange","ON")
                                        localStorage.removeItem("Functional Cookies Indicator Gray")
                                        localStorage.removeItem("Functional Cookies Indicator Green")}  
                                        else if (!this.checked)
                                       { switch_state.style.color = "orange";
                                         switch_state.style.transitionDuration = "0.5s";
                                         localStorage.setItem("Functional Cookies Indicator Orange","ON")
                                         localStorage.removeItem("Functional Cookies Indicator Gray")
                                         localStorage.removeItem("Functional Cookies Indicator Green")} 
                                      });
                                      
                                      
                                      switch10.addEventListener('change',function(){
                                          if(this.checked &&
                                            document.getElementById("switch6").checked == true &&
                                            document.getElementById("switch7").checked == true &&
                                            document.getElementById("switch8").checked == true &&
                                            document.getElementById("switch9").checked == true 
                                            ) {
                                             
                                              switch_state.style.color = "#56c939";
                                              switch_state.style.transitionDuration = "0.5s";
                                              localStorage.setItem("Functional Cookies Indicator Green","ON")
                                              localStorage.removeItem("Functional Cookies Indicator Gray")
                                              localStorage.removeItem("Functional Cookies Indicator Orange")
                                                }
                                                else if(!this.checked &&
           
                                                  document.getElementById("switch7").checked == false &&
                                                  document.getElementById("switch8").checked == false &&
                                                  document.getElementById("switch9").checked == false &&
                                                  document.getElementById("switch6").checked == false ) {
                                                   
                                                    switch_state.style.color = "#56c939";
                                                    switch_state.style.transitionDuration = "0.5s";
                                                    localStorage.setItem("Functional Cookies Indicator Gray","ON")
                                                    localStorage.removeItem("Functional Cookies Indicator Green")
                                                    localStorage.removeItem("Functional Cookies Indicator Orange")
                                                  }
                                                 else if (this.checked)
                                                { switch_state.style.color = "orange";
                                                switch_state.style.transitionDuration = "0.5s";
                                                localStorage.setItem("Functional Cookies Indicator Orange","ON")
                                                localStorage.removeItem("Functional Cookies Indicator Gray")
                                                localStorage.removeItem("Functional Cookies Indicator Green")}
                                                 else if (!this.checked)
                                                { switch_state.style.color = "orange";
                                                switch_state.style.transitionDuration = "0.5s";
                                                localStorage.setItem("Functional Cookies Indicator Orange","ON")
                                                localStorage.removeItem("Functional Cookies Indicator Gray")
                                                 localStorage.removeItem("Functional Cookies Indicator Green")} 
                                               });

if (localStorage.getItem("Functional Cookies Indicator Gray")){
  switch_state.style.color = "rgb(116, 116, 116)";
          
}
else if (localStorage.getItem("Functional Cookies Indicator Orange")) {
  switch_state.style.color = "orange";
          
}
else if (localStorage.getItem("Functional Cookies Indicator Green")) {
  switch_state.style.color = "#56c939";
          
}

// (END)Code for the Functional Cookies Indicator and storage of the current state of an Indicator   
          //(START) Code for the top right cross to close additional modal and minimise "Functional" ONLY if it was expanded
         
          close_main_modal.addEventListener('click', () =>   {

          
          additional_modal_container.classList.remove("show");
          modal_container.classList.remove("show");
          !accordion[1].classList.remove("active");
          localStorage.setItem("Additional Modal" , "InActive"); 
          accordion[0].classList.remove("active");
          accordion[1].classList.remove("active");
          accordion[2].classList.remove("active");
          accordion[3].classList.remove("active");
          accordion[4].classList.remove("active");
          accordion2[0].classList.remove("active");
          accordion2[1].classList.remove("active");
          accordion2[2].classList.remove("active");
          accordion2[3].classList.remove("active");
          accordion2[4].classList.remove("active");
          
          if (localStorage.getItem("CookieBannerNotAccepted")){
            modal_container.classList.remove("show");
            cookieContainer.classList.add("active");
            localStorage.setItem("Functional Cookies Indicator Gray","ON")
            document.body.style.overflow = 'visible'; 
            localStorage.removeItem("Functional Cookies Indicator Green")
            localStorage.removeItem("Functional Cookies Indicator Orange")
            switch_state.style.color = "rgb(116, 116, 116)";
            document.getElementById("switch2").checked = false;
            document.getElementById("switch3").checked = false;
            document.getElementById("switch4").checked = false;
            document.getElementById("switch5").checked = false;
            document.getElementById("switch6").checked = false;
            document.getElementById("switch7").checked = false;
            document.getElementById("switch8").checked = false;
            document.getElementById("switch9").checked = false;
            document.getElementById("switch10").checked = false;
            }
            else if (localStorage.getItem("CookieBannerAccepted")){
              modal_container.classList.remove("show");
              document.body.style.overflow = 'visible';
              
            }
            //(START) Code for the toggle-switches and toggle-state indicator to stay in the same states if "Disable_all" is clicked but then not "Confirmed" and just closed instead.
              
              if (localStorage.getItem("Functional")){
                document.getElementById("switch2").checked = true;
              }
              else {document.getElementById("switch2").checked = false;}
              if (localStorage.getItem("Functional Cookie #1")){
                document.getElementById("switch6").checked = true;
              }
              else {document.getElementById("switch6").checked = false;}
              if (localStorage.getItem("Functional Cookie #2")){
                document.getElementById("switch7").checked = true;
              }
              else {document.getElementById("switch7").checked = false;}
              if (localStorage.getItem("Functional Cookie #3")){
                document.getElementById("switch8").checked = true;
              }
              else {document.getElementById("switch8").checked = false;}
              if (localStorage.getItem("Functional Cookie #4")){
                document.getElementById("switch9").checked = true;
              }
              else {document.getElementById("switch9").checked = false;}
              if (localStorage.getItem("Functional Cookie #5")){
                document.getElementById("switch10").checked = true;
              }
              else {document.getElementById("switch10").checked = false;}
              if (localStorage.getItem("Analytics")){
                document.getElementById("switch3").checked = true;
              }
              else {document.getElementById("switch3").checked = false;}
              if (localStorage.getItem("Marketing")){
                document.getElementById("switch4").checked = true;
              }
              else {document.getElementById("switch4").checked = false;}
              if (localStorage.getItem("Personalisation")){
                document.getElementById("switch5").checked = true;
              }
              else {document.getElementById("switch5").checked = false;}


              if(document.getElementById("switch6").checked == true &&
                 document.getElementById("switch7").checked == true &&
                 document.getElementById("switch8").checked == true &&
                 document.getElementById("switch9").checked == true &&
                 document.getElementById("switch10").checked == true 
                ) 
                { switch_state.style.color = "#56c939";
                  switch_state.style.transitionDuration = "0.5s";
                  localStorage.setItem("Functional Cookies Indicator Green","ON")
                  localStorage.removeItem("Functional Cookies Indicator Gray")
                  localStorage.removeItem("Functional Cookies Indicator Orange")}

                  if(document.getElementById("switch6").checked == false ||
                  document.getElementById("switch7").checked == false ||
                  document.getElementById("switch8").checked == false ||
                  document.getElementById("switch9").checked == false ||
                  document.getElementById("switch10").checked == false 
                 ) 
                 { switch_state.style.color = "orange";
                   switch_state.style.transitionDuration = "0.5s";
                   localStorage.setItem("Functional Cookies Indicator Orange","ON")
                   localStorage.removeItem("Functional Cookies Indicator Green")
                   localStorage.removeItem("Functional Cookies Indicator Gray")
                  
                   if(document.getElementById("switch6").checked == false &&
                  document.getElementById("switch7").checked == false &&
                  document.getElementById("switch8").checked == false &&
                  document.getElementById("switch9").checked == false &&
                  document.getElementById("switch10").checked == false ) 
                  {
                    switch_state.style.color = "rgb(116, 116, 116)";
                  switch_state.style.transitionDuration = "0.5s";
                  localStorage.setItem("Functional Cookies Indicator Gray","ON")
                  localStorage.removeItem("Functional Cookies Indicator Green")
                  localStorage.removeItem("Functional Cookies Indicator Orange")
                  }
                  }
              });
   //(END) Code for the toggle-switches and toggle-state indicator to stay in the same states if "Disable_all" is clicked but then not "Confirmed" and just closed instead.


          close_additional_modal.addEventListener('click', () =>   {
            if (accordion[1].classList.contains("active")){
          additional_modal_container.classList.remove("show");
          !accordion[1].classList.remove("active");
          localStorage.setItem("Additional Modal" , "InActive"); 
          document.body.style.overflow = 'visible';
          accordion[0].classList.remove("active");
          accordion[1].classList.remove("active");
          accordion[2].classList.remove("active");
          accordion[3].classList.remove("active");
          accordion[4].classList.remove("active");
          accordion2[0].classList.remove("active");
          accordion2[1].classList.remove("active");
          accordion2[2].classList.remove("active");
          accordion2[3].classList.remove("active");
          accordion2[4].classList.remove("active");
          document.body.style.overflow = 'hidden';
        }
          else {
            additional_modal_container.classList.remove("show");
            accordion[0].classList.remove("active");
            accordion[1].classList.remove("active");
            accordion[2].classList.remove("active");
            accordion[3].classList.remove("active");
            accordion[4].classList.remove("active");
            accordion2[0].classList.remove("active");
            accordion2[1].classList.remove("active");
            accordion2[2].classList.remove("active");
            accordion2[3].classList.remove("active");
            accordion2[4].classList.remove("active");
            document.body.style.overflow = 'hidden';
            
          }
    
      });
    //(END) Code for the top right cross to close additional modal and minimise "Functional" ONLY if it was expanded  

 //Start Code to switch the "Functional" switch on if any of switches inside additional pop-up are clicked. And code to switch off the main switch for "Functional" if all switches from the additional modal are off.
      switch6.addEventListener('change',function(){
        if(this.checked) {
          document.getElementById("switch2").checked = true;
          
          } 
          else if (switch6.checked == false && switch7.checked == false && switch8.checked == false && switch9.checked == false && switch10.checked == false)
          {document.getElementById("switch2").checked = false;
          switch_state.style.color = "rgb(116, 116, 116)";
          switch_state.style.transitionDuration = "0.5s";}
          
    });
    switch7.addEventListener('change',function(){
      if(this.checked) {
        document.getElementById("switch2").checked = true;
        
        } 
        else if (switch6.checked == false && switch7.checked == false && switch8.checked == false && switch9.checked == false && switch10.checked == false)
        {document.getElementById("switch2").checked = false;
        switch_state.style.color = "rgb(116, 116, 116)";
        switch_state.style.transitionDuration = "0.5s";}
  });
  switch8.addEventListener('change',function(){
    if(this.checked) {
      document.getElementById("switch2").checked = true;
     
      } 
      else if (switch6.checked == false && switch7.checked == false && switch8.checked == false && switch9.checked == false && switch10.checked == false)
      {document.getElementById("switch2").checked = false;
      switch_state.style.color = "rgb(116, 116, 116)";
      switch_state.style.transitionDuration = "0.5s";}
});
switch9.addEventListener('change',function(){
  if(this.checked) {
    document.getElementById("switch2").checked = true;
   
    } 
    else if (switch6.checked == false && switch7.checked == false && switch8.checked == false && switch9.checked == false && switch10.checked == false)
    {document.getElementById("switch2").checked = false;
    switch_state.style.color = "rgb(116, 116, 116)";
    switch_state.style.transitionDuration = "0.5s";}
});
switch10.addEventListener('change',function(){
  if(this.checked) {
    document.getElementById("switch2").checked = true;
   
    } 
    else if (switch6.checked == false && switch7.checked == false && switch8.checked == false && switch9.checked == false && switch10.checked == false)
    {document.getElementById("switch2").checked = false;
    switch_state.style.color = "rgb(116, 116, 116)";
    switch_state.style.transitionDuration = "0.5s";}
});
//END Code to switch the "Functional" switch on if any of switches inside additional pop-up are clicked.


Disable_all_btn.addEventListener("click", () =>{
  document.getElementById("switch2").checked = false;
  document.getElementById("switch3").checked = false;
  document.getElementById("switch4").checked = false;
  document.getElementById("switch5").checked = false;
  document.getElementById("switch6").checked = false;
  document.getElementById("switch7").checked = false;
  document.getElementById("switch8").checked = false;
  document.getElementById("switch9").checked = false;
  document.getElementById("switch10").checked = false;
  switch_state.style.color = "rgb(116, 116, 116)";
  switch_state.style.transitionDuration = "0.5s";
  localStorage.setItem("Functional Cookies Indicator Gray", "ON")
    localStorage.removeItem("Functional Cookies Indicator Green")
    localStorage.removeItem("Functional Cookies Indicator Orange")
});



//(START) code to close main modal on click outside and close additional modal with minimising the "Functional" accordion

window.onclick = function(event2) {
if (accordion[1].classList.contains("active")){
  if (event2.target == additional_modal_container) {
    additional_modal_container.classList.remove('show');
    localStorage.setItem("Additional Modal" , "InActive"); 
    !accordion[1].classList.remove("active");
    accordion2[0].classList.remove("active");
    accordion2[1].classList.remove("active");
    accordion2[2].classList.remove("active");
    accordion2[3].classList.remove("active");
    accordion2[4].classList.remove("active");
    }
} 
 if (event2.target == modal_container) {
  if (localStorage.getItem("CookieBannerNotAccepted")) {
    additional_modal_container.classList.remove('show'); 
  modal_container.classList.remove('show');  
   localStorage.setItem("Additional Modal" , "InActive");
  cookieContainer.classList.add("active");
  localStorage.setItem("Functional Cookies Indicator Gray","ON")
  switch_state.style.color = "rgb(116, 116, 116)";
  switch_state.style.transitionDuration = "0.5s";
  localStorage.removeItem("Functional Cookies Indicator Green")
  localStorage.removeItem("Functional Cookies Indicator Orange")
  document.getElementById("switch2").checked = false;
  document.getElementById("switch3").checked = false;
  document.getElementById("switch4").checked = false;
  document.getElementById("switch5").checked = false;
  document.getElementById("switch6").checked = false;
  document.getElementById("switch7").checked = false;
  document.getElementById("switch8").checked = false;
  document.getElementById("switch9").checked = false;
  document.getElementById("switch10").checked = false;
  document.body.style.overflow = 'visible'; 
    accordion[0].classList.remove("active");
    accordion[1].classList.remove("active");
    accordion[2].classList.remove("active");
    accordion[3].classList.remove("active");
    accordion[4].classList.remove("active");
    accordion2[0].classList.remove("active");
    accordion2[1].classList.remove("active");
    accordion2[2].classList.remove("active");
    accordion2[3].classList.remove("active");
    accordion2[4].classList.remove("active");
}
else if (localStorage.getItem("CookieBannerAccepted")) {
  modal_container.classList.remove('show');
  document.body.style.overflow = 'visible'; 
  accordion[0].classList.remove("active");
    accordion[1].classList.remove("active");
    accordion[2].classList.remove("active");
    accordion[3].classList.remove("active");
    accordion[4].classList.remove("active");
    accordion2[0].classList.remove("active");
    accordion2[1].classList.remove("active");
    accordion2[2].classList.remove("active");
    accordion2[3].classList.remove("active");
    accordion2[4].classList.remove("active");
}
//(Start) Code for the toggle-switches and toggle-state indicator to stay in the same states if "Disable_all" is clicked but then not "Confirmed" and just closed instead.
if (localStorage.getItem("Functional")){
  document.getElementById("switch2").checked = true;
}
else {document.getElementById("switch2").checked = false;}
if (localStorage.getItem("Functional Cookie #1")){
  document.getElementById("switch6").checked = true;
}
else {document.getElementById("switch6").checked = false;}
if (localStorage.getItem("Functional Cookie #2")){
  document.getElementById("switch7").checked = true;
}
else {document.getElementById("switch7").checked = false;}
if (localStorage.getItem("Functional Cookie #3")){
  document.getElementById("switch8").checked = true;
}
else {document.getElementById("switch8").checked = false;}
if (localStorage.getItem("Functional Cookie #4")){
  document.getElementById("switch9").checked = true;
}
else {document.getElementById("switch9").checked = false;}
if (localStorage.getItem("Functional Cookie #5")){
  document.getElementById("switch10").checked = true;
}
else {document.getElementById("switch10").checked = false;}
if (localStorage.getItem("Analytics")){
  document.getElementById("switch3").checked = true;
}
else {document.getElementById("switch3").checked = false;}
if (localStorage.getItem("Marketing")){
  document.getElementById("switch4").checked = true;
}
else {document.getElementById("switch4").checked = false;}
if (localStorage.getItem("Personalisation")){
  document.getElementById("switch5").checked = true;
}
else {document.getElementById("switch5").checked = false;}


if(document.getElementById("switch6").checked == true &&
   document.getElementById("switch7").checked == true &&
   document.getElementById("switch8").checked == true &&
   document.getElementById("switch9").checked == true &&
   document.getElementById("switch10").checked == true 
  ) 
  { switch_state.style.color = "#56c939";
    switch_state.style.transitionDuration = "0.5s";
    localStorage.setItem("Functional Cookies Indicator Green","ON")
    localStorage.removeItem("Functional Cookies Indicator Gray")
    localStorage.removeItem("Functional Cookies Indicator Orange")}

    if(document.getElementById("switch6").checked == false ||
    document.getElementById("switch7").checked == false ||
    document.getElementById("switch8").checked == false ||
    document.getElementById("switch9").checked == false ||
    document.getElementById("switch10").checked == false 
   ) 
   { switch_state.style.color = "orange";
     switch_state.style.transitionDuration = "0.5s";
     localStorage.setItem("Functional Cookies Indicator Orange","ON")
     localStorage.removeItem("Functional Cookies Indicator Green")
     localStorage.removeItem("Functional Cookies Indicator Gray")
    
     if(document.getElementById("switch6").checked == false &&
    document.getElementById("switch7").checked == false &&
    document.getElementById("switch8").checked == false &&
    document.getElementById("switch9").checked == false &&
    document.getElementById("switch10").checked == false ) 
    {
      switch_state.style.color = "rgb(116, 116, 116)";
    switch_state.style.transitionDuration = "0.5s";
    localStorage.setItem("Functional Cookies Indicator Gray","ON")
    localStorage.removeItem("Functional Cookies Indicator Green")
    localStorage.removeItem("Functional Cookies Indicator Orange")
    }
    }
    //(END) Code for the toggle-switches and toggle-state indicator to stay in the same states if "Disable_all" is clicked but then not "Confirmed" and just closed instead.
   else {
     modal_container.classList.remove('show')
    
    }

}
}

 //(END) code to close main modal on click outside and close additional modal with minimising the "Functional" accordion

//(START) code to keep the right toggle-switch state indicator color if it was changed, not confirmed and page refreshed.

 if(document.getElementById("switch6").checked == true &&
   document.getElementById("switch7").checked == true &&
   document.getElementById("switch8").checked == true &&
   document.getElementById("switch9").checked == true &&
   document.getElementById("switch10").checked == true 
  ) 
  { switch_state.style.color = "#56c939";
    switch_state.style.transitionDuration = "0.5s";
    localStorage.setItem("Functional Cookies Indicator Green","ON")
    localStorage.removeItem("Functional Cookies Indicator Gray")
    localStorage.removeItem("Functional Cookies Indicator Orange")}

    if(document.getElementById("switch6").checked == false ||
    document.getElementById("switch7").checked == false ||
    document.getElementById("switch8").checked == false ||
    document.getElementById("switch9").checked == false ||
    document.getElementById("switch10").checked == false 
   ) 
   { switch_state.style.color = "orange";
     switch_state.style.transitionDuration = "0.5s";
     localStorage.setItem("Functional Cookies Indicator Orange","ON")
     localStorage.removeItem("Functional Cookies Indicator Green")
     localStorage.removeItem("Functional Cookies Indicator Gray")
}
    
     if(document.getElementById("switch6").checked == false &&
    document.getElementById("switch7").checked == false &&
    document.getElementById("switch8").checked == false &&
    document.getElementById("switch9").checked == false &&
    document.getElementById("switch10").checked == false ) 
    {
      switch_state.style.color = "rgb(116, 116, 116)";
    switch_state.style.transitionDuration = "0.5s";
    localStorage.setItem("Functional Cookies Indicator Gray","ON")
    localStorage.removeItem("Functional Cookies Indicator Green")
    localStorage.removeItem("Functional Cookies Indicator Orange")
    }

    //(END) code to keep the right toggle-switch state indicator color if it was changed, not confirmed and page refreshed.
    