function hallo() {
    alert("hallo");
  }
  function changeColor() {
    let x = document.getElementById("div_color");
    x.style.color = "green";
  }
  
  function RatteMal() {
    let Ratte = document.getElementById("input1").value;
    let color = document.getElementById("div_color");
    switch (Ratte.toLowerCase()) {
      case "green":
        color.style.color = "green";
        break;
      case "red":
        color.style.color = "red";
        break;
      case "blue":
        color.style.color = "blue";
        break;
      default:
        color.style.color = "black";
        document.getElementById("div_color").innerHTML = "gibts nicht";
        break;
    }
  }
  