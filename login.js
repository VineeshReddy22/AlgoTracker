let zStack = 1000;
function openModal(which) {
  closeAll();
  const overlay = document.getElementById("overlay");
  overlay.style.zIndex = "999";
  overlay.style.opacity = "1";
  const modal = document.getElementById(which + "Modal");
  modal.style.zIndex = String(zStack);
  modal.style.opacity = "1";
  setTimeout(() => {
    const firstInput = modal.querySelector("input");
    if (firstInput) firstInput.focus();
  }, 50);
}
function closeAll() {
  document.querySelectorAll(".modal-box").forEach((m) => {
    m.style.zIndex = "-1";
    m.style.opacity = "0";
  });
  const overlay = document.getElementById("overlay");
  overlay.style.zIndex = "-1";
  overlay.style.opacity = "0";
}
function validateLogin() {
  const user = document.getElementById("loginUser");
  const pass = document.getElementById("loginPass");
  document.getElementById("userErr").innerText = "";
  document.getElementById("passErr").innerText = "";
  if (user.value.trim() === "") {
    document.getElementById("userErr").innerText = "Username is required.";
    user.focus();
    return;
  }
  if (pass.value.trim() === "") {
    document.getElementById("passErr").innerText = "Password is required.";
    pass.focus();
    return;
  }
  if (user.value === "demo_user" && pass.value === "demo_password") {
    showConfirm("Welcome, " + user.value + "!");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1800);
  } else {
    document.getElementById("passErr").innerText = "Invalid username or password.";
    pass.focus();
  }
}
function validateSignup() {
  let ok = true;
  let focusTarget = null;
  function err(id, msg, field) {
    document.getElementById(id).innerText = msg;
    if (!focusTarget) focusTarget = field;
    ok = false;
  }
  function clear(id) {
    document.getElementById(id).innerText = "";
  }
  const fn = document.getElementById("firstName");
  const ln = document.getElementById("lastName");
  const em = document.getElementById("regEmail");
  const ph = document.getElementById("regPhone");
  const dob = document.getElementById("regDob");
  const pw = document.getElementById("regPass");
  const cf = document.getElementById("regConfirm");
  const gender = document.querySelector("input[name='gender']:checked");
  const terms = document.getElementById("terms");
  if (fn.value.trim() === "") err("firstNameErr", "First name required.", fn);
  else clear("firstNameErr");
  if (ln.value.trim() === "") err("lastNameErr", "Last name required.", ln);
  else clear("lastNameErr");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (em.value.trim() === "") err("regEmailErr", "Email is required.", em);
  else if (!emailRe.test(em.value)) err("regEmailErr", "Enter valid email.", em);
  else clear("regEmailErr");
  if (!/^\d{10}$/.test(ph.value)) err("regPhoneErr", "Enter valid 10-digit phone.", ph);
  else clear("regPhoneErr");
  if (dob.value === "") err("regDobErr", "Date of birth required.", dob);
  else {
    let age = Math.floor((new Date() - new Date(dob.value)) / (365.25 * 24 * 60 * 60 * 1000));
    if (age < 18) err("regDobErr", "You must be at least 18.", dob);
    else clear("regDobErr");
  }
  if (pw.value.length < 8) err("regPassErr", "Password must be 8+ characters.", pw);
  else clear("regPassErr");
  if (cf.value !== pw.value) err("regConfirmErr", "Passwords do not match.", cf);
  else clear("regConfirmErr");
  if (!gender) {
    document.getElementById("genderErr").innerText = "Select gender.";
    ok = false;
  } else {
    document.getElementById("genderErr").innerText = "";
  }
  if (!terms.checked) {
    document.getElementById("termsErr").innerText = "Accept terms & conditions.";
    ok = false;
  } else {
    document.getElementById("termsErr").innerText = "";
  }
  if (focusTarget) focusTarget.focus();
  if (ok) {
    showConfirm("Account created! Welcome, " + fn.value + "!");
    setTimeout(() => {
      window.location.href = "home.html";
    }, 1800);
  }
}
document.getElementById("regPass").addEventListener("input", function () {
  const bar = document.getElementById("strengthFill");
  const errEl = document.getElementById("regPassErr");
  const v = this.value;
  let score = 0;
  if (v.length >= 8) score++;
  if (/[A-Z]/.test(v)) score++;
  if (/[0-9]/.test(v)) score++;
  if (/[^A-Za-z0-9]/.test(v)) score++;
  const pct = (score / 4) * 100;
  const colors = ["#ef4444", "#ef4444", "#facc15", "#22c55e", "#6366f1"];
  const labels = ["Too weak", "Weak", "Medium", "Strong", "Very Strong"];
  bar.style.width = pct + "%";
  bar.style.background = colors[score];
  if (v.length === 0) {
    bar.style.width = "0%";
    errEl.innerText = "";
  } else {
    errEl.innerText = labels[score];
    errEl.style.color = colors[score];
  }
});
document.getElementById("regConfirm").addEventListener("input", function () {
  const pw = document.getElementById("regPass").value;
  const errEl = document.getElementById("regConfirmErr");
  if (this.value.length === 0) {
    errEl.innerText = "";
    return;
  }
  if (this.value !== pw) {
    errEl.innerText = "Passwords do not match.";
  } else {
    errEl.innerText = "";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const userField = document.getElementById("loginUser");
  const passField = document.getElementById("loginPass");
  if (userField && passField) {
    userField.addEventListener("keydown", function (e) {
      if (e.key === "Enter" && userField.value.trim() !== "") {
        passField.focus();
      }
    });
  }
});
function showConfirm(msg) {
  document.getElementById("confirmMsg").innerText = msg;
  const modal = document.getElementById("confirmModal");
  modal.style.zIndex = "1001";
  modal.style.opacity = "1";
}