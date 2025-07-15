

    var over= document.querySelector(".overlay");
    var pop = document.querySelector(".popup");
    var addpopup = document.getElementById("add-popup");

    addpopup.addEventListener("click", function() {
        over.style.display = "block";
        pop.style.display = "block";
    });
    var cancel=document.getElementById("cancel-book")
      cancel.addEventListener("click",function(event){
        event.preventDefault()
        over.style.display = "none";
        pop.style.display = "none";
      })
      //book-title-input book-author book-description add-book
      var container=document.querySelector(".container")
      var  addbook=document.getElementById("add-book")
      var booktitle=document.getElementById("book-title-input")
      var bookauthor=document.getElementById("book-author")
      var bookdesc=document.getElementById("book-description")
     
      addbook.addEventListener("click",function(event){       event.preventDefault()
          var div=document.createElement("div")
          div.setAttribute("class","book-container")
          div.innerHTML=`<h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${bookdesc.value}</p>
        <button onclick="del(event)">Delete</button>`
          container.append(div)
         
         
      
          // Optionally hide the popup after adding a book
          over.style.display = "none";
          pop.style.display = "none";
      })
      function del(event){
        event.target.parentElement.remove();
      }
      
