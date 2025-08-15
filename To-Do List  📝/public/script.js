function toggleStrike(checkbox) {
  if (checkbox.checked) {
    checkbox.parentElement.classList.add("checked");
  } else {
    checkbox.parentElement.classList.remove("checked");
  }
}