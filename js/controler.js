function Controler() {
    this.num_buttons = [document.getElementById("but1"), 
                      document.getElementById("but2"),
                      document.getElementById("but3"),
                      document.getElementById("but4"),
                      document.getElementById("but5"),
                      document.getElementById("but6"),
                      document.getElementById("but7"),
                      document.getElementById("but8"),
                      document.getElementById("but9"),
                      document.getElementById("but0")];
    this.oper_button = [document.getElementById("operator1"),
                      document.getElementById("operator2"),
                      document.getElementById("operator3"),
                      document.getElementById("operator4")]; 
    this.result_button = document.getElementById("operator5");         
    this.first_input = document.getElementById("first_value");
    this.second_input = document.getElementById("second_value");
    this.oper_output = document.getElementById("operation");
    this.events();

};

Controler.prototype.model = new Model();

Controler.prototype.events = function () {
    var self = this;
    for (var i = 0; i < this.num_buttons.length; i++) {
        this.num_buttons[i].addEventListener('click', 
            function(el) {
                self.clickButton(el, self.model, "num");
            }, 
        false);
    }
    
    for (var i = 0; i < this.oper_button.length; i++) {
        this.oper_button[i].addEventListener('click', 
            function(el) {
                self.clickButton(el, self.model, "oper");
            }, 
        false);
    }

    this.result_button.addEventListener('click', 
        function(el) {
            self.result(el, self.model, "res");
        }, 
    false);

    this.first_input.addEventListener('click', 
        function(el) {
            self.setActiveInput(el, self.model);
        }, 
    false);

    this.second_input.addEventListener('click', 
        function(el) {
            self.setActiveInput(el, self.model);
        }, 
    false);
};


Controler.prototype.clickButton = function (el, model, buttonType) {
    if (buttonType === "num") {
        this.setValue(el, model);
    } else if (buttonType === "oper") {
        model.set('operator', el.target.value);
        this.oper_output.innerHTML = el.target.value;
    } 
};

Controler.prototype.setValue = function (el, model) {
    if (model.get('active_input') === "first_value") {
        if (model.get('first_value')) {
            model.set('first_value', model.get('first_value') + el.target.value);
        } else {
            model.set('first_value', el.target.value);
        }
            this.first_input.value = model.get('first_value');
        } else if(model.get('active_input') === "second_value") {
            if (model.get('second_value')) {
                model.set('second_value', model.get('second_value') + el.target.value);
            } else {
                model.set('second_value', el.target.value);
            }
                this.second_input.value = model.get('second_value');
            }
};

Controler.prototype.result = function (el, model) {
    var result_input = document.getElementById("result_value");  
    result_input.value = model.getResult();
};

Controler.prototype.setActiveInput = function (el, model) {
    model.set("active_input", el.target.id);
};