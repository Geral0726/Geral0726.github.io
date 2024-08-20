//se adiciona un "event listener" para cuando se cargue el contenido
    //de la pagina
    document.addEventListener("DOMContentLoaded", () => {

        //se obtiene referencia a la lista dinámica
        const taskList = document.getElementById("skillsList");
    
        //referencia al elemento seleccionado de la lista
        let selectedTask = null;
    
        //se adiciona event listener a cada botón
        document.getElementById("addSkill").addEventListener("click", ()=>{
            const textoTarea = prompt("Ingrese el nombre de la experiencia academica:");
            if(textoTarea)
            {
                //crea un nuevo elemento HTML de tipo "li"
                const nuevaTarea = document.createElement("li");
                nuevaTarea.textContent = textoTarea;
                taskList.appendChild(nuevaTarea);
                selectTaskHandler(nuevaTarea);
            }
        });
    
        document.getElementById("deleteSkill").addEventListener("click", ()=>{
            if(selectedTask)
            {
                taskList.removeChild(selectedTask);
                selectedTask = null;
            }
            else{
                alert("No ha seleccionado ninguna experiencia academica");
            }
        });
    
        document.getElementById("editSkill").addEventListener("click", ()=>{
            if(selectedTask)
            {
                const nuevoTexto = prompt("Modificar la experiencia academica", selectedTask.textContent)
                if(nuevoTexto)
                    {
                        selectedTask.textContent = nuevoTexto;
                    }
            }
            else{
                alert("No ha seleccionado ninguna experiencia academica");
            }
        
        });
        
        function selectTaskHandler(task)
        {
            task.addEventListener("click", ()=> {
                selectedTask = task;
            });
        }
    
    });


   // Se adiciona un "event listener" para cuando se cargue el contenido
// de la página
document.addEventListener("DOMContentLoaded", () => {

    // Se obtiene referencia a la lista dinámica
    const skillsList1 = document.getElementById("skillsList1");

    // Referencia al elemento seleccionado de la lista
    let selectedSkill = null;

    // Se adiciona event listener a cada botón
    document.getElementById("addSkill1").addEventListener("click", () => {
        const skillName = prompt("Ingrese el nombre del skill:");
        if (skillName) {
            // Crea un nuevo elemento HTML de tipo "li"
            const newSkill = document.createElement("li");
            newSkill.textContent = skillName;
            skillsList1.appendChild(newSkill);
            selectSkillHandler(newSkill);
        }
    });

    document.getElementById("deleteSkill1").addEventListener("click", () => {
        if (selectedSkill) {
            skillsList1.removeChild(selectedSkill);
            selectedSkill = null;
        } else {
            alert("No ha seleccionado ningún skill");
        }
    });

    document.getElementById("editSkill1").addEventListener("click", () => {
        if (selectedSkill) {
            const newSkillName = prompt("Modificar el skill", selectedSkill.textContent);
            if (newSkillName) {
                selectedSkill.textContent = newSkillName;
            }
        } else {
            alert("No ha seleccionado ningún skill");
        }
    });

    function selectSkillHandler(skill) {
        skill.addEventListener("click", () => {
            selectedSkill = skill;
        });
    }
});