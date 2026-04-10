function clearCErr(id) {
  document.getElementById(id).innerText = "";
}
function liveContactEmail() {
  var em = document.getElementById("cEmail");
  var errEl = document.getElementById("cEmailErr");
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (em.value.length === 0) { 
    errEl.innerText = ""; 
    return; 
  }
  if (!re.test(em.value))
    errEl.innerHTML = '<span style="color:#ef4444;">&#10007; Invalid email</span>';
  else
    errEl.innerHTML = '<span style="color:#22c55e;">&#10003; Looks good</span>';
}
function liveContactPhone() {
  var ph = document.getElementById("cPhone");
  var errEl = document.getElementById("cPhoneErr");
  ph.value = ph.value.replace(/\D/g, "");
  if (ph.value.length === 0) { 
    errEl.innerText = ""; 
    return; 
  }
  if (ph.value.length < 10)
    errEl.innerText = ph.value.length + "/10 digits";
  else
    errEl.innerHTML = '<span style="color:#22c55e;">&#10003; Valid</span>';
}
function submitContactForm(e) {
  e.preventDefault();
  var ok = true;
  var focusTarget = null;
  function err(id, msg, field) {
    document.getElementById(id).innerText = msg;
    if (!focusTarget) focusTarget = field;
    ok = false;
  }
  function clr(id) {
    document.getElementById(id).innerText = "";
  }
  var name = document.getElementById("cName");
  var email = document.getElementById("cEmail");
  var phone = document.getElementById("cPhone");
  var subj = document.getElementById("cSubject");
  var msg = document.getElementById("cMessage");
  var topics = document.querySelectorAll("input[name='topic']:checked");
  var decl = document.getElementById("cDeclaration");
  if (name.value.trim() === "") err("cNameErr", "Name is required.", name);
  else clr("cNameErr");
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email.value)) err("cEmailErr", "Enter a valid email.", email);
  else clr("cEmailErr");
  if (!/^\d{10}$/.test(phone.value)) err("cPhoneErr", "Enter a valid 10-digit number.", phone);
  else clr("cPhoneErr");
  if (subj.value === "") err("cSubjectErr", "Please select a subject.", subj);
  else clr("cSubjectErr");
  if (topics.length === 0) {
    document.getElementById("cTopicErr").innerText = "Select at least one topic.";
    ok = false;
  } else {
    document.getElementById("cTopicErr").innerText = "";
  }
  if (msg.value.trim() === "") err("cMessageErr", "Message cannot be empty.", msg);
  else clr("cMessageErr");
  if (!decl.checked) {
    document.getElementById("cDeclErr").innerText = "Please check the declaration.";
    ok = false;
  } else {
    document.getElementById("cDeclErr").innerText = "";
  }
  if (focusTarget) focusTarget.focus();
  if (ok) {
    document.getElementById("formSuccess").innerHTML =
      "&#10003; Your message has been sent successfully!";
    document.querySelector(".contact-form").reset();
    setTimeout(function () {
      document.getElementById("formSuccess").innerHTML = "";
    }, 4000);
  }
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