function mailPrompt() {
    let button = document.querySelector(".form-send")
    let userService = document.getElementById("services")
    let userName = document.getElementById("name")
    let userEmail = document.getElementById("userEmail")
    let userMessage = document.getElementById("message")

    if (userName.value.length > 0 && userEmail.value.length > 0) {
        button.disabled = false
    } else {
        button.disabled = true
    }

    switch (userService.value) {
        case "lawncare":
            window.location.href = 'mailto:n8slandscaping@gmail.com' 
            + '?subject=' 
            + encodeURIComponent("Lawn Care Service Quote")
            + '&body=' 
            + encodeURIComponent(`${userMessage.value}\n\n- Name: ${userName.value}\n- Email: ${userEmail.value}`)
            
            window.location.href = "/pages/contacts.html"
            break;
        
        case "arborist":
            window.location.href = 'mailto:n8slandscaping@gmail.com' 
            + '?subject=' 
            + encodeURIComponent("Arborist Service Quote")
            + '&body=' 
            + encodeURIComponent(`${userMessage.value}\n\n- Name: ${userName.value}\n- Email: ${userEmail.value}`)

            window.location.href = "/pages/contacts.html"
        
        case "irrigation":
            window.location.href = 'mailto:n8slandscaping@gmail.com' 
            + '?subject=' 
            + encodeURIComponent("Irrigation Service Quote")
            + '&body=' 
            + encodeURIComponent(`${userMessage.value}\n\n- Name: ${userName.value}\n- Email: ${userEmail.value}`)

            window.location.href = "/pages/contacts.html"
            break;
        
        case "more":
            window.location.href = 'mailto:n8slandscaping@gmail.com' 
            + '?subject=' 
            + encodeURIComponent("General Question/Inquiry or Multi Service")
            + '&body=' 
            + encodeURIComponent(`${userMessage.value}\n\n- Name: ${userName.value}\n- Email: ${userEmail.value}`)

            window.location.href = "/pages/contacts.html"
            break;

        default:
            break;
    }

}



