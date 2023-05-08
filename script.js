let num1 = parseInt(prompt("Birinci ədədi daxil edin:"));
let num2 = parseInt(prompt("İkinci ədədi daxil edin:"));

function calculate(num1, num2) {
  let toplam = 0;
  let hasil = 1;

  for (var i = num1; i <= num2; i++) {
    if (i % 19 === 0) {
      toplam += i;
      hasil *= i;
    }
  }

  return [toplam, hasil];
}

let [sum, multiplication] = calculate(num1, num2);

alert("Ədədlərin hasilı: " + multiplication + "\nƏdədlərin cəmi: " + sum);
