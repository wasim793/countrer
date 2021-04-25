let count = 0;
var number = document.getElementById("number");
var btns = document.querySelectorAll(".btn");
btns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const styles = e.currentTarget.classList;
            if(styles.contains("increse"))
            {
                count++;
            }
            else if (styles.contains("decrease")){
                count--;
            }
            else{
                count = 0;
            }
            if(count > 0) {
            number.style.color = 'green';
            }
            if(count < 0) {
                number.style.color = 'red';
            }
            if (count === 0 ){
                number.style.color = '#222';
            }
            number.textContent = count;
        });
    });      
