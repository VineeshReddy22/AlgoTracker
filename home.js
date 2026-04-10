function toggle(header) {
  header.classList.toggle("active");
  var content = header.nextElementSibling;
  while (content && !content.classList.contains("content")) {
    content = content.nextElementSibling;
  }
  if (!content) return;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
document.querySelectorAll("input[type='checkbox']").forEach(function(cb) {
  cb.addEventListener("change", updateStats);
});
function updateStats() {
  var all = document.querySelectorAll("input[type='checkbox']");
  var checked = document.querySelectorAll("input[type='checkbox']:checked");
  var total = all.length;
  var done = checked.length;
  document.getElementById("result").innerHTML = done + " / " + total;
  var pct = total > 0 ? (done / total) * 100 : 0;
  document.getElementById("progressBar").style.width = pct.toFixed(1) + "%";
  var easy = 0, med = 0, hard = 0;
  checked.forEach(function(c) {
    var d = c.getAttribute("data-diff");
    if (d === "easy") easy++;
    else if (d === "medium") med++;
    else if (d === "hard") hard++;
  });
  document.getElementById("easyCount").innerText = easy;
  document.getElementById("medCount").innerText = med;
  document.getElementById("hardCount").innerText = hard;
}
// Dropdown toggle function
function toggleDropdown() {
  var dropdown = document.getElementById("resourcesDropdown");
  dropdown.classList.toggle("show");
}

// Close dropdown when clicking outside
document.addEventListener("click", function(event) {
  var dropdown = document.getElementById("resourcesDropdown");
  var dropdownBtn = document.querySelector(".dropdown-btn");
  
  if (dropdown && dropdownBtn) {
    if (!dropdownBtn.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.classList.remove("show");
    }
  }
});