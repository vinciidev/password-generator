let passwordLength = 16
const inputEl = document.querySelector("#password")


function generatePassword() {
   const chars = "abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@&*"
   let password = " "

   for (let i = 0;  i < passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)
    password += chars.substring(randomNumber, randomNumber + 1)
    }

    inputEl.value = password
}

    function copy() {
        navigator.clipboard.writeText(inputEl.value)
    }

const passwordLenghtEl = document.querySelector("#password-length")
passwordLenghtEl.addEventListener("input", function() {
    passwordLength = passwordLenghtEl.value
    generatePassword()
})

    document.querySelector("#copy-2").addEventListener("click", copy)
    document.querySelector("#copy-1").addEventListener("click", copy)

    generatePassword()