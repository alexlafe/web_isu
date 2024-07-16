let apply = function(form)
	{

    let data = {
        company: form.elements.company.value,
        fio: form.elements.fio.value,
        position: form.elements.position.value,
        phone: form.elements.phone.value,
        email: form.elements.email.value,
        secondphone: form.elements.secondphone.value,
        address: form.elements.address.value,
    }
	
    document.querySelector('.card-preview__organization').innerHTML = data.company;
    document.querySelector('.card-preview__fio').innerHTML = data.fio;
    document.querySelector('.card-preview__position').innerHTML = data.position;
    document.querySelector('.result-phone').innerHTML = data.phone;
    document.querySelector('.result-second-phone').innerHTML = data.secondphone;
    document.querySelector('.result-email').innerHTML = data.email;
    document.querySelector('.result-address').innerHTML = data.address;
        
    let emailCheck = document.querySelector('.emailCheckbox')
    let addressCheck = document.querySelector('.addressCheckbox')
    let addressResult=document.querySelector('.result-address')
    let emailResult=document.querySelector('.result-email')

    if (emailCheck.checked) {
        emailResult.style.display = "block"
    } else {
        emailResult.style.display = "none"
    }

    if (addressCheck.checked) {
        addressResult.style.display = "block"
    } else {
        addressResult.style.display = "none"
    }
	//console.log(company);
        let fioResult = document.querySelector('.card-preview__fio'); 
        let fioAlign = form.elements.fio_align.value; 
        fioResult.style.textAlign = fioAlign;
        let fioSize = form.elements.fio_size.value; 
        fioResult.style.fontSize = fioSize;
        
        let positionResult = document.querySelector('.card-preview__position'); 
        let positionAlign = form.elements.position_align.value; 
        positionResult.style.textAlign = positionAlign;
        let positionSize = form.elements.position_size.value; 
        positionResult.style.fontSize = positionSize;

        let fioColor=form.elements.fio_color.value;
        let fiocolorResult=document.querySelector('.card-preview__fio');
        fiocolorResult.style.color=fioColor;

        let positionColor=form.elements.position_color.value;
        let positioncolorResult=document.querySelector('.card-preview__position');
        positioncolorResult.style.color=positionColor;
        

    
        if (chk.checked)
        {
            document.querySelector('.result-second-phone').style.display="block"
        } 
        else 
        {
            document.querySelector('.result-second-phone').style.display="none"
        }
    }