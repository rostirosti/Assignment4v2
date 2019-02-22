//Loop to show the employee list
var employeeListView = function (){
    for (let i = 0; i < employeeList.length; i++) {
    $('.emp_list').append('<li>'+`${employeeList[i].name}`+'</li>');
    $('.emp_list').append('<li>'+`${employeeList[i].officeNum}`+'</li>');
    $('.emp_list').append('<li>'+`${employeeList[i].phoneNum}`+'</li>'+`<p></p>`);
    }; 
    };

//First we render the page with the employee list
const render = function () {
    $('.emp_list').empty();
    console.log ("Rendered!");
    employeeListView();
};

render();

///Setting up the add logic

const getInputVal = function () {
    const nameVal = $('#nameNum').val()
    const officeNumVal = $('#officeNum').val()
    const phoneNumVal = $('#phoneNum').val()
    employeeList.push({'name':nameVal, 'officeNum':officeNumVal, 'phoneNum': phoneNumVal});
    //rerender list
    $('#nameNum').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();
};

$('#add').on('click', getInputVal);

///setting up the update logic

const replaceName = function () {
    const nameVal = $('#nameNum').val();
    const officeNumVal = $('#officeNum').val();
    const phoneNumVal = $('#phoneNum').val();

    const nameValNew = $('#nameNum').val();
    const officeNumValNew = $('#officeNum').val();
    const phoneNumValNew = $('#phoneNum').val()
    
    const nameIndex = employeeList.findIndex(i => i.name === nameVal);

    if(nameIndex > -1) {
        employeeList.splice(nameIndex,1,{'name': nameVal, 'officeNum':officeNumValNew, 'phoneNum': phoneNumValNew});
    }
    $('#nameNum').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();   
}

$('#replace').on('click', replaceName);

///setting up the delete logic

const deleteName = function () {
    const nameVal = $('#nameNum').val();
    const officeNumValNew = $('#officeNum').val();
    const phoneNumValNew = $('#phoneNum').val()
    const nameIndex = employeeList.findIndex(i => i.name === nameVal);

    if(nameIndex > -1) {
        employeeList.splice(nameIndex,1);
    }
    
    $('#nameNum').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();   
}

$('#delete').on('click', deleteName);

///setting up the verify logic

const verifyName = function () {
    const nameVal = $('#nameNum').val();
    const nameIndex = employeeList.findIndex(i => i.name === nameVal);

    if(nameIndex > -1) {
        console.log(`This name already exists: `+`${nameVal}`);
        $('.info').html('<h2>This name already exists</h2>')
        $('.')
    } else { 
        $('.info').html('');
        console.log('Incorrect input');
    }
    
    $('#nameNum').val('');
    $('#officeNum').val('');
    $('#phoneNum').val('');
    render();   
}

$('#verify').on('click', verifyName);

//setting up the actions for the sidenav

var viewBar = function (){
    $('#test').addClass('display-none');
    $('#add').addClass('display-none');
    $('#replace').addClass('display-none');
    $('#delete').addClass('display-none');
    $('#verify').addClass('display-none');
    $('#nameNum').addClass('display-none');
    $('#officeNum').addClass('display-none');
    $('#phoneNum').addClass('display-none');
}

$('.viewlist').on('click', viewBar);

var addBar = function (){
     $('#test').addClass('display-none');
     $('#add').removeClass('display-none');
     $('#replace').addClass('display-none');
     $('#delete').addClass('display-none');
     $('#verify').addClass('display-none');
     $('#nameNum').removeClass('display-none');
     $('#officeNum').removeClass('display-none');
     $('#phoneNum').removeClass('display-none');
    }

$('.addlist').on('click', addBar);

var verifyBar = function (){
    $('#test').addClass('display-none');
    $('#add').addClass('display-none');
    $('#replace').addClass('display-none');
    $('#delete').addClass('display-none');
    $('#verify').removeClass('display-none');
    $('#nameNum').removeClass('display-none');
    $('#officeNum').removeClass('display-none');
    $('#phoneNum').removeClass('display-none');
   }

$('.verify').on('click', verifyBar);


var updateBar = function (){
    $('#test').addClass('display-none');
    $('#add').addClass('display-none');
    $('#replace').removeClass('display-none');
    $('#delete').removeClass('display-none');
    $('#verify').addClass('display-none');
    $('#nameNum').removeClass('display-none');
    $('#officeNum').removeClass('display-none');
    $('#phoneNum').removeClass('display-none');
   }

$('.update').on('click', updateBar);

