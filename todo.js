const validate = () =>{
	if($('.todo-input')[0].value === ''){return false}
	else{return true}
}

$('.adder').on('click',()=>{
	if(validate()){
		var $todoItem = $(`<div class=\"todo-item\">
					   <label for=\"check\"></label>
					   <input type=\"checkbox\" class=\"check\"/>
					   <p>${$('.todo-input')[0].value}</p>
					   <i class="material-icons-outlined" style="font-size:16px;display:none">delete</i>
					   <span class="material-icons-outlined" style="font-size:16px;display:none">edit</span>
				   </div>`)
		$todoItem[0].childNodes[3].addEventListener('click',function(){
			$(this)[0].parentElement.classList.toggle('complete')
			$todoItem[0].children[3].style.display = 'none'
			$todoItem[0].children[4].style.display = 'none'
		})
		$todoItem.on('mouseover',function(){
			if($('.check').prop('checked')===true){
				console.log('checked')
			}
			else{
				try{
					$(this)[0].children[3].style.display = 'block'
					$(this)[0].children[4].style.display = 'block'
				}catch{}
			}
		})
		$todoItem.on('mouseout',function(){
			try{
				$(this)[0].children[3].style.display = 'none'
				$(this)[0].children[4].style.display = 'none'
			}catch{}
		})
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

