var numberOfFaces = 5;
      var theLeftSide = document.getElementById("leftSide");
      var theRightSide = document.getElementById("rightSide");
      var score = 0;

      function generateFaces() {

          for (var i = 0; i < numberOfFaces; i++) {
            var smiley = document.createElement("img");
            smiley.setAttribute("src","http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png");
            smiley.style.position = "absolute";
            var topPos = Math.floor(Math.random() * (theLeftSide.clientHeight - 100));

            var leftPos = Math.floor(Math.random() * (theLeftSide.clientWidth - 100));

            smiley.style.top = topPos + "px";
            smiley.style.left = leftPos + "px";

            theLeftSide.appendChild(smiley);
            leftSideImages = theLeftSide.cloneNode(true);
            leftSideImages.removeChild(leftSideImages.lastChild);
            theRightSide.appendChild(leftSideImages);
          }
          var theBody = document.getElementsByTagName("body")[0];
          theLeftSide.lastChild.onclick = function nextLevel(event) {
            score++;
            event.stopPropagation();
            while (theLeftSide.firstChild) {
              theLeftSide.removeChild(theLeftSide.firstChild);
            }
            while (theRightSide.firstChild) {
              theRightSide.removeChild(theRightSide.firstChild);
            }
            numberOfFaces += 5;
            generateFaces();
          };
          theBody.onclick = function gameOver() {
            alert("Game Over!\n\n"+
              "Your Score is ==> "+score);
            theBody.onclick = null;
            theLeftSide.lastChild.onclick = null;
          };
      }