document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    const response = await fetch("http://localhost:3000/send-mail", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone }),
    });

    const result = await response.json();
    alert(result.message);
});
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    fetch("/api/send-mail", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, phone })
})

    .then(response => response.json())
    .then(data => {
        document.getElementById("response").textContent = data.message;
        console.log("Ответ сервера:", data);
    })
    .catch(error => console.error("Ошибка:", error));
});

