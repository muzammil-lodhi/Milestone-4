//listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();

    ///type arrested
    
const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const expereinceElement = document.getElementById('expereince') as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills') as HTMLTextAreaElement;


    if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && expereinceElement && skillsElement){
        const name = nameElement.value
        const email = emailElement.value
        const phone = phoneElement.value
        const education = educationElement.value
        const expereince = expereinceElement.value
        const skills = skillsElement.value
    
 //picture elements
 const profilePicturefile = profilePictureInput.files?.[0]
 const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile):'';



    //create resume output
    const resumeOutput = `
    <h2>Resume</h2>
    
    ${profilePictureURL ? `<img src="${profilePictureURL} alt="profile picture" class="profilePicture">`:""}

    <p><strong>Name:</strong> <span id= "edit-name" class="editable"> ${name} </span> </p>
    <p><strong>Email:</strong> <span id= "edit-edit" class="editable"> ${email} </span> </p>
    <p><strong>Phone:</strong> <span id= "edit-phone" class="editable"> ${phone} </span> </p>

    <h3>Education</h3>
    <p id= "edit-education" class="editable" >${education}</p>

    <h3>Expereince</h3>
    <p id= "edit-expereince" class="editable" >${expereince}</p>

    <h3>Skills</h3>
    <p id= "edit-skills" class="editable" >${skills}</p>
    `

    //display the resume output
    const resumeOutputElement= document.getElementById('resumeOutput')
    if(resumeOutputElement){
        resumeOutputElement.innerHTML=resumeOutput;
    makeEditable();
    }
}
else{
    console.error('one or more output elements are missing')
}
})

function makeEditable(){
    const editableElements = document.querySelectorAll('.editable')
    editableElements.forEach(element =>{
        element.addEventListener('click',function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            //replace content
            if(currentElement.tagName === "P" || currentElement.tagName === 'SPAN'){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')


                
                input.addEventListener('blur' , function (){
                    currentElement.textContent = input.value
                    currentElement.style.display = 'inline'
                    input.remove()
                })
                

                currentElement.style.display ='none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }

             
        })
    })
}