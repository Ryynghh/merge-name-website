let: first_name, last_name, full_name;

document.getElementById("button_merge").onclick = function () {
  first_name = document.getElementById("first_name").value;
  last_name = document.getElementById("last_name").value;
  full_name = first_name + " " + last_name;
  console.log(full_name);

  document.getElementById("full_name").textContent = full_name;
};
