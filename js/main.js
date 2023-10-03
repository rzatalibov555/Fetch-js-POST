const form = document.getElementById("commentForm")
const message = document.getElementById("responseMessage")
const loader = document.getElementById("loadingSpinner")
const name = document.getElementById("name")
const comment = document.getElementById("comment")

form.addEventListener("submit", async (e) => {
    e.preventDefault()

    const formData = {
        "name": name.value,
        "comment": comment.value
    }

    try {
        loader.style.display = "block"

        const response = await fetch(
            `${config.BASE_URL}/posts`,
            {
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
            )
    
        loader.style.display = "none"
    
        const data = await response.json()

        if (response.ok) {

        showMessage("success", "Comment successfully created. Your comment id: " + data.id)
        } else {
            showMessage("danger", "Something went wrong when request time")
        }
    } catch(error) {
        showMessage("danger", "Something went wrong when request time")

    }

})

function showMessage(className, content) {
    message.className = `alert alert-${className}`
    message.textContent = content
}