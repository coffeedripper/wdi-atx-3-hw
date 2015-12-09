var q1 = prompt("I hear you are having trouble deciding what pants to wear the party. Would you like some help?")

 if (q1 === "yes") {
     alert("Let's get started!");
     var q2 = prompt("You're not MC Hammer, are you? a: yes b: no");
     if (q2 === "a") {
     alert("Parachute pants, duh!");
   }
     else if (q2 === "b") {
     var q3 = prompt("OK, well do you rock? a: yes b: no");
     if (q3 === "a") {
       var q4 = prompt("What is most important to you? a: The plight of the working man. b: Living fast and dying young.");
       if (q4 === "a") {
         alert("Wear jeans, preferably with torn knees and tight in the crotch area.");
      }
       else if (q4 === "b") {
        alert("Wear leather pants, snakeskin would also be an appropriate choice.");
        }

     }

     else if (q3 === "b") {
     var q5 = prompt ("Are you per chance the chief magistrate of 15th century Venice aka the Doge di Venezia? a: yes b: no");
        if (q5 === "a") {
            alert("Ah, then may I suggest some very puffy breeches made of the finest slik!");
            }
        else {
            alert("You know what, just wear tan Dockers. You'll be fine....");
        }
     }
 }
 }












