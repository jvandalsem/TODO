$('.adder').on('click',()=>{
	var $todoItem = $(`<div class=\"todo-item\">
						   <label for=\"check\"></label>
						   <input type=\"checkbox\" class=\"check\"/>
						   <p>${$('.todo-input')[0].value}</p>
					   </div>`).on('click',function(){$(this)[0].classList.toggle('complete')})
				
	$('.todo-list').append($($todoItem))
	$('.todo-input')[0].value = ''
	$('.todo-input')[0].focus()
})

$('.todo-input')[0].addEventListener("keyup",(e)=>{
      if (e.keyCode === 13) {
         e.preventDefault();
         $('.adder').click()
      }
})