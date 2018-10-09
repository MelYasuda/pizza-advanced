import { Pizza } from './pizzaShop.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// user interface
$(document).ready(function(){

  $("form#choice-form").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#size").val();
    // store checked values inside an array
    var inputtedToppings = [];
    $("input:checkbox[name=pizza-toppings]:checked").each(function(){
      var inputtedTopping = $(this).val();
        inputtedToppings.push(inputtedTopping);
    });
    var newPizza = new Pizza (inputtedSize, inputtedToppings);

    if(inputtedSize === "none" || inputtedToppings.length === 0) {
      alert("Please select size and toppings.");
      $('#myModal').modal('hide')
    } else {
      $("#price").text("$" + newPizza.price());
    }
  });
});
