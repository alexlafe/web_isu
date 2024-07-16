let editableTask;
let mainList = document.body.querySelector('.list-generator').querySelector('.list-of-tasks');
let newItem = mainList.querySelector('li:first-child').cloneNode(true);
let spareItem;

let deleteTask = function(btn)
{
    let li = btn.closest('.list_item');
    let done = li.querySelector('input[type=checkbox');

    if (li && !done.checked)
    {
        if (confirm('Вы уверены, что хотите удалить?'))
        {
            li.remove();
        }
    }
}

let editTask = function(btn)
{
    let li = btn.closest('.list_item');

    if (li)
    {
        editableTask = li;

        let desc = li.querySelector('.task_descryption_li');
        let prio = li.querySelector('.task_prio_li');
        let done = li.querySelector('input[type=checkbox');

        if (desc && !done.checked)
        {
            let form = document.forms.TaskEditForm;

            document.querySelector('.list-edition-heading').innerText = 'Редактирование задачи';

            form.elements.task_descryption.value = desc.innerText;

            if (prio.querySelector('img').className=="prio_image")
            {
                form.elements.task_prio.checked = true;
            }
            else if (prio.querySelector('img').className=="prio_image2")
            {
                form.elements.task_prio.checked = false;
            }
            
            document.querySelector('.list-edition').className = "list-edition2";
        }
    }
}

let underlineTask = function(btn)
{
    let li = btn.closest('.list_item');

    if (li)
    {
        //let desc = li.querySelector('.task_descryption_li');
        let done = li.querySelector('input[type=checkbox');

        if (done.checked)
        {
            li.querySelector('.task_descryption_li').className = "task_descryption_li2";
            li.querySelector('.button_edit').querySelector('img').className = "pen2";
            li.querySelector('.button_delete').querySelector('img').className = "trash2";
        }
        else 
        {
            li.querySelector('.task_descryption_li2').className = "task_descryption_li";
            li.querySelector('.button_edit').querySelector('img').className = "pen";
            li.querySelector('.button_delete').querySelector('img').className = "trash";
        }
    }
}

let addTask = function()
{
    let form = document.forms.TaskEditForm;

    document.querySelector('.list-edition-heading').innerText = 'Добавление задачи';

    if (!editableTask)  //проверка нужна для ситуации, когда пользователь нажимает "Редактировать", а потом сразу на "Добавить"
    {
        document.querySelector('.list-edition').className = "list-edition2";
    }

    form.reset();
    editableTask = null;
    spareItem = newItem.cloneNode(true);

    //mainList.append();
}

let cancelTask = function()
{
    document.querySelector('.list-edition2').className = "list-edition";
    editableTask = null;
}

let saveTask = function() 
{
    let form = document.forms.TaskEditForm;

    if (editableTask)
    {
        let desc = editableTask.querySelector('.task_descryption_li');
        let prio = editableTask.querySelector('.task_prio_li');

        if (desc)
        {
            desc.innerText = form.elements.task_descryption.value;

            if (form.elements.task_prio.checked)
            {
                prio.querySelector('img').className="prio_image"
            }
            else 
            {
                prio.querySelector('img').className="prio_image2"
            }
        }
    }
    else if(mainList)
    {
        let desc = spareItem.querySelector('.task_descryption_li');
        let prio = spareItem.querySelector('.task_prio_li');

        if (desc)
        {
            desc.innerText = form.elements.task_descryption.value;

            if (form.elements.task_prio.checked)
            {
                prio.querySelector('img').className="prio_image"
            }
            else 
            {
                prio.querySelector('img').className="prio_image2"
            }
        }
        mainList.append(spareItem);
    }
    document.querySelector('.list-edition2').className = "list-edition";
    editableTask = null;
}

