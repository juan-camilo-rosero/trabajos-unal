const d = document,
$bass = d.querySelector(".bass"),
$num = d.querySelector(".num"),
$result = d.querySelector(".result"),
$btn = d.querySelector("button"),
nums = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"]

let bass, num, arr

d.addEventListener("click", e => {
    arr = []
    if (e.target === $btn) {
        if($bass.value !== "" && $num.value !== "" && $bass.value > "0" && $bass.value < "26"){
            bass = Math.floor($bass.value)
            num = Math.floor($num.value)
            do {
                (num % bass < 10)
                ? arr.push(num % bass)
                : arr.push(nums[(num % bass)-1])
                num = Math.floor(num/bass)
            } while (num >= bass);
            if(num !== 0) arr.push(num)
            $result.textContent = arr.reverse().toString().replace(/,/g,"")
        }
    }
})
