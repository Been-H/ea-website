//Not sure why I didn't just construct a constant for these things rather than just doing getElemntById over an over but it is what it is
function dropdown() {
  document.getElementById("dd").classList.toggle("show");

}
function dropdown1() {
  document.getElementById("dd1").classList.toggle("show");
}

function remove() {
  if (document.getElementById('dd').classList.contains("show")) {

    document.getElementById('dd').classList.remove("show");

  }
  if (document.getElementById('dd1').classList.contains("show")) {
    document.getElementById('dd1').classList.remove("show")
  }
}
document.getElementById("click").addEventListener("click", dropdown);
document.getElementById("click1").addEventListener("click", dropdown1)
document.body.addEventListener("click", remove, true)
