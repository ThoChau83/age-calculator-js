// Cái này để nhấn vào cái dateInput là nó cho chọn luôn
const datePick = document.querySelector("#datePicker");
datePick.addEventListener("click", () => {
  datePick.showPicker();
});

let toDate = new Date();
//Không cho chọn ngày ở tương lai, cái toISOString là nó trả về cái này "2026-03-16T13:12:41..." nên cần
datePick.max = toDate.toISOString().split("T")[0];

const calPutton = document.querySelector("#cal");
const txt = document.querySelector("#result");

calPutton.addEventListener("click", () => {
  if (!datePick.value) {
    txt.innerText = "Vui lòng chọn ngày tháng năm sinh của bạn!";
    return; // Dừng hàm tại đây, không chạy các dòng code bên dưới
  }

  let myYear = datePick.value.split("-")[0];
  let myMonth = datePick.value.split("-")[1];
  let myDate = datePick.value.split("-")[2];

  // Lấy thời gian ở hiện tại
  let cYear = toDate.getFullYear();
  let cMonth = toDate.getMonth() + 1;
  let cDate = toDate.getDate();

  //logic tính tuổi
  let rYear;

  if (cYear > myYear) {
    if (cMonth > myMonth) {
      rYear = cYear - myYear;
    } else if (cMonth < myMonth) {
      rYear = cYear - myYear - 1;
    } else {
      if (cDate >= myDate) {
        rYear = cYear - myYear;
      } else {
        rYear = cYear - myYear - 1;
      }
    }
  } else rYear = 0;

  txt.innerHTML = `You are <span style="color: yellow; font-weight: bold;">${rYear}</span> years old`;
});
