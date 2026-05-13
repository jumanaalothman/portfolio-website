function validateForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");

    if (nameInput.value === "" || emailInput.value === "") {
        alert("Please fill out all required fields.");
        return false;
    } else {
        return true;
    }
}

function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);

    if (description.style.display === "none") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

function addLoadMessage() {
    var footer = document.querySelector("footer");
    var newParagraph = document.createElement("p");
    var currentDate = new Date();
    var text = document.createTextNode("Page loaded on: " + currentDate);

    newParagraph.appendChild(text);
    footer.appendChild(newParagraph);
}

function setupBlockquoteEffect() {
    var quote = document.querySelector("blockquote");

    if (quote) {
        quote.addEventListener("mouseover", function() {
            quote.style.backgroundColor = "#dbeafe";
            quote.style.fontStyle = "normal";
        });

        quote.addEventListener("mouseout", function() {
            quote.style.backgroundColor = "#eff6ff";
            quote.style.fontStyle = "italic";
        });
    }
}

window.onload = function() {
    if (document.title === "Jumana | Home") {
        addLoadMessage();
    }

    setupBlockquoteEffect();
};
