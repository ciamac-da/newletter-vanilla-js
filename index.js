const mediaQueryMobile = window.matchMedia("(max-width: 375px)");
const body = document.querySelector("body");
const section = document.createElement("section");
const div = document.createElement("div");
const label = document.createElement("label");
const input = document.createElement("input");
const button = document.createElement("button");
const span = document.createElement("span");


/*
.########...#######..########..##....##
.##.....##.##.....##.##.....##..##..##.
.##.....##.##.....##.##.....##...####..
.########..##.....##.##.....##....##...
.##.....##.##.....##.##.....##....##...
.##.....##.##.....##.##.....##....##...
.########...#######..########.....##...
*/
body.style.margin = "0";
body.style.height = "100vh";
body.style.boxSizing = "border-box";
body.style.fontFamily = "'Roboto', sans-serif";

/*
.##..........###....########..########.##......
.##.........##.##...##.....##.##.......##......
.##........##...##..##.....##.##.......##......
.##.......##.....##.########..######...##......
.##.......#########.##.....##.##.......##......
.##.......##.....##.##.....##.##.......##......
.########.##.....##.########..########.########
*/
label.style.fontSize = "20px";
label.style.color = "black";
label.style.padding = "60px 0 0 0";
label.style.fontWeight = "bolder";

/*
..######..########..######..########.####..#######..##....##
.##....##.##.......##....##....##.....##..##.....##.###...##
.##.......##.......##..........##.....##..##.....##.####..##
..######..######...##..........##.....##..##.....##.##.##.##
.......##.##.......##..........##.....##..##.....##.##..####
.##....##.##.......##....##....##.....##..##.....##.##...###
..######..########..######.....##....####..#######..##....##
*/
section.style.display = "none";
section.style.background = "gray";
section.style.textAlign = "center";
section.style.width = "100%";
section.style.height = "100%";
section.style.position = "absolute";
section.style.top = "0";
section.style.left = "0";

/*
.########..####.##.....##
.##.....##..##..##.....##
.##.....##..##..##.....##
.##.....##..##..##.....##
.##.....##..##...##...##.
.##.....##..##....##.##..
.########..####....###...
*/
div.style.width = "50%";
div.style.height = "25vw";
div.style.background = "orange";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";
div.style.justifyContent = "space-around";
div.style.position = "relative";
div.style.margin = "50px auto";
div.style.padding = "10px";

/*
.##..........###....########..########.##......
.##.........##.##...##.....##.##.......##......
.##........##...##..##.....##.##.......##......
.##.......##.....##.########..######...##......
.##.......#########.##.....##.##.......##......
.##.......##.....##.##.....##.##.......##......
.########.##.....##.########..########.########
*/
label.textContent = "To stay up-to-date with important releases, Subscribe!";
label.style.fontSize = "20px";
label.style.color = "black";
label.style.padding = "60px 0 0 0";
label.style.fontWeight = "bolder";

/*
.####.##....##.########..##.....##.########
..##..###...##.##.....##.##.....##....##...
..##..####..##.##.....##.##.....##....##...
..##..##.##.##.########..##.....##....##...
..##..##..####.##........##.....##....##...
..##..##...###.##........##.....##....##...
.####.##....##.##.........#######.....##...
*/
input.type = "email";
input.placeholder = "youremail@example.com";
input.style.fontSize = "30px";
input.style.padding = "18px";
input.style.width = "80%";
input.style.textAlign = "center";
input.style.borderRadius = "10px";

/*
.########..##.....##.########.########..#######..##....##
.##.....##.##.....##....##.......##....##.....##.###...##
.##.....##.##.....##....##.......##....##.....##.####..##
.########..##.....##....##.......##....##.....##.##.##.##
.##.....##.##.....##....##.......##....##.....##.##..####
.##.....##.##.....##....##.......##....##.....##.##...###
.########...#######.....##.......##.....#######..##....##
*/
button.textContent = "Submit";
button.style.fontSize = "30px";
button.style.padding = "10px";
button.style.background = "red";
button.style.color = "white";
button.style.fontWeight = "bolder";
button.style.borderRadius = "10px";
button.style.border = "none";
button.style.marginTop = "10px";

/*
..######..########.....###....##....##
.##....##.##.....##...##.##...###...##
.##.......##.....##..##...##..####..##
..######..########..##.....##.##.##.##
.......##.##........#########.##..####
.##....##.##........##.....##.##...###
..######..##........##.....##.##....##
*/
span.textContent = "x";
span.style.position = "absolute";
span.style.top = "18px";
span.style.right = "18px";
span.style.fontSize = "20px";
span.style.fontWeight = "bolder";
span.style.cursor = "pointer"

/*
.##.....##.########.########..####....###........#######..##.....##.########.########..##....##
.###...###.##.......##.....##..##....##.##......##.....##.##.....##.##.......##.....##..##..##.
.####.####.##.......##.....##..##...##...##.....##.....##.##.....##.##.......##.....##...####..
.##.###.##.######...##.....##..##..##.....##....##.....##.##.....##.######...########.....##...
.##.....##.##.......##.....##..##..#########....##..##.##.##.....##.##.......##...##......##...
.##.....##.##.......##.....##..##..##.....##....##....##..##.....##.##.......##....##.....##...
.##.....##.########.########..####.##.....##.....#####.##..#######..########.##.....##....##...
*/
if (mediaQueryMobile) {
  body.style.margin = "0";
  body.style.height = "100vh";
  body.style.boxSizing = "border-box";
  body.style.fontFamily = "'Roboto', sans-serif";

  div.style.width = "90%";
  div.style.height = "fit-content";
  div.style.background = "orange";
  div.style.display = "flex";
  div.style.flexDirection = "column";
  div.style.alignItems = "center";
  div.style.justifyContent = "space-around";
  div.style.position = "relative";
  div.style.margin = "50px auto";
}

div.appendChild(label);
div.appendChild(input);
div.appendChild(button);
div.appendChild(span);
section.appendChild(div);
body.appendChild(section);



document.body.addEventListener("mousemove", function showDiv(e) {
  if (e.clientY < 10) {
    section.style.display = "flex";
    e.currentTarget.removeEventListener("mousemove", showDiv);
  }
});


span.addEventListener("click", function () {
  section.style.display = "none";
});
