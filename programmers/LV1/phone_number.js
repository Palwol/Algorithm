//핸드폰 번호 가리기
function solution(phone_number) {
  const first_char = phone_number.slice(0, phone_number.length - 4);
  let stars = "";
  for (let i = 0; i < first_char.length; i++) {
    stars = stars + "*";
  }
  const number = phone_number.slice(
    phone_number.length - 4,
    phone_number.length
  );
  const answer = stars + number;
  return answer;
}

console.log(solution("1234567"));
