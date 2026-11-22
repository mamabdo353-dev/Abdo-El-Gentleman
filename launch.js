document.getElementById("pick").addEventListener("submit", function(event) {
  event.preventDefault();

  const choice = document.querySelector('input[name="payload"]:checked');
  const count = document.getElementById("count");

  if (!choice) {
    count.textContent = "اختار نوع الأول";
    return;
  }

  count.textContent = "تم الضغط على Start واختيار " + choice.value;
});