const projects = [
  {
    name: "profile-card-component-main befor",
    url: "https://github.com/Boody2004/Profile-card-component-frontend-mentor",
    imageLink:
      "https://res.cloudinary.com/dirbnpgsp/image/upload/v1642197328/card1_bbymlp.png",
  },
  {
    name: "four-card-feature-section-master",
    url: "https://github.com/Boody2004/four-card-feature-section-frontend-mentor",
    imageLink:
      "https://res.cloudinary.com/dirbnpgsp/image/upload/v1642197328/card2_jjqkys.png",
  },
];

const list = document.getElementById("list");

projects.forEach(({ name, url, imageLink }, i) => {
  const listItem = document.createElement("li");

  listItem.innerHTML = `
		<img src="${imageLink}" />

		<div class="links-container">
			<p>${i + 1}. ${formatProjectName(name)}</p>
			<a href="${url}" class="red">
        		<i class="fab fa-github-alt"></i>      
			</a>
		</div>
	`;

  list.appendChild(listItem);
});

function formatProjectName(name) {
  return name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
