"use strict";

const hearts = document.querySelectorAll(".heart-fill");
const heartPaths = document.querySelectorAll(".heart-path");
const commentBox = document.querySelector(".comment");
const overlay = document.querySelector(".overlay");
const commentIcons = document.querySelectorAll(".comment-icon");
const commentBoxClose = document.querySelector(".comment-close");

const commentImages = document.querySelector(".comment-post");

const commentInput = document.querySelector("#commentInput");
const addCommentBtn = document.querySelector("#addCommentButton");
const commentsList = document.querySelector("#commentsList");

const instagramUsernames = [
  "travel_with_anna",
  "foodie_john",
  "fitness_freak_92",
  "art_by_emma",
  "tech_guru_tom",
  "wanderlust_sarah",
  "petlover_lucy",
  "fashionista_kate",
  "coding_with_james",
  "music_lover_max",
];

console.log(instagramUsernames);

function changeAttribute(variable, attributeName, value) {
  variable.setAttribute(attributeName, value);
}

// click handling on heart
hearts.forEach((heart, index) => {
  const heartPath = heartPaths[index]; // To Get the corresponding

  heart.addEventListener("click", () => {
    // if heart is white
    if (heart.getAttribute("fill") === "none") {
      changeAttribute(heart, "fill", "red");
      changeAttribute(
        heartPath,
        "d",
        "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      );
      changeAttribute(heartPath, "fill", "red");
      changeAttribute(heartPath, "stroke", "red");
    }
    // if heart is red
    else {
      changeAttribute(heart, "fill", "none");
      changeAttribute(
        heartPath,
        "d",
        "M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
      );
      changeAttribute(heartPath, "fill", "white");
      changeAttribute(heartPath, "stroke", "white");
    }
  });
});

// click handling on comment icon
commentIcons.forEach((commentIcon, index) => {
  // const commentImage = commentImages[index];
  console.log(index);
  commentIcon.addEventListener("click", (event) => {
    commentBox.style.visibility = "visible";
    overlay.classList.remove("hidden");
    commentImages.setAttribute("src", `images/post${index + 1}.jpg`);
  });
});

//closing commnent box afte clicking outside the box
overlay.addEventListener("click", () => {
  commentBox.style.visibility = "hidden";
  overlay.classList.add("hidden");
});

//closing commnent box afte clicking on the close button
commentBoxClose.addEventListener("click", () => {
  commentBox.style.visibility = "hidden";
  overlay.classList.add("hidden");
  commentBoxClose.style.color = "hsl(0, 0.00%, 26.70%)";
});

// Function to add a new comment
function interactiveComment() {
  const randomIndex = Math.floor(Math.random() * 10);
  const commentText = commentInput.value.trim();
  if (commentText) {
    const newComment = document.createElement("div");
    newComment.className = "comment-person";
    newComment.innerHTML = `
      <div class="comment-content">
              <div class="avtar_comment">
                <div class="user-avtar">
                  <img
                    src="images/user_profile${randomIndex + 1}.jpg"
                    alt="user picture"
                    height="34"
                    width="34"
                  />
                </div>
                <div class="user-name">${instagramUsernames[randomIndex]}</div>
                <div id="user-comment">${commentText}</div>
              </div>
              
              <button class="post__button heart comment-like">
                <svg
                  class="heart-fill"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="heart-path"
                    d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                    fill="white"
                    stroke=" white"
                    stroke-width="0.6"
                  />
                </svg>
              </button>
            </div>
            <div class="footer">
              <span>1 sec ago</span>
              <span>${randomIndex} Likes</span>
              <span>Reply</span>
            </div>
    `;
    commentsList.appendChild(newComment);
    commentInput.value = ""; // Clear the input field
  }
}

// Add event listener to the comment icon button
addCommentBtn.addEventListener("click", interactiveComment);

// Add event listener for "Enter" key in the input
commentInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    interactiveComment();
  }
});
