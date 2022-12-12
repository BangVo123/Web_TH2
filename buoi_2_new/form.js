const form = document.getElementById('form');

form.onsubmit = function(e){
    e.preventDefault();

    const name = document.getElementById('Name');
    const email = document.getElementById('Email');
    const message = document.getElementById('Message');
    const subject = document.getElementById('Subject');
    const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    if(name.value == '' || email.value == '' || message.value == '' || subject.value == ''){
        alert('Vui lòng nhập vào các ô còn trống');
        console.log('Vui lòng nhập vào các ô còn trống');
    }else if(!regex.test(email.value)){
        alert('Vui lòng nhạp vào email hợp lệ');
        console.log('Vui lòng nhạp vào email hợp lệ');
    }else{
        alert('Gửi thông tin thành công');
        console.log('Gửi thông tin thành công');
    }

}