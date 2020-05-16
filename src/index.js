import "./sass/style.scss";
const component = () => {
  const element = document.createElement("div");
  element.innerHTML = ["Hello", "webpack"].join(" ");
  return element;
};
document.body.appendChild(component());

// const womenInTechnology = {
//     stowarzyszenie: true,
//     version: "1.0.0",
//     meetingType: "Online Party",
//     members: {
//       WiTKraów: true,
//       WiTWarszawa: true,
//       WiTŁódź: true,
//       WiTPoznań: true,
//       WiTTrójmiasto: true,
//       WiTKatowice: true,
//       WiTWrocław: true,
//     },
//     equipment: {
//       drinks,
//       food,
//       senseOfHumor,
//     },
//   };
