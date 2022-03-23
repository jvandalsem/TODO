const validate = () =>{
	if($('.todo-input')[0].value === ''){return false}
	else{return true}
}

$('.adder').on('click',()=>{
	var $todoItem = $(`<div class=\"todo-item\">
						       <label for=\"check\"></label>
							   <input type=\"checkbox\" class=\"check\"/>
							   <p>${$('.todo-input')[0].value}</p>
							   <i class="material-icons-outlined" style="font-size:16px;display:none">delete</i>
							   <span class="material-icons-outlined" style="font-size:16px;display:none">edit</span>
						   </div>`)
						   
	$todoItem[0].children[1].addEventListener('click',function(){
		$(this)[0].parentElement.classList.toggle('complete')
		$todoItem[0].children[3].style.display = 'none'
		$todoItem[0].children[4].style.display = 'none'
	})
	
	$todoItem.on('mouseover',function(){
		if($(this)[0].children[1].checked===true){
			console.log('checked')
		}
		else{
			$(this)[0].children[3].style.display = 'block'
			$(this)[0].children[4].style.display = 'block'
		}
	})
	
	$todoItem.on('mouseout',function(){
		$(this)[0].children[3].style.display = 'none'
		$(this)[0].children[4].style.display = 'none'
	})
	
	$todoItem[0].children[3].addEventListener('click',function(){
		$todoItem[0].parentElement.removeChild($todoItem[0])
	})
	$todoItem[0].children[4].addEventListener('click',function(){
		const $task = $($todoItem[0].children[2])
		const $editInput = $(`<input placeholder=\'Edit\' style=\'width:${$task.text().length-1}ch\'>`).val( $task.text() )
		$editInput.addClass('changeTask')
		$task.replaceWith($editInput)
		$editInput.focus()
		const save = () => {
			const $newTask = $('<p></p>').text($editInput.val())
			$editInput.replaceWith($newTask)
		}
		$editInput.one('blur', save).focus();
		$editInput[0].addEventListener("keyup",(e)=>{
			if (e.keyCode === 13) {
				e.preventDefault();
				save()
			}
		})
	})
	
	if(validate()){
		$('.todo-list').append($($todoItem))
		$('.todo-input')[0].value = ''
		$('.todo-input')[0].focus()
	}
	else{
		console.log('Invalid')
	}
})

$('.todo-input')[0].addEventListener("keyup",(e)=>{
	if(validate()){
      if (e.keyCode === 13) {
         e.preventDefault();
         $('.adder').click()
      }
	}
	else{
		console.log('Invalid')
	}
})

// Local Storage
