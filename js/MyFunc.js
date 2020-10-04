function myFirstApp(name, age) {
    name = prompt('Введите ваше имя');
    age = prompt('Введите ваш возраст');
    console.log(`Привет, меня зовут ${name} и это моя первая программа!`);

    function showSkills() {
        let skills = ['html', 'css', 'js'];
        console.log(skills);

    };

    showSkills();

    function chackAge() {
        if (age < 18) {
            console.log('Классно что ты так рано задумался о своем будущем')
        } else {
            console.log('У тебя есть отличные шансы стать Front-end разработчиком')
        }
    }

    chackAge();

    function calcPow(num, n) {
        num = prompt('Введите число');
        n = prompt('Введите степень');
        let pow = Math.pow(Math.floor(num), parseInt(n));
        console.log(pow);
    };

    calcPow();
};

myFirstApp();