"use strict";

// 1. html ფაილში (ჯავასკრიპტით არა) შევქმნათ ღილაკი,
//  ამ ღილაკის კლიკზე წაიშალოს თვითონ ეს ღილაკი ანუ
//   რომ დავკლიკავ ღილაკზე გაქრეს
//     გამოიყენეთ ეს მეთოდი remove()

// const removeBtn = document.getElementById("eraseMeBtn");

// removeBtn.addEventListener("click", () => {
//   removeBtn.remove();
// });

// 2. ჯავასკრიპტით შევქმნათ img tag რომელსაც src ად მივანიჭებთ
//  ამ: https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg
//  სურათის ლინკს და ეს შექმნილი img ჩავსვათ body ში
//   (ისე როგორც ლექციაზე გავაკეთეთ).
// გამოიყენეთ ეს მეთოდი setAttribute()

// const imgSrc = document.createElement("img");
// imgSrc.setAttribute(
//   "src",
//   "https://www.simplilearn.com/ice9/free_resources_article_thumb/Become_a_Front_End_Developer.jpg"
// );
// document.body.appendChild(imgSrc);

// 3. დაამატეთ ერთი ინფუთი და ღილაკი ,
// რა ინფორმაციასაც  შეიყვანთ ინფუთის ველში,
// ღილაკზე დაჭერისას ქვემოთ p ტეგში  გამოიტანეთ ინფუთის მნიშვნელობა .

// const saveBtn = document.getElementById("save-btn");
// const inputForm = document.getElementById("info");
// const textDown = document.querySelector(".text");

// const textOutput = function () {
//   if (inputForm.value !== "") {
//     textDown.textContent = inputForm.value;
//   } else {
//     textDown.textContent = "Type Something";
//   }
// };

// saveBtn.addEventListener("click", textOutput);

// 4.დავწეროთ ფუნქცია, რომელიც დაგვიბრუნებს არგუმენტად
//  მიღებული ხარჯების ჯამს.

// ფუნქციას არგუმენტად გადაეცით  მასივი - productData და
//  დათვალეთ გადაცემული მასივში amount ის ჯამი

//  const productData = [{product_id: 1, amount: 200},
//      { product_id: 2, amount: 300 },
//      { product_id:3, amount: 500 }
//     ]
// დაბრუნებული ჯამის მნიშნელობა გამოიტანეთ p ტეგის მნიშნელობაში

// const productData = [
//   { product_id: 1, amount: 200 },
//   { product_id: 2, amount: 300 },
//   { product_id: 3, amount: 500 },
// ];
// const productOutput = document.querySelector(".product-data-output");
// const sum = function (products) {
//   let finalSum = 0;
//   for (let i = 0; i < products.length; i++) {
//     finalSum += products[i].amount;
//   }
//   return finalSum;
// };
// productOutput.textContent = sum(productData);

// 5. რთული დამატებითი დავალება
// html შექმენით <div id="user-list"></div> გამოიყენეთ 4 ელემენტიანი გრიდ სისტემა,

// const users = [
// {
// id: 7,
// email: "michael.lawson@reqres.in",
// first_name: "Michael",
// last_name: "Lawson",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 8,
// email: "lindsay.ferguson@reqres.in",
// first_name: "Lindsay",
// last_name: "Ferguson",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 9,
// email: "tobias.funke@reqres.in",
// first_name: "Tobias",
// last_name: "Funke",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 10,
// email: "byron.fields@reqres.in",
// first_name: "Byron",
// last_name: "Fields",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 11,
// email: "george.edwards@reqres.in",
// first_name: "George",
// last_name: "Edwards",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 12,
// email: "rachel.howell@reqres.in",
// first_name: "Rachel",
// last_name: "Howell",
// image: "https://picsum.photos/200/300&quot;;
// }
// ];
//  ეს მასივი გამოიყენეთ და html ში გამოიტანეთ (ჯავასკრიპტით) 4 user card,
// თითოეული ქარდი უნდა შეიცავდეს შემდეგ ინფორმაციას users მასივის ელემენტებიდან

//   (ობიექტებიდან):
//  1. image ჩასვით სურათის ადგილას (შეგიძლიათ image ფოტოები შეცვალოთ)
//  2. "John Doe" ს ადგილას ჩასვით first_name და last_name.
//

// const users = [
// {
// id: 7,
// email: "michael.lawson@reqres.in",
// first_name: "Michael",
// last_name: "Lawson",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 8,
// email: "lindsay.ferguson@reqres.in",
// first_name: "Lindsay",
// last_name: "Ferguson",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 9,
// email: "tobias.funke@reqres.in",
// first_name: "Tobias",
// last_name: "Funke",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 10,
// email: "byron.fields@reqres.in",
// first_name: "Byron",
// last_name: "Fields",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 11,
// email: "george.edwards@reqres.in",
// first_name: "George",
// last_name: "Edwards",
// image: "https://picsum.photos/200/300&quot;;
// },
// {
// id: 12,
// email: "rachel.howell@reqres.in",
// first_name: "Rachel",
// last_name: "Howell",
// image: "https://picsum.photos/200/300&quot;;
// }
// ];
//

// const users = [
//   {
//     id: 7,
//     email: "michael.lawson@reqres.in",
//     first_name: "Michael",
//     last_name: "Lawson",
//     image: "https://freepngimg.com/thumb/man/22654-6-man-thumb.png",
//   },
//   {
//     id: 8,
//     email: "lindsay.ferguson@reqres.in",
//     first_name: "Lindsay",
//     last_name: "Ferguson",
//     image:
//       "https://i.pinimg.com/736x/cf/e7/57/cfe75786e4f585253a235db738921b2e.jpg",
//   },
//   {
//     id: 9,
//     email: "tobias.funke@reqres.in",
//     first_name: "Tobias",
//     last_name: "Funke",
//     image:
//       "https://i.pinimg.com/736x/e6/a7/eb/e6a7ebb273a8dc0c79d6017aead50906.jpg",
//   },
//   {
//     id: 10,
//     email: "byron.fields@reqres.in",
//     first_name: "Byron",
//     last_name: "Fields",
//     image:
//       "https://cdn.pixabay.com/photo/2022/02/09/13/35/man-7003421_960_720.jpg",
//   },
//   {
//     id: 11,
//     email: "george.edwards@reqres.in",
//     first_name: "George",
//     last_name: "Edwards",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMU1sI1pIm8Q5PpFg2lBN6TrmxfDyzRoKTA&usqp=CAU",
//   },
//   {
//     id: 12,
//     email: "rachel.howell@reqres.in",
//     first_name: "Rachel",
//     last_name: "Howell",
//     image:
//       "https://media.istockphoto.com/id/1278139568/photo/studio-portrait-of-20-year-old-woman.jpg?s=612x612&w=0&k=20&c=FSEdX6EGKrjbCvOJk9idiYZJoSErA9bwizHEkW86A3c=",
//   },
// ];
// const userList = document.getElementById("user-list");
// const createCards = function () {
//   users.forEach((el) => {
//     const div = document.createElement("div");
//     div.classList.add(`id-${el.id}`);
//     const cardBg = document.createElement("div");
//     cardBg.classList.add("card-bg");
//     const profileImg = document.createElement("img");
//     profileImg.setAttribute("src", `${el.image}`);
//     profileImg.classList.add("img-style");
//     const fullName = document.createElement("div");
//     fullName.classList.add("profile-name");
//     const names = document.createElement("div");
//     names.classList.add("names");
//     const spanName = document.createElement("span");
//     const spanLastName = document.createElement("span");
//     const spanEmail = document.createElement("span");
//     const emailDiv = document.createElement("div");
//     emailDiv.classList.add("email-div", "hidden");
//     const infoButton = document.createElement("button");
//     infoButton.classList.add("buttons");
//     infoButton.textContent = "ინფორმაცია";
//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("buttons");
//     deleteButton.textContent = "წაშლა";
//     spanName.textContent = `${el.first_name}`;
//     spanLastName.textContent = `${el.last_name}`;
//     spanEmail.textContent = `${el.email}`;
//     userList.appendChild(div);
//     div.appendChild(cardBg);
//     cardBg.appendChild(profileImg);
//     cardBg.appendChild(fullName);
//     cardBg.appendChild(infoButton);
//     cardBg.appendChild(deleteButton);
//     fullName.appendChild(names);
//     fullName.appendChild(emailDiv);
//     fullName.appendChild(spanEmail);
//     names.appendChild(spanName);
//     names.appendChild(spanLastName);
//     emailDiv.appendChild(spanEmail);

//     infoButton.addEventListener("click", function () {
//       if (emailDiv.style.display === "none") {
//         emailDiv.style.display = "block";
//       } else {
//         emailDiv.style.display = "none";
//       }
//     });
//     deleteButton.addEventListener("click", function () {
//       return div.remove();
//     });
//   });
// };
// createCards(userList);
// const createCards = function () {
//   users.forEach((el) => {
//     const card = document.createElement("div");

//     card.innerHTML = `<div class="example">
//                         <div class="card-bg d-flex flex-column align-items-center">
//                         <div class="content">
//                             <div class="profile-img mt-4">
//                                 <img
//                                     src=${el.image}
//                                     alt=""
//                                 />
//                             </div>
//                             <div class="profile-name">
//                                 <span>${el.first_name}</span>
//                                 <span>${el.last_name}</span>
//                             </div>
//                             <div
//                                 class="buttons w-100 d-flex justify-content-between flex-column align-items-center"
//                             >
//                                 <button class="info">More Info</button>
//                                 <button class="delete">Delete</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>`;
//     userList.appendChild(card);
//   });

// იდეა მქონდა რომ გამეკეთებინა ინპუთ ველი სადაც მეილს ჩაწერდი
//  და ჩაწერის მომენტში თუ არ იქნებოდა @ და . მაშინ ერორი ყოფილიყო
//      როგორც ჩვეულებრივ მეილ ინფუთებში ;დ
// პ.ს  იმედია სწორად ავხსენი

// const mail = document.getElementById("email");
// const text = document.querySelector(".text");
// const button = document.querySelector(".submit-btn");
// const arr1 = [];
// const checkEmail = function () {
//   if (mail.value.includes("@" && ".")) {
//     if (arr1.includes(mail.value)) {
//       text.textContent = "already registred";
//       text.style.color = "rgb(59, 59, 164)";
//     } else {
//       arr1.push(mail.value);
//       text.textContent = "Registration Complete !";
//       text.style.color = "green";
//     }
//   } else {
//     text.textContent = "Invalid Email";
//     text.style.color = "red";
//   }
//   console.log(arr1);
// };
// checkEmail(arr1);
// button.addEventListener("click", checkEmail);
