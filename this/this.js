var someone = {
    name : 'olramde',
    whoAmI : function() {
        console.log(this);
    }
};

someone.whoAmI(); // print someone object

var myWhoAmI = someone.whoAmI;
myWhoAmI(); // print Window object

var btn = document.getElementById('btn');
btn.addEventListener('click', someone.whoAmI);